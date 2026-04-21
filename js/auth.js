// WAEC Practice — Authentication (client-side, localStorage)
// Exposes window.WAECAuth

(function () {
  "use strict";

  const USERS_KEY = "waec-users";
  const SESSION_KEY = "waec-session";

  // Lightweight non-cryptographic password hash (just to avoid storing plain text in
  // localStorage on a shared device — this is NOT a security boundary).
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
    } catch (e) { return {}; }
  }
  function saveUsers(users) {
    try { localStorage.setItem(USERS_KEY, JSON.stringify(users)); } catch (e) {}
  }

  function currentUser() {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function setSession(session) {
    try {
      if (session) localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      else localStorage.removeItem(SESSION_KEY);
    } catch (e) {}
  }

  function signup({ name, username, password }) {
    name = String(name || "").trim();
    username = String(username || "").trim().toLowerCase();
    password = String(password || "");
    if (!name) throw new Error("Please enter your name.");
    if (!/^[a-z0-9_.-]{3,24}$/.test(username))
      throw new Error("Username must be 3–24 chars (letters, numbers, _ . -).");
    if (password.length < 4) throw new Error("Password must be at least 4 characters.");

    const users = loadUsers();
    if (users[username]) throw new Error("That username is already taken.");
    users[username] = {
      username,
      name,
      passHash: hash(password),
      createdAt: new Date().toISOString()
    };
    saveUsers(users);
    setSession({ username, name });
    return { username, name };
  }

  function login({ username, password }) {
    username = String(username || "").trim().toLowerCase();
    password = String(password || "");
    const users = loadUsers();
    const u = users[username];
    if (!u) throw new Error("No account with that username.");
    if (u.passHash !== hash(password)) throw new Error("Wrong password.");
    setSession({ username: u.username, name: u.name });
    return { username: u.username, name: u.name };
  }

  function logout() { setSession(null); }

  // ---------- Quiz history (per user) ----------
  function historyKey(username) {
    return "waec-history:" + username;
  }

  function getHistory(username) {
    if (!username) return [];
    try {
      const raw = localStorage.getItem(historyKey(username));
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  }

  function saveAttempt(username, attempt) {
    if (!username) return;
    const list = getHistory(username);
    list.push(attempt);
    try { localStorage.setItem(historyKey(username), JSON.stringify(list)); } catch (e) {}
  }

  function clearHistory(username) {
    if (!username) return;
    try { localStorage.removeItem(historyKey(username)); } catch (e) {}
  }

  window.WAECAuth = {
    signup, login, logout, currentUser,
    getHistory, saveAttempt, clearHistory
  };
})();
