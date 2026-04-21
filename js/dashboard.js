// WAEC Practice — Dashboard (stats + Chart.js graphs)
// Exposes window.WAECDashboard.render()

(function () {
  "use strict";

  const charts = {};

  function fmtTime(sec) {
    sec = Math.max(0, Math.round(sec));
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    if (h > 0) return `${h}h ${m}m`;
    if (m > 0) return `${m}m`;
    return `${sec}s`;
  }

  function fmtDate(iso) {
    try {
      const d = new Date(iso);
      return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
    } catch (e) { return iso; }
  }

  function calcStreak(history) {
    if (!history.length) return 0;
    const days = new Set(history.map(h => new Date(h.takenAt).toISOString().slice(0, 10)));
    let streak = 0;
    let cursor = new Date();
    cursor.setHours(0, 0, 0, 0);
    while (true) {
      const key = cursor.toISOString().slice(0, 10);
      if (days.has(key)) {
        streak++;
        cursor.setDate(cursor.getDate() - 1);
      } else {
        // If today not in set but yesterday is, allow streak from yesterday
        if (streak === 0) {
          cursor.setDate(cursor.getDate() - 1);
          const k2 = cursor.toISOString().slice(0, 10);
          if (days.has(k2)) { streak++; cursor.setDate(cursor.getDate() - 1); continue; }
        }
        break;
      }
    }
    return streak;
  }

  function destroyChart(key) {
    if (charts[key]) { charts[key].destroy(); charts[key] = null; }
  }

  function themeColors() {
    const styles = getComputedStyle(document.documentElement);
    const ink = styles.getPropertyValue("--ink").trim() || "#0e1a14";
    const muted = styles.getPropertyValue("--muted").trim() || "#5b6b64";
    const border = styles.getPropertyValue("--border").trim() || "#d8e5de";
    return { ink, muted, border };
  }

  function render() {
    const session = window.WAECAuth.currentUser();
    if (!session) return;

    const history = window.WAECAuth.getHistory(session.username);

    document.getElementById("dashGreeting").textContent = `Hi ${session.name || session.username} 👋`;
    document.getElementById("dashSubtitle").textContent =
      history.length
        ? `You've taken ${history.length} quiz${history.length === 1 ? "" : "zes"}. Keep going!`
        : "Your dashboard will fill up as you take quizzes.";

    const empty = document.getElementById("dashEmptyState");
    const content = document.getElementById("dashContent");

    if (!history.length) {
      empty.classList.remove("hidden");
      content.classList.add("hidden");
      return;
    }
    empty.classList.add("hidden");
    content.classList.remove("hidden");

    renderKPIs(history);
    renderTrend(history);
    renderSubject(history);
    renderOutcomes(history);
    renderGrade(history);
    renderWeekly(history);
    renderTopicTable(history);
    renderHistoryTable(history);
    populateSubjectFilter(history);
  }

  // ---------- KPIs ----------
  function renderKPIs(history) {
    const objectiveQuizzes = history.filter(h => h.type === "objective");
    const totalQuizzes = history.length;
    const totalQuestions = history.reduce((s, h) => s + (h.total || 0), 0);
    const totalCorrect = objectiveQuizzes.reduce((s, h) => s + (h.correct || 0), 0);
    const totalAnswered = objectiveQuizzes.reduce((s, h) => s + ((h.correct || 0) + (h.wrong || 0)), 0);

    const avgPct = objectiveQuizzes.length
      ? Math.round(objectiveQuizzes.reduce((s, h) => s + (h.percent || 0), 0) / objectiveQuizzes.length)
      : null;
    const bestPct = objectiveQuizzes.length
      ? Math.max(...objectiveQuizzes.map(h => h.percent || 0))
      : null;

    const accuracy = totalAnswered ? Math.round((totalCorrect / totalAnswered) * 100) : null;
    const timeSec = history.reduce((s, h) => s + (h.elapsedSec || 0), 0);
    const subjectsSet = new Set(history.map(h => h.subject));

    document.getElementById("kpiTotalQuizzes").textContent = totalQuizzes;
    document.getElementById("kpiTotalQuestions").textContent = totalQuestions;
    document.getElementById("kpiAvgScore").textContent = avgPct == null ? "—" : `${avgPct}%`;
    document.getElementById("kpiBestScore").textContent = bestPct == null ? "—" : `${bestPct}%`;
    document.getElementById("kpiAccuracy").textContent = accuracy == null ? "—" : `${accuracy}%`;
    document.getElementById("kpiStreak").textContent = `${calcStreak(history)} day${calcStreak(history) === 1 ? "" : "s"}`;
    document.getElementById("kpiTimeSpent").textContent = fmtTime(timeSec);
    document.getElementById("kpiSubjects").textContent = subjectsSet.size;
  }

  // ---------- Charts ----------
  function renderTrend(history) {
    destroyChart("trend");
    const obj = history.filter(h => h.type === "objective")
      .sort((a, b) => new Date(a.takenAt) - new Date(b.takenAt));
    const ctx = document.getElementById("chartTrend").getContext("2d");
    const colors = themeColors();

    if (!obj.length) {
      ctx.canvas.parentElement.innerHTML = '<div class="empty">Take an objective quiz to see your score trend.</div>';
      return;
    }

    charts.trend = new Chart(ctx, {
      type: "line",
      data: {
        labels: obj.map((h, i) => `#${i + 1}`),
        datasets: [{
          label: "Score %",
          data: obj.map(h => h.percent),
          borderColor: "#2a9d6a",
          backgroundColor: "rgba(42,157,106,.18)",
          fill: true,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: "#2a9d6a"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { min: 0, max: 100, ticks: { color: colors.muted, callback: v => v + "%" }, grid: { color: colors.border } },
          x: { ticks: { color: colors.muted }, grid: { color: colors.border } }
        },
        plugins: {
          legend: { labels: { color: colors.ink } },
          tooltip: {
            callbacks: {
              afterLabel: (ctx) => {
                const h = obj[ctx.dataIndex];
                return `${h.subject} — ${h.topic}\n${fmtDate(h.takenAt)}`;
              }
            }
          }
        }
      }
    });
  }

  function renderSubject(history) {
    destroyChart("subject");
    const obj = history.filter(h => h.type === "objective");
    const ctx = document.getElementById("chartSubject").getContext("2d");
    const colors = themeColors();

    const bySubject = {};
    obj.forEach(h => {
      if (!bySubject[h.subject]) bySubject[h.subject] = { sum: 0, n: 0 };
      bySubject[h.subject].sum += h.percent;
      bySubject[h.subject].n += 1;
    });
    const subjects = Object.keys(bySubject);
    if (!subjects.length) {
      ctx.canvas.parentElement.innerHTML = '<div class="empty">No objective quizzes yet.</div>';
      return;
    }
    const data = subjects.map(s => Math.round(bySubject[s].sum / bySubject[s].n));

    charts.subject = new Chart(ctx, {
      type: "bar",
      data: {
        labels: subjects,
        datasets: [{
          label: "Avg score %",
          data,
          backgroundColor: "rgba(42,157,106,.7)",
          borderColor: "#14664a",
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: subjects.length > 4 ? "y" : "x",
        scales: {
          x: { ticks: { color: colors.muted }, grid: { color: colors.border } },
          y: { ticks: { color: colors.muted }, grid: { color: colors.border }, min: 0, max: 100 }
        },
        plugins: { legend: { labels: { color: colors.ink } } }
      }
    });
  }

  function renderOutcomes(history) {
    destroyChart("outcomes");
    const obj = history.filter(h => h.type === "objective");
    const ctx = document.getElementById("chartOutcomes").getContext("2d");
    const colors = themeColors();

    if (!obj.length) {
      ctx.canvas.parentElement.innerHTML = '<div class="empty">Take an objective quiz to see outcome breakdown.</div>';
      return;
    }
    const totals = obj.reduce((acc, h) => {
      acc.correct += h.correct || 0;
      acc.wrong += h.wrong || 0;
      acc.skipped += h.skipped || 0;
      return acc;
    }, { correct: 0, wrong: 0, skipped: 0 });

    charts.outcomes = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Correct", "Wrong", "Skipped"],
        datasets: [{
          data: [totals.correct, totals.wrong, totals.skipped],
          backgroundColor: ["#2a9d6a", "#c0392b", "#f5b301"],
          borderWidth: 2,
          borderColor: colors.border
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: "bottom", labels: { color: colors.ink } } }
      }
    });
  }

  function renderGrade(history) {
    destroyChart("grade");
    const ctx = document.getElementById("chartGrade").getContext("2d");
    const colors = themeColors();
    const counts = { "10": 0, "11": 0, "12": 0 };
    history.forEach(h => { if (counts[h.grade] != null) counts[h.grade]++; });

    charts.grade = new Chart(ctx, {
      type: "polarArea",
      data: {
        labels: ["Grade 10 (SS1)", "Grade 11 (SS2)", "Grade 12 (SS3)"],
        datasets: [{
          data: [counts["10"], counts["11"], counts["12"]],
          backgroundColor: ["rgba(42,157,106,.55)", "rgba(245,179,1,.55)", "rgba(20,102,74,.55)"],
          borderColor: colors.border
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { r: { ticks: { color: colors.muted, backdropColor: "transparent" }, grid: { color: colors.border } } },
        plugins: { legend: { position: "bottom", labels: { color: colors.ink } } }
      }
    });
  }

  function renderWeekly(history) {
    destroyChart("weekly");
    const ctx = document.getElementById("chartWeekly").getContext("2d");
    const colors = themeColors();

    // Last 8 weeks, week-ending labels
    const buckets = [];
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    // Move to Sunday
    const start = new Date(now);
    start.setDate(start.getDate() - start.getDay());

    for (let i = 7; i >= 0; i--) {
      const wkStart = new Date(start);
      wkStart.setDate(wkStart.getDate() - i * 7);
      const wkEnd = new Date(wkStart);
      wkEnd.setDate(wkEnd.getDate() + 7);
      buckets.push({
        label: wkStart.toLocaleDateString(undefined, { month: "short", day: "numeric" }),
        start: wkStart, end: wkEnd, count: 0
      });
    }
    history.forEach(h => {
      const t = new Date(h.takenAt);
      buckets.forEach(b => { if (t >= b.start && t < b.end) b.count++; });
    });

    charts.weekly = new Chart(ctx, {
      type: "bar",
      data: {
        labels: buckets.map(b => b.label),
        datasets: [{
          label: "Quizzes",
          data: buckets.map(b => b.count),
          backgroundColor: "rgba(245,179,1,.7)",
          borderColor: "#b88a00",
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { ticks: { color: colors.muted }, grid: { color: colors.border } },
          y: { ticks: { color: colors.muted, precision: 0 }, grid: { color: colors.border }, beginAtZero: true }
        },
        plugins: { legend: { labels: { color: colors.ink } } }
      }
    });
  }

  // ---------- Tables ----------
  function renderTopicTable(history) {
    const obj = history.filter(h => h.type === "objective");
    const byTopic = {};
    obj.forEach(h => {
      const key = `${h.subject} — ${h.topic}`;
      if (!byTopic[key]) byTopic[key] = { sum: 0, n: 0, best: 0 };
      byTopic[key].sum += h.percent;
      byTopic[key].n += 1;
      byTopic[key].best = Math.max(byTopic[key].best, h.percent);
    });
    const rows = Object.entries(byTopic)
      .map(([k, v]) => ({ topic: k, avg: Math.round(v.sum / v.n), attempts: v.n, best: v.best }))
      .sort((a, b) => b.avg - a.avg)
      .slice(0, 8);

    const el = document.getElementById("topicTable");
    if (!rows.length) {
      el.innerHTML = '<div class="empty">No objective quizzes yet.</div>';
      return;
    }
    el.innerHTML = `
      <table>
        <thead><tr><th>Topic</th><th>Attempts</th><th>Avg</th><th>Best</th></tr></thead>
        <tbody>
          ${rows.map(r => `
            <tr>
              <td>${escapeHTML(r.topic)}</td>
              <td>${r.attempts}</td>
              <td><span class="pct-pill ${r.avg >= 75 ? 'good' : r.avg >= 50 ? 'mid' : 'low'}">${r.avg}%</span></td>
              <td>${r.best}%</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;
  }

  function populateSubjectFilter(history) {
    const sel = document.getElementById("historySubjectFilter");
    const subjects = Array.from(new Set(history.map(h => h.subject))).sort();
    const cur = sel.value;
    sel.innerHTML = '<option value="">All subjects</option>' +
      subjects.map(s => `<option ${s === cur ? "selected" : ""}>${escapeHTML(s)}</option>`).join("");
  }

  function renderHistoryTable(history) {
    const sel = document.getElementById("historySubjectFilter");
    const filter = sel ? sel.value : "";
    const list = history
      .slice()
      .sort((a, b) => new Date(b.takenAt) - new Date(a.takenAt))
      .filter(h => !filter || h.subject === filter);

    const el = document.getElementById("historyTable");
    if (!list.length) {
      el.innerHTML = '<div class="empty">No quizzes match this filter.</div>';
      return;
    }
    el.innerHTML = `
      <table>
        <thead><tr><th>Date</th><th>Subject / Topic</th><th>Type</th><th>Grade</th><th>Score</th><th>Time</th></tr></thead>
        <tbody>
          ${list.map(h => {
            const score = h.type === "objective"
              ? `<span class="pct-pill ${h.percent >= 75 ? 'good' : h.percent >= 50 ? 'mid' : 'low'}">${h.correct}/${h.total} · ${h.percent}%</span>`
              : `<span class="pct-pill mid">${h.total - h.skipped}/${h.total} attempted</span>`;
            return `
              <tr>
                <td>${escapeHTML(fmtDate(h.takenAt))}</td>
                <td><strong>${escapeHTML(h.subject)}</strong><br><span class="muted">${escapeHTML(h.topic)}</span></td>
                <td>${h.type === "objective" ? "MCQ" : "Theory"}</td>
                <td>SS${(Number(h.grade) || 10) - 9}</td>
                <td>${score}</td>
                <td>${fmtTime(h.elapsedSec)}</td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    `;
  }

  function escapeHTML(s) {
    return String(s)
      .replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  }

  window.WAECDashboard = { render };
})();
