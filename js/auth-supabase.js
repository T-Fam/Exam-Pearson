// WAEC Practice — Authentication with Supabase Fallback
// Uses Supabase when available, falls back to localStorage
// Exposes window.WAECAuth

(function() {
  "use strict";

  const USERS_KEY = "waec-users";
  const SESSION_KEY = "waec-session";
  let useDatabase = false;

  // Check if database is available
  document.addEventListener("DOMContentLoaded", () => {
    useDatabase = window.WAECDatabase && window.WAECDatabase.isConnected();
  });

  // Lightweight hash for localStorage fallback
  function hash(str) {
    let h = 5381;
    const s = String(str);
    for (let i = 0; i < s.length; i++) {
      h = ((h << 5) + h) + s.charCodeAt(i);
      h = h | 0;
    }
    return "h_" + (h >>> 0).toString(16);
  }

  // ===== FALLBACK: LocalStorage Methods =====

  function loadUsersLocal() {
    try {
      const raw = localStorage.getItem(USERS_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveUsersLocal(users) {
    try {
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
    } catch (e) {}
  }

  function currentUserLocal() {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function setSessionLocal(session) {
    try {
      if (session) localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      else localStorage.removeItem(SESSION_KEY);
    } catch (e) {}
  }

  // ===== MAIN AUTH METHODS =====

  async function signup({ name, username, password, email }) {
    name = String(name || "").trim();
    username = String(username || "").trim().toLowerCase();
    password = String(password || "");
    email = String(email || "").trim().toLowerCase();

    if (!name) throw new Error("Please enter your name.");
    if (!/^[a-z0-9_.-]{3,24}$/.test(username))
      throw new Error("Username must be 3–24 chars (letters, numbers, _ . -).");
    if (password.length < 6) throw new Error("Password must be at least 6 characters.");

    // Try database first
    if (useDatabase && window.WAECDatabase) {
      try {
        const result = await window.WAECDatabase.signup({
          name,
          username,
          email: email || null,
          password
        });
        setSessionLocal({ username, name, id: result.id, email: result.email });
        return result;
      } catch (dbError) {
        console.warn("Database signup failed, falling back to localStorage:", dbError.message);
      }
    }

    // Fallback to localStorage
    const users = loadUsersLocal();
    if (users[username]) throw new Error("That username is already taken.");
    users[username] = {
      username,
      name,
      email: email || null,
      passHash: hash(password),
      createdAt: new Date().toISOString()
    };
    saveUsersLocal(users);
    setSessionLocal({ username, name });
    return { username, name };
  }

  async function login({ username, password, email }) {
    username = String(username || "").trim().toLowerCase();
    password = String(password || "");

    // Try database first
    if (useDatabase && window.WAECDatabase) {
      try {
        const result = await window.WAECDatabase.login({
          username,
          password,
          email
        });
        setSessionLocal({ username, id: result.id, email: result.email });
        return result;
      } catch (dbError) {
        console.warn("Database login failed, trying localStorage fallback...");
      }
    }

    // Fallback to localStorage
    const users = loadUsersLocal();
    const u = users[username];
    if (!u) throw new Error("No account with that username.");
    if (u.passHash !== hash(password)) throw new Error("Wrong password.");
    setSessionLocal({ username: u.username, name: u.name });
    return { username: u.username, name: u.name };
  }

  function logout() {
    setSessionLocal(null);
    if (useDatabase && window.WAECDatabase) {
      window.WAECDatabase.logout().catch(e => console.warn("Logout error:", e));
    }
  }

  function currentUser() {
    return currentUserLocal();
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

    // Save to database
    if (useDatabase && window.WAECDatabase) {
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
    } catch (e) {
      console.warn("localStorage full, skipping local save");
    }
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
    isDatabaseEnabled: () => useDatabase
  };
})();
