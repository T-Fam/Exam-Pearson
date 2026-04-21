// WAEC Practice — Admin Authentication
// Manages admin-only access to the admin panel
// Exposes window.WAECAdminAuth

(function() {
  "use strict";

  const ADMIN_KEY = "waec-admin-session";

  // Admin credentials (in production, use Supabase for this too)
  // For now, storing locally. Change these passwords immediately!
  const ADMIN_USERS = {
    "admin": "admin123", // CHANGE THIS!
    "toni": "waec@2026"   // Example
  };

  function adminLogin({ username, password }) {
    username = String(username || "").trim().toLowerCase();
    password = String(password || "");

    if (!ADMIN_USERS[username]) {
      throw new Error("Admin account not found.");
    }

    // Simple check (in production, hash the password)
    if (ADMIN_USERS[username] !== password) {
      throw new Error("Invalid admin password.");
    }

    const session = {
      username,
      isAdmin: true,
      loginTime: new Date().toISOString()
    };

    try {
      localStorage.setItem(ADMIN_KEY, JSON.stringify(session));
    } catch (e) {}

    return session;
  }

  function adminLogout() {
    try {
      localStorage.removeItem(ADMIN_KEY);
    } catch (e) {}
  }

  function currentAdmin() {
    try {
      const raw = localStorage.getItem(ADMIN_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function isAdmin() {
    const admin = currentAdmin();
    return !!admin && admin.isAdmin === true;
  }

  // Update admin password
  function changeAdminPassword(username, newPassword) {
    if (newPassword.length < 6) {
      throw new Error("Password must be at least 6 characters.");
    }
    ADMIN_USERS[username] = newPassword;
    // In production, save this to database
    console.warn("Admin password updated. Save to database in production!");
  }

  // Export
  window.WAECAdminAuth = {
    login: adminLogin,
    logout: adminLogout,
    currentAdmin,
    isAdmin,
    changePassword: changeAdminPassword
  };
})();
