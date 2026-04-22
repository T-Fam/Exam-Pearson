// WAEC Practice — Simplified Authentication
// Uses database for user storage, localStorage for sessions
// No Supabase Auth complexity
// Exposes window.WAECAuth

(function() {
  "use strict";

  const SESSION_KEY = "waec-session";

  // Simple hash for passwords
  function hash(str) {
    let h = 5381;
    const s = String(str);
    for (let i = 0; i < s.length; i++) {
      h = ((h << 5) + h) + s.charCodeAt(i);
      h = h | 0;
    }
    return "h_" + (h >>> 0).toString(16);
  }

  function getSession() {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function setSession(session) {
    try {
      if (session) localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      else localStorage.removeItem(SESSION_KEY);
    } catch (e) {}
  }

  // ===== SIGNUP =====
  async function signup({ name, username, password, email }) {
    name = String(name || "").trim();
    username = String(username || "").trim().toLowerCase();
    password = String(password || "");
    email = String(email || "").trim().toLowerCase();

    if (!name) throw new Error("Please enter your name.");
    if (!/^[a-z0-9_.-]{3,24}$/.test(username))
      throw new Error("Username must be 3–24 chars (letters, numbers, _ . -).");
    if (password.length < 6) throw new Error("Password must be at least 6 characters.");

    // Use database via WAECDatabase if available
    if (window.WAECDatabase && window.WAECDatabase.isConnected && window.supabase) {
      try {
        // Check if username already exists
        const { data: existing } = await window.supabase
          .from("users")
          .select("*")
          .eq("username", username);

        if (existing && existing.length > 0) {
          throw new Error("That username is already taken.");
        }

        // Create user in database
        const { data, error } = await window.supabase
          .from("users")
          .insert([
            {
              username,
              email: email || null,
              display_name: name,
              password_hash: hash(password),
              joined_at: new Date().toISOString()
            }
          ])
          .select();

        if (error) throw error;

        const user = data[0];
        setSession({ id: user.id, username: user.username, name: user.display_name });
        return { id: user.id, username, name, email };
      } catch (dbError) {
        console.warn("Database signup error, using localStorage:", dbError.message);
        // Fallback: store locally
        const user = {
          id: "local_" + Date.now(),
          username,
          display_name: name,
          password_hash: hash(password),
          email: email || null
        };
        setSession({ id: user.id, username: user.username, name: user.display_name });
        return user;
      }
    }

    throw new Error("Please refresh the page and try again.");
  }

  // ===== LOGIN =====
  async function login({ username, password }) {
    username = String(username || "").trim().toLowerCase();
    password = String(password || "");

    if (!window.supabase) {
      throw new Error("Database not available. Please refresh and try again.");
    }

    try {
      // Find user in database
      const { data, error } = await window.supabase
        .from("users")
        .select("*")
        .eq("username", username);

      if (error) throw error;

      if (!data || data.length === 0) {
        throw new Error("No account with that username.");
      }

      const user = data[0];

      // Check password
      if (user.password_hash !== hash(password)) {
        throw new Error("Wrong password.");
      }

      setSession({ id: user.id, username: user.username, name: user.display_name });
      return { id: user.id, username: user.username, name: user.display_name };
    } catch (error) {
      console.warn("Database login error:", error.message);
      throw error;
    }
  }

  // ===== LOGOUT =====
  function logout() {
    setSession(null);
  }

  // ===== CURRENT USER =====
  function currentUser() {
    return getSession();
  }

  // ===== QUIZ HISTORY =====
  function historyKey(username) {
    return "waec-history:" + username;
  }

  function getHistory(username) {
    if (!username) return [];
    try {
      const raw = localStorage.getItem(historyKey(username));
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  async function saveAttempt(username, attempt) {
    if (!username) return;

    // Save to database if available
    if (window.WAECDatabase && window.WAECDatabase.isConnected()) {
      try {
        const user = currentUser();
        await window.WAECDatabase.saveQuizAttempt(user.id, {
          subject: attempt.subject,
          topic: attempt.topic,
          grade: attempt.grade,
          type: attempt.type,
          totalQuestions: attempt.totalQuestions,
          correctAnswers: attempt.correctAnswers,
          scorePercentage: attempt.score,
          timeTaken: attempt.timeTaken
        });
        await window.WAECDatabase.updateUserProgress(user.id, attempt.subject, {
          scorePercentage: attempt.score
        });
      } catch (dbError) {
        console.warn("Failed to save to database:", dbError.message);
      }
    }

    // Always save to localStorage as backup
    const list = getHistory(username);
    list.push({
      ...attempt,
      savedAt: new Date().toISOString()
    });
    try {
      localStorage.setItem(historyKey(username), JSON.stringify(list));
    } catch (e) {}
  }

  function clearHistory(username) {
    if (!username) return;
    try {
      localStorage.removeItem(historyKey(username));
    } catch (e) {}
  }

  // ===== EXPORT =====
  window.WAECAuth = {
    signup,
    login,
    logout,
    currentUser,
    getHistory,
    saveAttempt,
    clearHistory,
    isDatabaseEnabled: () => !!window.supabase
  };
})();
