// WAEC Questions Loader — Dynamically loads generated questions from questions folder
// Handles both full-format questions and simple question text

(function() {
  "use strict";

  let loadedQuestions = null;
  let loadError = null;
  const DEBUG = true;

  function log(msg, data) {
    if (DEBUG) console.log(msg, data || "");
  }

  // Get the latest questions directory using manifest
  async function getLatestQuestionsDate() {
    try {
      // Try to fetch the main manifest
      const response = await fetch("./questions/manifest.json");
      if (!response.ok) throw new Error("Manifest not found");

      const manifest = await response.json();
      const dates = Object.keys(manifest).sort().reverse();

      if (dates.length === 0) throw new Error("No dates in manifest");
      log("📅 Latest questions date:", dates[0]);
      return dates[0];
    } catch (e) {
      console.warn("⚠️ Could not read manifest:", e.message);

      // Fallback: try dates going back 30 days
      const today = new Date();
      for (let i = 0; i < 30; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split("T")[0];

        try {
          const response = await fetch(`./questions/${dateStr}/manifest.json`);
          if (response.ok) {
            log("📅 Found fallback date:", dateStr);
            return dateStr;
          }
        } catch (e) {
          // Continue
        }
      }

      return null;
    }
  }

  // Load a single subject's questions from the JSON file
  async function loadSubjectQuestions(subject, date) {
    try {
      const filename = subject.toLowerCase();
      const url = `./questions/${date}/${filename}.json`;
      const response = await fetch(url);

      if (!response.ok) {
        log(`❌ Could not load ${subject}:`, response.status);
        return null;
      }

      const data = await response.json();
      return data;
    } catch (e) {
      log(`❌ Error loading ${subject}:`, e.message);
      return null;
    }
  }

  // Load manifest for a date
  async function loadManifest(date) {
    try {
      const response = await fetch(`./questions/${date}/manifest.json`);
      if (!response.ok) return null;
      return await response.json();
    } catch (e) {
      console.warn(`⚠️ Could not load manifest for ${date}:`, e.message);
      return null;
    }
  }

  // Transform simple question format into WAEC format
  // Handles both structured and plain-text questions
  function transformQuestions(questions, subjectName) {
    if (!Array.isArray(questions)) {
      return { objective: [], theory: [] };
    }

    const result = {
      objective: [],
      theory: []
    };

    questions.forEach((q, idx) => {
      // Check if this is a structured question with options
      if (q.options && Array.isArray(q.options) && q.options.length >= 2) {
        // Structured objective question
        result.objective.push({
          q: q.question || q.q || "",
          options: q.options,
          answer: q.answer !== undefined ? q.answer : 0,
          grades: q.grades || [10, 11, 12]
        });
      } else {
        // Plain text question — treat as theory/short answer
        result.theory.push({
          q: q.question || q.q || "",
          model: q.model || q.answer || `Sample answer for: ${q.question}`,
          grades: q.grades || [10, 11, 12]
        });
      }
    });

    // If we have no objective questions but have theory, convert some theory to objective
    if (result.objective.length === 0 && result.theory.length > 0) {
      log(
        `ℹ️ No objective questions for ${subjectName}, creating practice set...`
      );

      // Take first 40 theory questions as practice questions
      result.objective = result.theory.slice(0, 40).map((q) => ({
        q: q.q,
        options: [
          "Correct",
          "Incorrect",
          "Partially correct",
          "Cannot be determined"
        ],
        answer: 0, // Mark first option as correct for placeholder
        grades: q.grades
      }));

      result.theory = result.theory.slice(40, 50);
    }

    return result;
  }

  // Load all questions for a given date using manifest
  async function loadAllQuestions(date) {
    const manifest = await loadManifest(date);
    if (!manifest) {
      console.warn("⚠️ Could not load manifest, using empty questions");
      return { questions: {}, loadedCount: 0, date };
    }

    const subjects = manifest.subjects || [];
    const questionsObj = {};
    let loadedCount = 0;

    log(`🔄 Loading ${subjects.length} subjects from ${date}...`);

    for (const subject of subjects) {
      const data = await loadSubjectQuestions(subject, date);
      if (data && data.length > 0) {
        // Convert snake_case to Title Case for display
        const displayName = subject
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        questionsObj[displayName] = transformQuestions(data, displayName);
        loadedCount++;
        log(`✅ Loaded ${data.length} questions for ${displayName}`);
      }
    }

    return { questions: questionsObj, loadedCount, date };
  }

  // Initialize loader
  async function init() {
    try {
      console.log("🔄 Loading WAEC questions from generated files...");
      const date = await getLatestQuestionsDate();

      if (!date) {
        console.warn(
          "⚠️ No generated questions found, using hardcoded questions"
        );
        loadError = "No generated questions found";
        return;
      }

      const result = await loadAllQuestions(date);

      if (result.loadedCount === 0) {
        console.warn(
          "⚠️ No questions loaded from files, using hardcoded questions"
        );
        loadError = "No questions could be loaded from files";
        return;
      }

      loadedQuestions = result.questions;
      console.log(
        `✅ Successfully loaded ${result.loadedCount} subjects from ${date}`
      );
      console.log(
        `📊 Total subjects available: ${Object.keys(loadedQuestions).length}`
      );

      // Merge with window.QUESTIONS if it exists (hardcoded questions as fallback)
      if (window.QUESTIONS && typeof window.QUESTIONS === "object") {
        const originalCount = Object.keys(window.QUESTIONS).length;
        // Prefer loaded questions, but keep hardcoded ones as fallback
        window.QUESTIONS = {
          ...window.QUESTIONS,
          ...loadedQuestions
        };
        log(
          `🔀 Merged ${originalCount} hardcoded + ${Object.keys(loadedQuestions).length} loaded subjects`
        );
      } else {
        window.QUESTIONS = loadedQuestions;
      }

      // Mark as loaded
      if (window.QuestionsLoader) {
        window.QuestionsLoader._loaded = true;
      }
    } catch (e) {
      console.error("❌ Questions loader error:", e);
      loadError = e.message;
    }
  }

  // Start loading when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    // DOM is already loaded, use setTimeout to ensure execution order
    setTimeout(init, 100);
  }

  // Export API
  window.QuestionsLoader = {
    isLoaded: () => loadedQuestions !== null,
    getError: () => loadError,
    getQuestions: () => loadedQuestions,
    getLoadedCount: () => (loadedQuestions ? Object.keys(loadedQuestions).length : 0),
    _loaded: false
  };

  log("✨ Questions Loader initialized");
})();
