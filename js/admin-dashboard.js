// WAEC Practice — Admin Dashboard
// Displays user data, statistics, and management tools
// Requires: WAECDatabase, WAECAdminAuth

(function() {
  "use strict";

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  let currentView = "overview";
  let allUsers = [];
  let allAttempts = [];

  // ===== INITIALIZATION =====

  document.addEventListener("DOMContentLoaded", () => {
    hookAdminUI();
    if (!window.WAECAdminAuth.isAdmin()) {
      showAdminLogin();
    } else {
      showAdminDashboard();
      loadDashboardData();
    }
  });

  // ===== AUTH UI =====

  function showAdminLogin() {
    const loginForm = $("#adminLoginForm");
    if (!loginForm) return;

    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = $("#adminUsername").value;
      const password = $("#adminPassword").value;
      const errorEl = $("#adminLoginError");

      try {
        window.WAECAdminAuth.login({ username, password });
        loginForm.reset();
        errorEl.classList.add("hidden");
        location.reload(); // Reload to show dashboard
      } catch (error) {
        errorEl.textContent = error.message;
        errorEl.classList.remove("hidden");
      }
    });
  }

  function hookAdminUI() {
    const logoutBtn = $("#adminLogoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        if (confirm("Log out of admin panel?")) {
          window.WAECAdminAuth.logout();
          location.reload();
        }
      });
    }

    // Navigation
    $$(".admin-nav-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const view = btn.dataset.view;
        if (view) {
          currentView = view;
          showAdminView(view);
        }
      });
    });
  }

  function showAdminView(view) {
    $$(".admin-section").forEach(sec => {
      sec.classList.add("hidden");
    });
    const section = $(`#admin-${view}`);
    if (section) section.classList.remove("hidden");

    // Update active nav
    $$(".admin-nav-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.view === view);
    });

    // Load data for this view
    if (view === "overview") renderOverview();
    else if (view === "users") renderUsers();
    else if (view === "reports") renderReports();
  }

  function showAdminDashboard() {
    const adminPanel = $("#adminPanel");
    if (adminPanel) adminPanel.classList.remove("hidden");
  }

  // ===== LOAD DATA =====

  async function loadDashboardData() {
    if (!window.WAECDatabase?.isConnected()) {
      console.warn("Database not connected");
      return;
    }

    try {
      // Load all users (in production, use proper API with pagination)
      const { data: users } = await supabaseClient
        .from("users")
        .select("*")
        .order("joined_at", { ascending: false });

      allUsers = users || [];

      // Load all attempts
      const { data: attempts } = await supabaseClient
        .from("quiz_attempts")
        .select("*")
        .order("attempted_at", { ascending: false });

      allAttempts = attempts || [];

      // Initial render
      renderOverview();
    } catch (error) {
      console.error("Failed to load dashboard data:", error);
    }
  }

  // ===== OVERVIEW SECTION =====

  function renderOverview() {
    const section = $("#admin-overview");
    if (!section) return;

    const totalUsers = allUsers.length;
    const totalAttempts = allAttempts.length;
    const avgScoreAll = allAttempts.length > 0
      ? Math.round(
          allAttempts.reduce((sum, a) => sum + (a.score || 0), 0) /
            allAttempts.length
        )
      : 0;

    const subjectStats = {};
    allAttempts.forEach(attempt => {
      if (!subjectStats[attempt.subject]) {
        subjectStats[attempt.subject] = {
          count: 0,
          totalScore: 0,
          avgScore: 0
        };
      }
      subjectStats[attempt.subject].count++;
      subjectStats[attempt.subject].totalScore += attempt.score || 0;
    });

    Object.keys(subjectStats).forEach(subject => {
      const stats = subjectStats[subject];
      stats.avgScore = Math.round(stats.totalScore / stats.count);
    });

    const topSubjects = Object.entries(subjectStats)
      .sort((a, b) => b[1].count - a[1].count)
      .slice(0, 5);

    section.innerHTML = `
      <h2>Dashboard Overview</h2>
      <p class="sub">Last updated: ${new Date().toLocaleString()}</p>

      <div class="admin-stats-grid">
        <div class="stat-card">
          <div class="stat-value">${totalUsers}</div>
          <div class="stat-label">Total Users</div>
          <div class="stat-change">Registered accounts</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${totalAttempts}</div>
          <div class="stat-label">Quiz Attempts</div>
          <div class="stat-change">${totalAttempts > 0 ? (totalAttempts / Math.max(totalUsers, 1)).toFixed(1) + " per user" : "No attempts yet"}</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${avgScoreAll}%</div>
          <div class="stat-label">Average Score</div>
          <div class="stat-change">Across all quizzes</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${Object.keys(subjectStats).length}</div>
          <div class="stat-label">Subjects Practiced</div>
          <div class="stat-change">${Object.keys(subjectStats).length} subjects</div>
        </div>
      </div>

      <h3 style="margin-top: 30px;">Top Subjects by Attempts</h3>
      <div class="admin-table">
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Attempts</th>
              <th>Average Score</th>
              <th>% of Total</th>
            </tr>
          </thead>
          <tbody>
            ${topSubjects.map(([subject, stats]) => `
              <tr>
                <td>${subject}</td>
                <td>${stats.count}</td>
                <td>${stats.avgScore}%</td>
                <td>${Math.round((stats.count / totalAttempts) * 100)}%</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <div style="margin-top: 20px;">
        <button class="btn btn-secondary" onclick="window.WAECAdminDashboard.exportOverviewData()">
          📥 Export Statistics
        </button>
      </div>
    `;
  }

  // ===== USERS SECTION =====

  function renderUsers() {
    const section = $("#admin-users");
    if (!section) return;

    const searchBox = $(".admin-search-box");
    let filteredUsers = allUsers;

    if (searchBox && searchBox.value.trim()) {
      const query = searchBox.value.toLowerCase();
      filteredUsers = allUsers.filter(u =>
        u.username?.toLowerCase().includes(query) ||
        u.display_name?.toLowerCase().includes(query) ||
        u.email?.toLowerCase().includes(query)
      );
    }

    section.innerHTML = `
      <h2>User Management</h2>

      <div style="margin-bottom: 20px;">
        <input type="text" class="admin-search-box" placeholder="🔍 Search by username, name, or email..." style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
      </div>

      <p class="sub">${filteredUsers.length} users found</p>

      <div class="admin-table">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Display Name</th>
              <th>Email</th>
              <th>Joined</th>
              <th>Attempts</th>
              <th>Avg Score</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${filteredUsers.map(user => {
              const userAttempts = allAttempts.filter(a => a.user_id === user.id);
              const avgScore = userAttempts.length > 0
                ? Math.round(userAttempts.reduce((s, a) => s + (a.score || 0), 0) / userAttempts.length)
                : "-";

              return `
                <tr>
                  <td><strong>${user.username}</strong></td>
                  <td>${user.display_name || "-"}</td>
                  <td>${user.email || "-"}</td>
                  <td>${new Date(user.joined_at).toLocaleDateString()}</td>
                  <td>${userAttempts.length}</td>
                  <td>${avgScore}${avgScore !== "-" ? "%" : ""}</td>
                  <td>
                    <button class="btn-small" onclick="window.WAECAdminDashboard.viewUserDetails('${user.id}')">View</button>
                    <button class="btn-small btn-danger" onclick="window.WAECAdminDashboard.deleteUser('${user.id}', '${user.username}')">Delete</button>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>

      <div style="margin-top: 20px;">
        <button class="btn btn-secondary" onclick="window.WAECAdminDashboard.exportUsers()">
          📥 Export User List (CSV)
        </button>
      </div>
    `;

    // Re-attach search listener
    const newSearchBox = $(".admin-search-box");
    if (newSearchBox) {
      newSearchBox.addEventListener("input", () => renderUsers());
    }
  }

  // ===== REPORTS SECTION =====

  function renderReports() {
    const section = $("#admin-reports");
    if (!section) return;

    // Performance breakdown
    const scoreBreakdown = {
      "90-100": 0,
      "80-89": 0,
      "70-79": 0,
      "60-69": 0,
      "Below 60": 0
    };

    allAttempts.forEach(attempt => {
      const score = attempt.score || 0;
      if (score >= 90) scoreBreakdown["90-100"]++;
      else if (score >= 80) scoreBreakdown["80-89"]++;
      else if (score >= 70) scoreBreakdown["70-79"]++;
      else if (score >= 60) scoreBreakdown["60-69"]++;
      else scoreBreakdown["Below 60"]++;
    });

    section.innerHTML = `
      <h2>Reports & Analytics</h2>

      <h3>Score Distribution</h3>
      <div class="admin-table">
        <table>
          <thead>
            <tr>
              <th>Score Range</th>
              <th>Count</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            ${Object.entries(scoreBreakdown).map(([range, count]) => {
              const pct = allAttempts.length > 0
                ? Math.round((count / allAttempts.length) * 100)
                : 0;
              return `
                <tr>
                  <td>${range}</td>
                  <td>${count}</td>
                  <td>${pct}%</td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>

      <h3 style="margin-top: 30px;">Most Popular Subjects</h3>
      <div class="admin-table">
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Times Attempted</th>
            </tr>
          </thead>
          <tbody>
            ${Object.entries(
              allAttempts.reduce((acc, a) => {
                acc[a.subject] = (acc[a.subject] || 0) + 1;
                return acc;
              }, {})
            )
              .sort((a, b) => b[1] - a[1])
              .map(([subject, count]) => `
                <tr>
                  <td>${subject}</td>
                  <td>${count}</td>
                </tr>
              `).join("")}
          </tbody>
        </table>
      </div>

      <div style="margin-top: 20px;">
        <button class="btn btn-secondary" onclick="window.WAECAdminDashboard.exportFullReport()">
          📥 Export Full Report (JSON)
        </button>
      </div>
    `;
  }

  // ===== ACTIONS =====

  function viewUserDetails(userId) {
    const user = allUsers.find(u => u.id === userId);
    if (!user) return;

    const userAttempts = allAttempts.filter(a => a.user_id === userId);
    const modal = document.createElement("div");
    modal.className = "admin-modal";
    modal.innerHTML = `
      <div class="admin-modal-content">
        <h3>${user.display_name || user.username}</h3>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email || "Not provided"}</p>
        <p><strong>Joined:</strong> ${new Date(user.joined_at).toLocaleDateString()}</p>
        <hr>
        <h4>Quiz History (${userAttempts.length} attempts)</h4>
        <div class="admin-table">
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Score</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              ${userAttempts.map(attempt => `
                <tr>
                  <td>${attempt.subject}</td>
                  <td>${attempt.score}%</td>
                  <td>${new Date(attempt.attempted_at).toLocaleDateString()}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
        <button onclick="this.parentElement.parentElement.remove()" class="btn btn-secondary" style="margin-top: 15px;">Close</button>
      </div>
    `;
    document.body.appendChild(modal);
  }

  function deleteUser(userId, username) {
    if (!confirm(`Delete user "${username}" and all their data? This cannot be undone!`)) {
      return;
    }

    if (!window.WAECDatabase?.isConnected()) {
      alert("Database not connected");
      return;
    }

    supabaseClient
      .from("users")
      .delete()
      .eq("id", userId)
      .then(() => {
        alert("User deleted");
        loadDashboardData();
      })
      .catch(err => alert("Error: " + err.message));
  }

  // ===== EXPORT FUNCTIONS =====

  function exportUsers() {
    const csv = [
      ["Username", "Name", "Email", "Joined Date"].join(","),
      ...allUsers.map(u => [
        u.username,
        u.display_name || "",
        u.email || "",
        new Date(u.joined_at).toISOString()
      ].map(v => `"${v}"`).join(","))
    ].join("\n");

    downloadFile(csv, "users.csv", "text/csv");
  }

  function exportOverviewData() {
    const data = JSON.stringify({
      exportDate: new Date().toISOString(),
      totalUsers: allUsers.length,
      totalAttempts: allAttempts.length,
      overallAverageScore: Math.round(
        allAttempts.reduce((s, a) => s + (a.score || 0), 0) / Math.max(allAttempts.length, 1)
      ),
      attemptsBySubject: Object.fromEntries(
        Object.entries(
          allAttempts.reduce((acc, a) => {
            acc[a.subject] = (acc[a.subject] || 0) + 1;
            return acc;
          }, {})
        )
      )
    }, null, 2);

    downloadFile(data, "overview.json", "application/json");
  }

  function exportFullReport() {
    const data = JSON.stringify({
      exportDate: new Date().toISOString(),
      users: allUsers,
      attempts: allAttempts
    }, null, 2);

    downloadFile(data, "full-report.json", "application/json");
  }

  function downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // ===== EXPORT =====
  window.WAECAdminDashboard = {
    showAdminView,
    viewUserDetails,
    deleteUser,
    exportUsers,
    exportOverviewData,
    exportFullReport
  };
})();
