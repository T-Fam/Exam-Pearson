// WAEC Practice — Local Authentication with Database Sync
// Uses localStorage for instant auth, syncs to Supabase in background
// Exposes window.WAECAuth

(function() {
  "use strict";

  const USERS_KEY = "waec-users";
  const SESSION_KEY = "waec-session";

  // Simple hash for passwords (not for security, just obfuscation)
  function hash(str) {
    let h = 5381;
    const s = String(str);
    for (let i = 0; i < s.length; i++) {
      h = ((h << 5) + h) + s.charCodeAt(i);
      h = h | 0;
    }
    return "h_" + (h >>> 0).toString(16);
  }

  function loadUsers() {
    try {
      const raw = localStorage.getItem(USERS_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveUsers(users) {
    try {
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
    } catch (e) {}
  }

  function currentUser() {
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
  function signup({ name, username, password, email }) {
    name = String(name || "").trim();
    username = String(username || "").trim().toLowerCase();
    password = String(password || "");
    email = String(email || "").trim().toLowerCase();

    if (!name) throw new Error("Please enter your name.");
    if (!/^[a-z0-9_.-]{3,24}$/.test(username))
      throw new Error("Username must be 3–24 chars (letters, numbers, _ . -).");
    if (password.length < 6) throw new Error("Password must be at least 6 characters.");

    const users = loadUsers();
    if (users[username]) throw new Error("That username is already taken.");

    const userId = "user_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
    const user = {
      id: userId,
      username,
      name,
      email: email || null,
      passHash: hash(password),
      createdAt: new Date().toISOString()
    };

    users[username] = user;
    saveUsers(users);
    setSession({ id: userId, username, name, email });

    // Sync to Supabase in background (don't wait for it)
    syncUserToSupabase(user);

    return { id: userId, username, name, email };
  }

  // ===== LOGIN =====
  function login({ username, password }) {
    username = String(username || "").trim().toLowerCase();
    password = String(password || "");

    const users = loadUsers();
    const u = users[username];

    if (!u) throw new Error("No account with that username.");
    if (u.passHash !== hash(password)) throw new Error("Wrong password.");

    setSession({ id: u.id, username: u.username, name: u.name });
    return { id: u.id, username: u.username, name: u.name };
  }

  // ===== LOGOUT =====
  function logout() {
    setSession(null);
  }

  // ===== SYNC TO SUPABASE =====
  function syncUserToSupabase(user) {
    if (!window.supabase) return;

    setTimeout(() => {
      try {
        window.supabase
          .from("users")
          .insert([
            {
              id: user.id,
              username: user.username,
              email: user.email,
              display_name: user.name,
              password_hash: user.passHash,
              joined_at: user.createdAt
            }
          ])
          .then(() => {
            console.log("✓ User synced to Supabase");
          })
          .catch((err) => {
            console.warn("Background sync failed (non-critical):", err.message);
          });
      } catch (e) {
        console.warn("Supabase sync error:", e.message);
      }
    }, 500);
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

    // Save to localStorage immediately (fast)
    const list = getHistory(username);
    const attemptWithId = {
      ...attempt,
      id: "attempt_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9),
      savedAt: new Date().toISOString()
    };
    list.push(attemptWithId);
    try {
      localStorage.setItem(historyKey(username), JSON.stringify(list));
    } catch (e) {}

    // Sync to Supabase in background
    setTimeout(() => {
      syncQuizToSupabase(username, attemptWithId);
    }, 300);
  }

  function syncQuizToSupabase(username, attempt) {
    if (!window.supabase) return;

    try {
      const user = currentUser();
      if (!user) return;

      window.supabase
        .from("quiz_attempts")
        .insert([
          {
            id: attempt.id,
            user_id: user.id,
            subject: attempt.subject,
            topic: attempt.topic || null,
            grade: attempt.grade || null,
            question_type: attempt.type,
            total_questions: attempt.totalQuestions,
            correct_answers: attempt.correctAnswers,
            score: attempt.score,
            time_taken_seconds: attempt.timeTaken,
            attempted_at: attempt.savedAt
          }
        ])
        .then(() => {
          console.log("✓ Quiz synced to Supabase");
          // Also update user_progress
          updateProgressInSupabase(user.id, attempt.subject, attempt.score);
        })
        .catch((err) => {
          console.warn("Quiz sync to Supabase failed (data saved locally):", err.message);
        });
    } catch (e) {
      console.warn("Supabase sync error:", e.message);
    }
  }

  function updateProgressInSupabase(userId, subject, score) {
    if (!window.supabase) return;

    try {
      window.supabase
        .from("user_progress")
        .upsert(
          {
            user_id: userId,
            subject: subject,
            total_attempts: 1,
            average_score: score,
            highest_score: score,
            last_attempt_at: new Date().toISOString()
          },
          { onConflict: "user_id,subject" }
        )
        .then(() => {
          console.log("✓ Progress synced to Supabase");
        })
        .catch((err) => {
          console.warn("Progress sync failed:", err.message);
        });
    } catch (e) {
      console.warn("Progress sync error:", e.message);
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
    isDatabaseEnabled: () => !!window.supabase
  };
})();
