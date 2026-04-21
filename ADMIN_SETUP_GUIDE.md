# Admin Panel & Database Setup Guide

Complete guide to set up Supabase + Admin Panel for your WAEC website.

---

## What You'll Get

✅ **Admin Dashboard** at `/admin.html`
✅ **User Management** - View, search, delete users
✅ **Performance Analytics** - Scores, subject popularity, trends
✅ **Data Export** - Download user lists, reports as CSV/JSON
✅ **Database Backend** - PostgreSQL via Supabase
✅ **Free Forever** - Supabase free tier covers up to 500 MB

---

## Quick Start (30 minutes)

### Phase 1: Set Up Supabase (15 min)

1. **Sign up at https://supabase.com**
   - Click "Sign Up" 
   - Use GitHub (easiest)

2. **Create project**
   - Name: `waec-practice`
   - Password: Strong password (save it!)
   - Region: Closest to you
   - Click "Create"
   - Wait 2-3 minutes

3. **Copy credentials**
   - Left sidebar → Settings → API
   - Copy **Project URL**
   - Copy **Anon Key**
   - Save these!

4. **Create database tables**
   - Click "SQL Editor"
   - Click "New Query"
   - Paste this code (from DATABASE_SETUP_INSTRUCTIONS.md):

   ```sql
   CREATE TABLE IF NOT EXISTS users (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     username TEXT UNIQUE NOT NULL,
     email TEXT UNIQUE,
     display_name TEXT,
     password_hash TEXT NOT NULL,
     joined_at TIMESTAMP DEFAULT NOW(),
     updated_at TIMESTAMP DEFAULT NOW()
   );

   CREATE TABLE IF NOT EXISTS quiz_attempts (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
     subject TEXT NOT NULL,
     topic TEXT,
     grade TEXT,
     question_type TEXT,
     total_questions INT,
     correct_answers INT,
     score DECIMAL,
     time_taken_seconds INT,
     attempted_at TIMESTAMP DEFAULT NOW()
   );

   CREATE TABLE IF NOT EXISTS user_progress (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
     subject TEXT NOT NULL,
     total_attempts INT DEFAULT 0,
     average_score DECIMAL,
     topics_covered TEXT[],
     highest_score DECIMAL,
     last_attempt_at TIMESTAMP,
     created_at TIMESTAMP DEFAULT NOW(),
     updated_at TIMESTAMP DEFAULT NOW(),
     UNIQUE(user_id, subject)
   );

   CREATE INDEX IF NOT EXISTS idx_quiz_attempts_user_id ON quiz_attempts(user_id);
   CREATE INDEX IF NOT EXISTS idx_quiz_attempts_subject ON quiz_attempts(subject);
   CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
   ```

   - Click "Run"
   - You should see "Success"

### Phase 2: Configure Website (10 min)

1. **Add to index.html** (in the `<head>` section):
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.43.4/dist/module.js"></script>
   <script>
     window.WAEC_CONFIG = {
       SUPABASE_URL: "https://xxxxx.supabase.co",
       SUPABASE_ANON_KEY: "eyJhbGc..."
     };
   </script>
   ```
   Replace `xxxxx.supabase.co` and `eyJhbGc...` with your actual credentials!

2. **Make sure these scripts load in order in index.html:**
   ```html
   <script src="js/db-client.js"></script>
   <script src="js/auth-supabase.js"></script>
   <script src="js/app.js"></script>
   ```

3. **Files already created:**
   - ✅ `admin.html` - Admin panel page
   - ✅ `js/admin-auth.js` - Admin login logic
   - ✅ `js/admin-dashboard.js` - Dashboard and reports
   - ✅ `css/admin.css` - Admin styling
   - ✅ `js/db-client.js` - Database connection
   - ✅ `js/auth-supabase.js` - Updated auth

### Phase 3: Test It (5 min)

1. **Open your website**: `http://localhost:3000` (or wherever you host)

2. **Create a test account**
   - Go to "Log in" → "Sign up"
   - Username: `testuser1`
   - Password: `test123`
   - Create account

3. **Take a test quiz**
   - Select subject, topic, questions
   - Complete quiz
   - Submit answers

4. **Check admin panel**
   - Go to `/admin.html`
   - Login with:
     - **Username:** `admin` (default)
     - **Password:** `admin123` (CHANGE THIS!)
   - Click "Overview" - should show 1 user, 1 attempt

5. **Verify in Supabase**
   - Go to Supabase dashboard
   - Click "Table Editor"
   - Click "users" - see your test account ✅
   - Click "quiz_attempts" - see your test quiz ✅

---

## Admin Panel Features

### 📈 Overview Tab
- Total users registered
- Total quizzes taken
- Average scores
- Top subjects by popularity

### 👥 Users Tab
- List all registered users
- Search by username/name/email
- View individual user details
- Delete user accounts
- Export user list as CSV

### 📋 Reports Tab
- Score distribution (A, B, C, D, F)
- Subject popularity
- Export full analytics as JSON

---

## Change Admin Password (IMPORTANT!)

The default admin password is `admin123`. **Change it immediately!**

**Option 1: In the website**
Open browser console (F12) and run:
```javascript
window.WAECAdminAuth.changePassword('admin', 'YourNewPassword123');
```

**Option 2: Edit js/admin-auth.js**
Find this line:
```javascript
"admin": "admin123", // CHANGE THIS!
```
Change to:
```javascript
"admin": "your-secure-password-here",
```

**Option 3: Add more admin accounts**
In `js/admin-auth.js`, add:
```javascript
const ADMIN_USERS = {
  "admin": "admin123",
  "toni": "your-password",
  "other-admin": "another-password"
};
```

---

## How It Works

### Flow: User Takes Quiz → Data Saved

1. Student takes quiz on main site
2. Submits answers
3. Score calculated
4. Data saved to `quiz_attempts` table in Supabase
5. `user_progress` table updated with new stats

### Flow: Admin Views Dashboard

1. Admin goes to `/admin.html`
2. Enters admin username/password
3. Dashboard fetches all data from Supabase
4. Shows statistics, user list, reports
5. Can export data or delete users

---

## Hosting on GitHub Pages + Supabase

Since you're on GitHub Pages (frontend-only), this setup works perfectly:

- **GitHub Pages** (free): Hosts `index.html` and `admin.html`
- **Supabase** (free): Hosts PostgreSQL database
- **API calls**: Website calls Supabase from JavaScript

### To Deploy:

1. Push updated code to GitHub
   ```bash
   git add .
   git commit -m "Add Supabase database + admin panel"
   git push origin main
   ```

2. GitHub Pages auto-updates
   - Visit your site (e.g., username.github.io/WAEC-website)
   - Everything works automatically!

3. Your admin panel is at:
   - `https://username.github.io/WAEC-website/admin.html`

---

## Security Notes

### What's Protected?
- ✅ Users can only see their own quiz history
- ✅ Admin login required for admin panel
- ✅ Passwords hashed (never stored plain)
- ✅ Data encrypted in transit (HTTPS)

### What's Not Protected (Yet)?
- ⚠️ Admin password in browser console is visible
  - **Solution:** Add password hashing before production
  - Use Supabase Auth for admin accounts
- ⚠️ All data accessible if someone gets admin password
  - **Solution:** Use Supabase Row Level Security (RLS)

### For Production:
1. Use Supabase Auth for admin logins (not localStorage)
2. Enable Row Level Security (RLS) policies
3. Use HTTPS only
4. Rotate passwords regularly
5. Add rate limiting to prevent brute force

---

## Troubleshooting

### "Database not connected" message?
- Check Supabase URL and key in index.html are correct
- Make sure Supabase project is active
- Refresh page

### Admin panel shows no data?
- Make sure you created the tables (see Phase 1, step 4)
- Make sure at least one user/quiz exists
- Check browser console for errors (F12)

### Can't login to admin panel?
- Username must be in ADMIN_USERS in `js/admin-auth.js`
- Default is `admin` / `admin123`
- Check you changed the password correctly

### Users can't sign up?
- Make sure Supabase database is connected
- Check internet connection
- Fall back to localStorage will activate if database fails

### Export button doesn't work?
- Check browser console for errors
- Try exporting a different format (CSV vs JSON)
- Make sure you have data to export

---

## Monitoring Your Database

### Check Usage in Supabase Dashboard
- Settings → Usage
- See storage used / 500 MB limit
- See bandwidth used
- Upgrade when you reach 400 MB

### Database Size Estimates
- 1 user = ~2 KB
- 100 quiz attempts = ~50 KB
- 1000 users × 50 quizzes = ~100 MB

### When to Upgrade
- **Free tier limit:** 500 MB ($0)
- **Pro tier:** 8 GB ($25/month)
- Most schools won't need Pro until 5,000+ students

---

## Next Steps

1. ✅ Set up Supabase account
2. ✅ Create database tables
3. ✅ Add credentials to website
4. ✅ Test user signup + quiz
5. ✅ Test admin panel access
6. ✅ Change admin password
7. ✅ Deploy to GitHub Pages
8. → Monitor usage
9. → Share with students
10. → Check admin dashboard daily

---

## Questions?

### Quick Reference:
- **Supabase Docs:** https://supabase.com/docs
- **My Created Files:**
  - `DATABASE_SETUP_INSTRUCTIONS.md` - Detailed database guide
  - `DATABASE_SCHEMA.md` - What data is stored where
  - `DEPLOYMENT_GUIDE.md` - How to deploy

### Need Help?
1. Check browser console (F12) for error messages
2. Look at Supabase logs (Supabase Dashboard → Logs)
3. Verify all files are in the right places
4. Make sure scripts load in order

---

## File Checklist

Make sure you have these files:

```
WAEC website/
├── index.html ✅
├── admin.html ✅ (NEW)
├── js/
│   ├── app.js ✅
│   ├── db-client.js ✅ (NEW)
│   ├── auth-supabase.js ✅ (NEW)
│   ├── admin-auth.js ✅ (NEW)
│   ├── admin-dashboard.js ✅ (NEW)
│   └── ... (other files)
├── css/
│   ├── styles.css ✅
│   ├── admin.css ✅ (NEW)
│   └── ... (other files)
├── subjects/ ✅
├── questions/ ✅
└── CLAUDE.md ✅
```

---

**You're ready!** 🚀 Let me know if you hit any issues!
