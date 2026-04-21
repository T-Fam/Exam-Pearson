# Exam Pearson — WAEC Practice Platform

Free online revision quizzes for WAEC students. Practice with 64+ subjects across Grades 10–12.

## Features

✨ **64 Subjects** — All WAEC subjects covered  
📝 **Daily Questions** — 50 new unique questions generated daily per subject  
⏱️ **Timed Quizzes** — Test yourself with realistic exam conditions  
📊 **Progress Tracking** — Dashboard to monitor your performance  
🎓 **Grade Levels** — Practice for Grades 10, 11, or 12  
🆓 **Completely Free** — No sign-up required to practice

## Getting Started

1. Open `index.html` in your browser
2. Select a grade level and subject
3. Choose objective (multiple choice) or theory questions
4. Take timed practice quizzes
5. View your results and detailed feedback

## Question Categories

- **Objective Questions** — Multiple choice with instant scoring
- **Theory Questions** — Open-ended questions with model answers
- **Practical Questions** — Hands-on exercises for technical subjects

## Subjects Include

Agriculture, Arabic, Biology, Business, Chemistry, Computing, Economics, English, French, Geography, Health, History, Languages (10+), Literature, Mathematics, Physics, Technical Drawing, and many more.

## Architecture

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Data:** JSON-based question storage with daily manifests
- **Hosting:** Static site, ready for GitHub Pages or any static host
- **Auth:** Optional Firebase integration for user dashboards

## Project Structure

```
├── index.html              # Main application
├── css/                    # Styling
├── js/                     # Application logic
│   ├── app.js             # Main quiz engine
│   ├── questions-loader.js # Dynamic question loading
│   ├── auth.js            # Authentication
│   └── dashboard.js       # User progress dashboard
├── questions/             # Generated questions (by date)
└── subjects/              # Subject list configuration
```

## Daily Question Generation

- **Schedule:** Runs at 4 PM daily (configurable)
- **Output:** 50 unique questions per subject
- **Deduplication:** Never repeats questions across days
- **Format:** JSON with options, answers, and grade levels

Generated questions are stored in `/questions/YYYY-MM-DD/` folders for easy access and archival.

## Deployment

### GitHub Pages (Recommended)

1. Create repository on GitHub
2. Push this code to the repository
3. Go to **Settings → Pages**
4. Set source to `main` branch
5. Your site is live at `https://Famys784.github.io/Exam-Pearson/`

### Other Hosts

Works with any static hosting:
- Netlify
- Vercel
- Firebase Hosting
- Your own web server

## Development

### Test the Question Loader

```bash
# Visit /test-loader.html in your browser
# Shows diagnostic info about loaded questions
```

### Regenerate Question Manifest

```bash
# From project root:
node js/generate-manifest.js
```

## Configuration

Edit these files to customize:

- `INSTRUCTIONS.md` — Project goals and rules
- `subjects/*.txt` — Subject list for generation
- `js/questions.js` — Hardcoded fallback questions
- `CLAUDE.md` — Auto-memory for project context

## Support & Feedback

For issues or suggestions:
1. Check existing GitHub issues
2. Open a new issue with details
3. Include browser console errors if applicable

---

**Built with ❤️ for WAEC students**  
Questions generated daily using Claude AI  
Hosted on GitHub Pages
