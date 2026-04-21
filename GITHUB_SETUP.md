# GitHub Pages Setup Instructions

## Step 1: Create Repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. **Repository name:** `Exam-Pearson`
3. **Description:** Free WAEC practice platform with 64+ subjects
4. **Public:** ✓ (required for free GitHub Pages)
5. **Initialize with README:** ✗ (we have our own)
6. Click **Create repository**

## Step 2: Add Remote & Push Code

Run these commands in Git Bash or Terminal from the project folder:

```bash
git remote add origin https://github.com/Famys784/Exam-Pearson.git
git branch -M main
git push -u origin main
```

That's it! Your code is now on GitHub.

---

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub: `github.com/Famys784/Exam-Pearson`
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source:** Deploy from a branch
   - **Branch:** Select `main`
   - **Folder:** `/ (root)`
5. Click **Save**

GitHub Pages will build your site. After ~1-2 minutes, you'll see:

> **Your site is live at:** https://Famys784.github.io/Exam-Pearson/

---

## Your Website URL

Once deployment completes, your WAEC platform will be live at:

### 🔗 https://Famys784.github.io/Exam-Pearson/

## What's Included

✅ Full working quiz application  
✅ 64 subjects with practice questions  
✅ Dynamic question loader  
✅ User authentication (Firebase optional)  
✅ Progress dashboard  
✅ Daily question generation setup  

## Daily Updates

Every day at 4 PM, new questions are generated and stored locally. To deploy them:

```bash
git add questions/
git commit -m "Daily question update: $(date +%Y-%m-%d)"
git push
```

Or set up a GitHub Action to do this automatically.

## Support

If you encounter issues:

1. **Site not loading?**
   - Check that GitHub Pages is enabled (Settings → Pages)
   - Wait 2-3 minutes for initial deployment
   - Refresh with Ctrl+Shift+R (hard refresh)

2. **Questions not showing?**
   - Visit `/test-loader.html` to diagnose
   - Check browser console (F12) for errors
   - Verify `/questions/manifest.json` exists

3. **Authentication issues?**
   - Set up Firebase project (optional)
   - Add credentials to `js/auth.js`

---

## Next Steps

1. ✅ Create GitHub repository (Step 1)
2. ✅ Push code (Step 2)
3. ✅ Enable Pages (Step 3)
4. 📊 Monitor questions generation
5. 🚀 Share your site with students!

**Your live website will be ready in minutes!**
