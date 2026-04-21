# Database Schema Reference

This document describes what data is stored and where.

---

## Table: `users`

Stores account information for each student.

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Unique user ID (auto-generated) |
| `username` | TEXT | Login username (unique) |
| `email` | TEXT | Email address (optional) |
| `display_name` | TEXT | User's full name |
| `password_hash` | TEXT | Hashed password (never stored plain) |
| `joined_at` | TIMESTAMP | Account creation date |
| `updated_at` | TIMESTAMP | Last profile update |

**Example:**
```
id: 550e8400-e29b-41d4-a716-446655440000
username: student_001
display_name: John Doe
joined_at: 2026-04-21 10:30:00
```

---

## Table: `quiz_attempts`

Stores every quiz attempt (each completed practice quiz).

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Unique attempt ID |
| `user_id` | UUID | Which user took this quiz |
| `subject` | TEXT | Subject (e.g., "English", "Mathematics") |
| `topic` | TEXT | Specific topic (optional, e.g., "Grammar") |
| `grade` | TEXT | Grade level (e.g., "10", "11", "12") |
| `question_type` | TEXT | "objective" or "theory" |
| `total_questions` | INT | How many questions in this quiz |
| `correct_answers` | INT | How many student got right |
| `score` | DECIMAL | Score as percentage (0-100) |
| `time_taken_seconds` | INT | How long quiz took in seconds |
| `attempted_at` | TIMESTAMP | When the quiz was taken |

**Example:**
```
user_id: 550e8400-e29b-41d4-a716-446655440000
subject: English Language
topic: Grammar
grade: 10
question_type: objective
total_questions: 25
correct_answers: 20
score: 80.0
time_taken_seconds: 900
attempted_at: 2026-04-21 14:15:30
```

**SQL Query Examples:**

Get all quizzes for a user:
```sql
SELECT * FROM quiz_attempts 
WHERE user_id = 'xxx' 
ORDER BY attempted_at DESC;
```

Get average score by subject:
```sql
SELECT subject, AVG(score) as avg_score 
FROM quiz_attempts 
WHERE user_id = 'xxx' 
GROUP BY subject;
```

Get last 10 attempts:
```sql
SELECT * FROM quiz_attempts 
WHERE user_id = 'xxx' 
ORDER BY attempted_at DESC 
LIMIT 10;
```

---

## Table: `user_progress`

Stores summary statistics per user per subject.

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Unique record ID |
| `user_id` | UUID | Which user |
| `subject` | TEXT | Subject name |
| `total_attempts` | INT | Total quizzes taken in this subject |
| `average_score` | DECIMAL | Average score across all attempts |
| `topics_covered` | TEXT[] | Array of topics studied (e.g., ['Grammar', 'Vocabulary']) |
| `highest_score` | DECIMAL | Best score in this subject |
| `last_attempt_at` | TIMESTAMP | When they last took this subject |
| `created_at` | TIMESTAMP | When this record was created |
| `updated_at` | TIMESTAMP | When last updated |

**Example:**
```
user_id: 550e8400-e29b-41d4-a716-446655440000
subject: Mathematics
total_attempts: 15
average_score: 82.5
topics_covered: ['Algebra', 'Geometry', 'Trigonometry']
highest_score: 95.0
last_attempt_at: 2026-04-21 15:30:00
```

**SQL Query Examples:**

Get user's progress across all subjects:
```sql
SELECT subject, average_score, total_attempts 
FROM user_progress 
WHERE user_id = 'xxx' 
ORDER BY average_score DESC;
```

Get top 5 students by average score in a subject:
```sql
SELECT u.display_name, up.average_score 
FROM user_progress up
JOIN users u ON up.user_id = u.id
WHERE up.subject = 'Mathematics'
ORDER BY up.average_score DESC
LIMIT 5;
```

---

## Dashboard Data Flow

Here's how the data flows:

1. **Student takes quiz** 
   → Quiz data collected in JavaScript state

2. **Student submits quiz**
   → One record added to `quiz_attempts` table
   → `user_progress` table updated with new stats

3. **Student views dashboard**
   → Fetch from `user_progress` (fast summary)
   → Or fetch from `quiz_attempts` (detailed history)

4. **Data shown to student**
   ```
   📊 Dashboard
   ├─ Subjects Studied: 5
   ├─ Total Quizzes: 42
   ├─ Average Score: 76%
   │
   ├─ By Subject:
   │  ├─ English: 15 attempts, 82% average
   │  ├─ Mathematics: 12 attempts, 71% average
   │  └─ Science: 15 attempts, 75% average
   │
   └─ Recent Attempts:
      ├─ English Grammar - 85% (5 min ago)
      ├─ Math Algebra - 68% (30 min ago)
      └─ Science Biology - 90% (2 hours ago)
   ```

---

## Data Privacy & Security

### What's Stored?
- ✅ Username (required for login)
- ✅ Email (optional)
- ✅ Password (hashed, never plain text)
- ✅ Quiz scores and performance data
- ✅ Account creation date

### What's NOT Stored?
- ❌ Plain text passwords
- ❌ Credit cards or payment info
- ❌ Home addresses or phone numbers
- ❌ Detailed personal information

### Access Control
- Students can only see their own data
- Teachers/admins need separate login
- Passwords are hashed using Supabase Auth

---

## Monitoring Usage

### Check Database Size
In Supabase dashboard → Settings → Usage:
- Storage: Used / 500 MB (free tier)
- Monitor this as you grow

### Example Sizes
- 1 user = ~2 KB
- 100 quiz attempts = ~50 KB
- 1000 users with 50 quizzes each = ~100 MB

### When to Upgrade
- Free tier: 500 MB ($0)
- Pro tier: 8 GB ($25/month)
- Upgrade when you hit 400 MB

---

## Backup & Recovery

### Automatic Backups
Supabase automatically backs up your data daily.

### Manual Backup
Download SQL dump:
```bash
pg_dump postgresql://[user]:[password]@[host]:[port]/[db] > backup.sql
```

### Restore from Backup
```bash
psql postgresql://[user]:[password]@[host]:[port]/[db] < backup.sql
```

---

## Common Queries

### Get user's dashboard stats:
```sql
SELECT 
  COUNT(*) as total_attempts,
  AVG(score) as average_score,
  MAX(score) as best_score
FROM quiz_attempts 
WHERE user_id = 'xxx';
```

### Find students who haven't practiced in 7 days:
```sql
SELECT u.username, u.display_name, 
  MAX(qa.attempted_at) as last_quiz
FROM users u
LEFT JOIN quiz_attempts qa ON u.id = qa.user_id
GROUP BY u.id
HAVING MAX(qa.attempted_at) < NOW() - INTERVAL '7 days'
  OR MAX(qa.attempted_at) IS NULL;
```

### Get quiz distribution by subject:
```sql
SELECT subject, COUNT(*) as attempts
FROM quiz_attempts 
GROUP BY subject 
ORDER BY attempts DESC;
```

### Find most difficult subjects (lowest average scores):
```sql
SELECT subject, AVG(score) as avg_score
FROM quiz_attempts 
GROUP BY subject 
ORDER BY avg_score ASC;
```

---

## Notes

- All IDs are UUIDs (randomly generated, guaranteed unique)
- All timestamps are in UTC
- Passwords are hashed using bcrypt (industry standard)
- Data is automatically encrypted in transit (HTTPS)
- Database is hosted in the EU or US depending on your region selection
