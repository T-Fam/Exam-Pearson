# Database Setup — Complete Instructions

Follow these steps to connect your WAEC website to a PostgreSQL database via Supabase.

---

## What You'll Get

✅ User account storage (username, password, email, join date)
✅ Quiz history per user (all attempts, scores, timing)
✅ User progress tracking (subjects completed, average scores, topics covered)
✅ Persistent data across devices
✅ User dashboard with statistics
✅ Free tier support for up to 500 MB data

---

## Step 1: Sign Up for Supabase (5 minutes)

1. Go to **https://supabase.com**
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (easiest)
4. Authorize Supabase access
5. You'll be logged in

---

## Step 2: Create a Supabase Project (5 minutes)

1. Click **"New Project"** (or **"Create a project"**)
2. Fill in the form:
   - **Project Name:** `waec-practice` (or any name)
   - **Database Password:** Create a strong password (save this!)
   - **Region:** Pick the closest to your users
   - **Pricing Plan:** Leave on "Free"
3. Click **"Create new project"**
4. Wait 2-3 minutes for your database to initialize

---

## Step 3: Get Your Credentials (2 minutes)

Once your project is ready:

1. On the left sidebar, click **"Settings"**
2. Click **"API"**
3. Copy and save these two values:
   - **Project URL** - looks like: `https://xxxxx.supabase.co`
   - **Anon public key** - looks like: `eyJhbGciOiJIUzI1NiIsInR5cCI6I...`

Keep these safe! You'll use them next.

---

## Step 4: Create Database Tables (3 minutes)

1. In Supabase, click **"SQL Editor"** on the left
2. Click **"New Query"**
3. Copy and paste this SQL code:

```sql
-- Users table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE,
  display_name TEXT,
  password_hash TEXT NOT NULL,
  joined_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Quiz attempts (each quiz taken)
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

-- User progress summary by subject
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

-- Indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_user_id ON quiz_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_subject ON quiz_attempts(subject);
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
```

4. Click the **"Run"** button (or press Ctrl+Enter)
5. You should see "Success" message
6. Your database tables are now created! ✅

---

## Step 5: Update Your Website Code (5 minutes)

### Option A: If you're using npm/build tools

1. Install Supabase library:
   ```bash
   npm install @supabase/supabase-js
   ```

2. Create a `.env.local` file in your project root with:
   ```
   VITE_SUPABASE_URL=https://xxxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6I...
   ```
   (Replace with your actual values from Step 3)

3. In your `index.html`, add before closing `</head>`:
   ```html
   <script>
     window.WAEC_CONFIG = {
       SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
       SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY
     };
   </script>
   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.43.4/dist/module.js"></script>
   ```

### Option B: If you're using plain HTML/JavaScript

1. In your `index.html`, add to `<head>`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.43.4/dist/module.js"></script>
   <script>
     window.WAEC_CONFIG = {
       SUPABASE_URL: "https://xxxxx.supabase.co",
       SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6I..."
     };
   </script>
   ```
   (Replace with your actual values)

2. Make sure these scripts are loaded in `index.html`:
   ```html
   <script src="js/db-client.js"></script>
   <script src="js/auth-supabase.js"></script>
   <script src="js/app.js"></script>
   ```

---

## Step 6: Test the Connection (5 minutes)

1. Open your website in a browser
2. Open **Developer Tools** (Press F12 or right-click → Inspect)
3. Go to **Console** tab
4. Paste this and press Enter:
   ```javascript
   console.log("Database connected:", window.WAECDatabase?.isConnected());
   ```
5. You should see: `Database connected: true` ✅

---

## Step 7: Test Signup/Login

1. In your website, click **"Log in"**
2. Click **"Sign up"** tab
3. Create a test account with:
   - **Name:** Test User
   - **Username:** testuser123
   - **Password:** test1234
4. Click **"Create account"**

If successful, you'll be logged in!

---

## Step 8: Verify Data Was Saved

Back in Supabase dashboard:

1. Click **"Table Editor"** on the left
2. Click the **"users"** table
3. You should see your test user! ✅

---

## Now What?

### To Deploy (see DEPLOYMENT_GUIDE.md for full steps):

**Quick Vercel Deploy:**
1. Push code to GitHub: `git push`
2. Go to **https://vercel.com**
3. Click **"New Project"** and select your repo
4. Add these environment variables:
   - `VITE_SUPABASE_URL` = your Supabase URL
   - `VITE_SUPABASE_ANON_KEY` = your Anon Key
5. Click **Deploy**
6. Your site is live! 🎉

### To Monitor Your Database:

Visit Supabase dashboard regularly to check:
- **Settings** → **Usage:** See storage and bandwidth usage
- **SQL Editor:** Run custom queries
- **Logs:** Check for errors
- **Backups:** Download backups of your data

---

## Troubleshooting

### "Database not connected" message?
- Check that Supabase URL and key are correct
- Make sure you're connected to the internet
- Try refreshing the page

### "Username already taken" but it's new?
- Could be leftover from localStorage
- Clear browser data and try again
- Or use a different username

### Can't see users in Supabase table?
- Might not have scrolled down (new rows at bottom)
- Try filtering by clicking column headers
- Check you're in the right table

### Slow performance?
- You're on the free tier - might be slow initially
- Don't worry, it gets faster as you use it
- Upgrade to Pro tier when you hit limits

---

## Free Tier Limits

Supabase free tier includes:
- **Storage:** 500 MB (enough for ~10,000 quiz attempts)
- **Bandwidth:** 1 GB/month (fine for small to medium sites)
- **Connections:** 20 simultaneous (plenty for practice site)

When you outgrow free tier:
- **Pro Plan:** $25/month for 8 GB storage + more bandwidth
- **Custom:** For enterprise use

---

## Next Steps

1. ✅ Supabase account created
2. ✅ Database tables created
3. ✅ Website connected to database
4. ✅ Test signup/login works
5. → Deploy to Vercel (see DEPLOYMENT_GUIDE.md)
6. → Share website link with students
7. → Monitor usage in Supabase dashboard

---

**Questions?** Check these resources:
- Supabase Docs: https://supabase.com/docs
- Supabase Community: https://discord.gg/supabase
- GitHub Issues on your project repo

Good luck! 🚀
