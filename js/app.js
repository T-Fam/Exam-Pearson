// WAEC Practice — Quiz Engine
// Relies on: window.QUESTIONS, window.questionsFor, window.catalogue,
//            window.WAECAuth, window.WAECDashboard

(function() {
  "use strict";

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  // ---------- State ----------
  const state = {
    grade: null,
    subject: null,
    topic: null,
    type: null,            // "objective" | "theory"
    numQuestions: 10,
    timeLimitSec: 15 * 60,
    questions: [],         // active run
    answers: [],           // user answers (idx for objective, string for theory)
    idx: 0,
    startedAt: null,
    timer: null,
    timeLeft: 0,
    submitted: false,
    lastSavedToHistory: false
  };

  // ---------- Init ----------
  document.addEventListener("DOMContentLoaded", () => {
    buildFilterOptions();
    hookFilters();
    hookPills();
    hookGradeChips();
    hookStart();
    hookThemeToggle();
    hookAuth();
    refreshAuthUI();
  });

  // Grade chip row — mirrors the (now-hidden) native select
  function hookGradeChips() {
    const chips = $$("#gradeChips .chip");
    const sel = $("#grade");
    chips.forEach(c => c.addEventListener("click", () => {
      chips.forEach(x => x.classList.remove("active"));
      c.classList.add("active");
      sel.value = c.dataset.grade;
      sel.dispatchEvent(new Event("change"));
    }));
    // keep chip selection in sync if anything else sets #grade
    sel.addEventListener("change", () => {
      chips.forEach(x => x.classList.toggle("active", x.dataset.grade === sel.value));
    });
  }

  // ---------- Auth UI ----------
  function hookAuth() {
    $("#navLogin").addEventListener("click", () => showAuth("login"));
    $("#navLogout").addEventListener("click", () => {
      if (!confirm("Log out of this device? Your saved history stays on this browser.")) return;
      window.WAECAuth.logout();
      refreshAuthUI();
      showView("filter");
    });
    $("#navDashboard").addEventListener("click", showDashboard);
    $("#navPractice").addEventListener("click", () => showView("filter"));
    const nudge = $("#nudgeLoginBtn");
    if (nudge) nudge.addEventListener("click", () => showAuth("login"));
    const goDash = $("#goDashboardBtn");
    if (goDash) goDash.addEventListener("click", showDashboard);
    const dashNew = $("#dashNewQuizBtn");
    if (dashNew) dashNew.addEventListener("click", () => showView("filter"));
    const emptyStart = $("#emptyStartBtn");
    if (emptyStart) emptyStart.addEventListener("click", () => showView("filter"));
    const clearBtn = $("#clearHistoryBtn");
    if (clearBtn) clearBtn.addEventListener("click", () => {
      const u = window.WAECAuth.currentUser();
      if (!u) return;
      if (confirm("Permanently delete all your quiz history? This cannot be undone.")) {
        window.WAECAuth.clearHistory(u.username);
        window.WAECDashboard.render();
      }
    });
    const filterSel = $("#historySubjectFilter");
    if (filterSel) filterSel.addEventListener("change", () => window.WAECDashboard.render());

    // Auth tabs
    $$(".auth-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        const which = tab.dataset.tab;
        $$(".auth-tab").forEach(t => t.classList.toggle("active", t === tab));
        $("#loginForm").classList.toggle("hidden", which !== "login");
        $("#signupForm").classList.toggle("hidden", which !== "signup");
      });
    });
    $("#switchToSignup").addEventListener("click", (e) => {
      e.preventDefault();
      $$(".auth-tab").forEach(t => t.classList.toggle("active", t.dataset.tab === "signup"));
      $("#loginForm").classList.add("hidden");
      $("#signupForm").classList.remove("hidden");
    });
    $("#switchToLogin").addEventListener("click", (e) => {
      e.preventDefault();
      $$(".auth-tab").forEach(t => t.classList.toggle("active", t.dataset.tab === "login"));
      $("#signupForm").classList.add("hidden");
      $("#loginForm").classList.remove("hidden");
    });

    $("#loginForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const err = $("#loginError");
      err.classList.add("hidden");
      try {
        window.WAECAuth.login({
          username: $("#loginUsername").value,
          password: $("#loginPassword").value
        });
        $("#loginForm").reset();
        refreshAuthUI();
        showDashboard();
      } catch (e2) {
        err.textContent = e2.message;
        err.classList.remove("hidden");
      }
    });

    $("#signupForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const err = $("#signupError");
      err.classList.add("hidden");
      try {
        window.WAECAuth.signup({
          name: $("#signupName").value,
          username: $("#signupUsername").value,
          email: $("#signupEmail").value,
          password: $("#signupPassword").value
        });
        $("#signupForm").reset();
        refreshAuthUI();
        showDashboard();
      } catch (e2) {
        err.textContent = e2.message;
        err.classList.remove("hidden");
      }
    });
  }

  function refreshAuthUI() {
    const u = window.WAECAuth.currentUser();
    const loggedIn = !!u;
    $("#navLogin").classList.toggle("hidden", loggedIn);
    $("#navLogout").classList.toggle("hidden", !loggedIn);
    $("#navDashboard").classList.toggle("hidden", !loggedIn);
    const chip = $("#userChip");
    if (loggedIn) {
      chip.textContent = "👤 " + (u.name || u.username);
      chip.classList.remove("hidden");
    } else {
      chip.classList.add("hidden");
    }
    const nudge = $("#loginNudge");
    if (nudge) nudge.classList.toggle("hidden", loggedIn);
    const goDash = $("#goDashboardBtn");
    if (goDash) goDash.classList.toggle("hidden", !loggedIn);
  }

  function showAuth(tab) {
    $$(".auth-tab").forEach(t => t.classList.toggle("active", t.dataset.tab === (tab || "login")));
    $("#loginForm").classList.toggle("hidden", tab === "signup");
    $("#signupForm").classList.toggle("hidden", tab !== "signup");
    $("#loginError").classList.add("hidden");
    $("#signupError").classList.add("hidden");
    showView("auth");
  }

  function showDashboard() {
    const u = window.WAECAuth.currentUser();
    if (!u) return showAuth("login");
    showView("dashboard");
    window.WAECDashboard.render();
  }

  function hookThemeToggle() {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      let next;
      if (current === "dark") next = "light";
      else if (current === "light") next = "dark";
      else {
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        next = prefersDark ? "light" : "dark";
      }
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("waec-theme", next); } catch (e) {}
      // If dashboard is open, re-render charts so grid colors match new theme
      if (!$("#view-dashboard").classList.contains("hidden")) {
        window.WAECDashboard.render();
      }
    });
  }

  function buildFilterOptions() {
    const cat = window.catalogue();
    const subjectSelect = $("#subject");
    subjectSelect.innerHTML = '<option value="">— Select subject —</option>' +
      Object.keys(cat).sort().map(s => `<option>${s}</option>`).join("");
  }

  function hookFilters() {
    $("#subject").addEventListener("change", onSubjectChange);
    $("#topic").addEventListener("change", onTopicChange);
    $("#grade").addEventListener("change", updateStartButton);
    $("#numQuestions").addEventListener("change", () => {
      state.numQuestions = Math.max(1, Math.min(50, Number($("#numQuestions").value) || 10));
      $("#numQuestions").value = state.numQuestions;
    });
    $("#timeMinutes").addEventListener("change", () => {
      const m = Math.max(1, Math.min(120, Number($("#timeMinutes").value) || 15));
      $("#timeMinutes").value = m;
      state.timeLimitSec = m * 60;
    });
  }

  function onSubjectChange() {
    const subj = $("#subject").value;
    state.subject = subj || null;
    const topicSel = $("#topic");
    topicSel.innerHTML = '<option value="">— Select topic —</option>';
    topicSel.disabled = !subj;
    state.topic = null;
    if (subj) {
      const topics = window.catalogue()[subj] || [];
      if (topics.length) {
        topicSel.innerHTML += topics.map(t => `<option>${t}</option>`).join("");
        topicSel.disabled = false;
      } else {
        topicSel.innerHTML = '<option value="">— Topics coming soon —</option>';
        topicSel.disabled = true;
      }
    }
    updateStartButton();
  }

  function onTopicChange() {
    state.topic = $("#topic").value || null;
    updateStartButton();
  }

  function hookPills() {
    $$(".pill").forEach(pill => {
      pill.addEventListener("click", () => {
        const group = pill.dataset.group;
        const value = pill.dataset.value;
        $$(`.pill[data-group="${group}"]`).forEach(p => p.classList.remove("selected"));
        pill.classList.add("selected");
        if (group === "type") state.type = value;
        updateStartButton();
      });
    });
  }

  function updateStartButton() {
    state.grade = $("#grade").value || null;
    const ready = state.grade && state.subject && state.topic && state.type;
    const startBtn = $("#startBtn");
    startBtn.disabled = !ready;
    if (ready) {
      const pool = window.questionsFor(state.subject, state.topic, state.type, state.grade);
      $("#availability").textContent =
        pool.length
          ? `${pool.length} question${pool.length===1?"":"s"} available for this filter.`
          : "No questions yet for this exact filter — try another combination.";
      startBtn.disabled = pool.length === 0;
    } else {
      $("#availability").textContent = "Pick grade, subject, topic, and question type to begin.";
    }
  }

  function hookStart() {
    $("#startBtn").addEventListener("click", startQuiz);
    $("#submitBtn").addEventListener("click", () => submitQuiz(false));
    $("#prevBtn").addEventListener("click", () => goTo(state.idx - 1));
    $("#nextBtn").addEventListener("click", () => goTo(state.idx + 1));
    $("#restartBtn").addEventListener("click", resetToFilters);
    $("#backToFiltersBtn").addEventListener("click", () => {
      if (confirm("Leave the quiz? Your progress will be lost.")) resetToFilters();
    });
  }

  // ---------- Quiz flow ----------
  function startQuiz() {
    const pool = window.questionsFor(state.subject, state.topic, state.type, state.grade);
    if (!pool.length) return;
    state.questions = shuffle(pool).slice(0, Math.min(state.numQuestions, pool.length));
    state.answers = new Array(state.questions.length).fill(null);
    state.idx = 0;
    state.submitted = false;
    state.startedAt = Date.now();
    state.timeLeft = state.timeLimitSec;
    state.lastSavedToHistory = false;

    showView("quiz");
    renderQuizMeta();
    renderQuestion();
    startTimer();
  }

  function renderQuizMeta() {
    $("#quizTitle").textContent = `${state.subject} — ${state.topic}`;
    $("#quizSubtitle").textContent =
      `Grade ${state.grade} • ${state.type === "objective" ? "Objective (MCQ)" : "Theory"} • ${state.questions.length} questions`;
  }

  function renderQuestion() {
    const q = state.questions[state.idx];
    const total = state.questions.length;
    $("#qCounter").textContent = `Question ${state.idx + 1} of ${total}`;
    const pct = Math.round(((state.idx + 1) / total) * 100);
    const fill = $("#qpfill"); if (fill) fill.style.width = pct + "%";
    const pctEl = $("#qPercent"); if (pctEl) pctEl.textContent = pct + "%";
    renderQuizDots();
    updateAnsweredCount();
    const container = $("#questionContainer");

    if (state.type === "objective") {
      const selected = state.answers[state.idx];
      const letters = ["A", "B", "C", "D"];
      container.innerHTML = `
        <div class="question">
          <p class="q-text">${escapeHTML(q.q)}</p>
          <div class="options">
            ${q.options.map((opt, i) => `
              <label class="option ${selected === i ? "selected" : ""}" data-i="${i}">
                <span class="letter">${letters[i]}</span>
                <span>${escapeHTML(opt)}</span>
              </label>
            `).join("")}
          </div>
        </div>
      `;
      $$(".option").forEach(el => {
        el.addEventListener("click", () => {
          const i = Number(el.dataset.i);
          state.answers[state.idx] = i;
          $$(".option").forEach(o => o.classList.remove("selected"));
          el.classList.add("selected");
          renderQuizDots();
          updateAnsweredCount();
        });
      });
    } else {
      const saved = state.answers[state.idx] || "";
      container.innerHTML = `
        <div class="question">
          <p class="q-text">${escapeHTML(q.q)}</p>
          <textarea id="theoryInput" placeholder="Write your answer here…">${escapeHTML(saved)}</textarea>
        </div>
      `;
      $("#theoryInput").addEventListener("input", (e) => {
        state.answers[state.idx] = e.target.value;
        renderQuizDots();
        updateAnsweredCount();
      });
    }

    $("#prevBtn").disabled = state.idx === 0;
    $("#nextBtn").disabled = state.idx === state.questions.length - 1;
  }

  function goTo(i) {
    if (i < 0 || i >= state.questions.length) return;
    state.idx = i;
    renderQuestion();
  }

  function renderQuizDots() {
    const wrap = $("#quizDots"); if (!wrap) return;
    wrap.innerHTML = state.questions.map((_, i) => {
      const a = state.answers[i];
      const answered = state.type === "objective"
        ? (a !== null && a !== undefined)
        : (a && String(a).trim().length > 0);
      const classes = ["qdot"];
      if (i === state.idx) classes.push("cur");
      else if (answered) classes.push("ans");
      return `<button type="button" class="${classes.join(" ")}" data-i="${i}" aria-label="Go to question ${i+1}"></button>`;
    }).join("");
    wrap.querySelectorAll(".qdot").forEach(d => {
      d.addEventListener("click", () => goTo(Number(d.dataset.i)));
    });
  }

  function updateAnsweredCount() {
    const total = state.questions.length;
    const n = state.answers.filter(a =>
      state.type === "objective"
        ? (a !== null && a !== undefined)
        : (a && String(a).trim().length > 0)
    ).length;
    const el = $("#answeredCount"); if (el) el.textContent = `${n} / ${total}`;
  }

  // ---------- Timer ----------
  function startTimer() {
    stopTimer();
    updateTimerDisplay();
    state.timer = setInterval(() => {
      state.timeLeft -= 1;
      updateTimerDisplay();
      if (state.timeLeft <= 0) {
        stopTimer();
        submitQuiz(true);
      }
    }, 1000);
  }
  function stopTimer() { if (state.timer) { clearInterval(state.timer); state.timer = null; } }
  function updateTimerDisplay() {
    const el = $("#timer");
    const m = Math.floor(state.timeLeft / 60);
    const s = state.timeLeft % 60;
    el.textContent = `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
    el.classList.toggle("warn", state.timeLeft <= 30);
  }

  // ---------- Submission & scoring ----------
  function submitQuiz(auto) {
    if (state.submitted) return;
    state.submitted = true;
    stopTimer();

    if (!auto && state.type === "objective") {
      const unanswered = state.answers.filter(a => a === null).length;
      if (unanswered > 0) {
        if (!confirm(`${unanswered} question(s) unanswered. Submit anyway?`)) {
          state.submitted = false;
          startTimer();
          return;
        }
      }
    }

    const elapsedSec = state.timeLimitSec - state.timeLeft;
    let correct = 0, wrong = 0, skipped = 0;

    const review = state.questions.map((q, i) => {
      const a = state.answers[i];
      if (state.type === "objective") {
        if (a === null || a === undefined) { skipped++; return { q, given:null, correctIdx:q.answer, verdict:"skipped" }; }
        if (a === q.answer) { correct++; return { q, given:a, correctIdx:q.answer, verdict:"correct" }; }
        wrong++; return { q, given:a, correctIdx:q.answer, verdict:"wrong" };
      } else {
        const empty = !a || !String(a).trim();
        if (empty) skipped++;
        return { q, given:a || "", verdict: empty ? "skipped" : "submitted" };
      }
    });

    // Save to user history if logged in
    const user = window.WAECAuth.currentUser();
    state.lastSavedToHistory = false;
    if (user) {
      const total = state.questions.length;
      const numCorrect = state.type === "objective" ? correct : (total - skipped);
      const score = state.type === "objective" ? Math.round((correct / total) * 100) : Math.round(((total - skipped) / total) * 100);

      const attempt = {
        takenAt: new Date().toISOString(),
        subject: state.subject,
        topic: state.topic,
        grade: state.grade,
        type: state.type,
        // For localStorage display
        total,
        correct: numCorrect,
        wrong: state.type === "objective" ? wrong : 0,
        skipped,
        percent: score,
        elapsedSec,
        // For Supabase sync (required for cross-device analytics)
        totalQuestions: total,
        correctAnswers: numCorrect,
        score: score,
        timeTaken: elapsedSec
      };
      window.WAECAuth.saveAttempt(user.username, attempt);
      state.lastSavedToHistory = true;
    }

    renderResults({ correct, wrong, skipped, elapsedSec, review });
    showView("results");
  }

  function renderResults({ correct, wrong, skipped, elapsedSec, review }) {
    const total = state.questions.length;

    if (state.type === "objective") {
      const pct = Math.round((correct / total) * 100);
      $("#scoreNumber").textContent = `${correct} / ${total}`;
      $("#scorePct").textContent = `${pct}% — ${pct >= 75 ? "Excellent" : pct >= 50 ? "Keep practicing" : "Review this topic"}`;
      $("#statCorrect").textContent = correct;
      $("#statWrong").textContent = wrong;
      $("#statSkipped").textContent = skipped;
      $("#statCorrectLbl").textContent = "Correct";
      $("#statWrongLbl").textContent = "Wrong";
      $("#statSkippedLbl").textContent = "Skipped";
    } else {
      $("#scoreNumber").textContent = `${total - skipped} / ${total}`;
      $("#scorePct").textContent = `Theory answers submitted — self-review against model answers below`;
      $("#statCorrect").textContent = total - skipped;
      $("#statWrong").textContent = "—";
      $("#statSkipped").textContent = skipped;
      $("#statCorrectLbl").textContent = "Attempted";
      $("#statWrongLbl").textContent = "—";
      $("#statSkippedLbl").textContent = "Skipped";
    }

    const m = Math.floor(elapsedSec / 60), s = elapsedSec % 60;
    $("#statTime").textContent = `${m}m ${s}s`;

    // 3-box score-report grid (prototype-style)
    const srScore = $("#srScore"), srAcc = $("#srAccuracy"), srTime = $("#srTime");
    if (srScore && srAcc && srTime) {
      if (state.type === "objective") {
        const pct = Math.round((correct / total) * 100);
        const attempted = correct + wrong;
        const acc = attempted ? Math.round((correct / attempted) * 100) : 0;
        srScore.innerHTML = `${pct}<span>%</span>`;
        srAcc.innerHTML = `${acc}<span>%</span>`;
      } else {
        const submittedPct = Math.round(((total - skipped) / total) * 100);
        srScore.innerHTML = `${total - skipped}<span>/${total}</span>`;
        srAcc.innerHTML = `${submittedPct}<span>%</span>`;
      }
      srTime.innerHTML = `${m}<span>m ${s}s</span>`;
    }

    const note = $("#resultsSavedNote");
    if (note) note.classList.toggle("hidden", !state.lastSavedToHistory);
    const goDash = $("#goDashboardBtn");
    if (goDash) goDash.classList.toggle("hidden", !window.WAECAuth.currentUser());

    const letters = ["A", "B", "C", "D"];
    const reviewHtml = review.map((r, i) => {
      if (state.type === "objective") {
        const badgeCls = r.verdict === "correct" ? "ok" : r.verdict === "wrong" ? "bad" : "skip";
        const badgeTxt = r.verdict === "correct" ? "Correct" : r.verdict === "wrong" ? "Wrong" : "Skipped";
        const given = r.given !== null && r.given !== undefined ? `${letters[r.given]}. ${escapeHTML(r.q.options[r.given])}` : "—";
        const correctTxt = `${letters[r.correctIdx]}. ${escapeHTML(r.q.options[r.correctIdx])}`;
        return `
          <div class="review-item">
            <span class="badge ${badgeCls}">${badgeTxt}</span>
            <div>
              <div class="q">Q${i+1}. ${escapeHTML(r.q.q)}</div>
              <div class="meta">Your answer: ${given}</div>
              <div class="meta">Correct answer: ${correctTxt}</div>
            </div>
          </div>
        `;
      } else {
        const badgeCls = r.verdict === "submitted" ? "ok" : "skip";
        const badgeTxt = r.verdict === "submitted" ? "Submitted" : "Skipped";
        return `
          <div class="review-item">
            <span class="badge ${badgeCls}">${badgeTxt}</span>
            <div>
              <div class="q">Q${i+1}. ${escapeHTML(r.q.q)}</div>
              <div class="meta">Your answer:</div>
              <div class="model">${escapeHTML(r.given || "—")}</div>
              <div class="meta" style="margin-top:6px;">Model answer:</div>
              <div class="model">${escapeHTML(r.q.model || "")}</div>
            </div>
          </div>
        `;
      }
    }).join("");
    $("#review").innerHTML = reviewHtml || '<div class="empty">No questions to review.</div>';
  }

  function resetToFilters() {
    stopTimer();
    state.submitted = false;
    state.questions = [];
    state.answers = [];
    state.idx = 0;
    showView("filter");
  }

  function showView(view) {
    $("#view-auth").classList.toggle("hidden", view !== "auth");
    $("#view-filter").classList.toggle("hidden", view !== "filter");
    $("#view-dashboard").classList.toggle("hidden", view !== "dashboard");
    $("#view-quiz").classList.toggle("hidden", view !== "quiz");
    $("#view-results").classList.toggle("hidden", view !== "results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---------- Utils ----------
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function escapeHTML(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
})();
