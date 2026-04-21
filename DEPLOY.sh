#!/bin/bash
# Exam-Pearson GitHub Deployment Script
# This script pushes your website to GitHub Pages

echo ""
echo "========================================"
echo " Exam-Pearson GitHub Deployment"
echo "========================================"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "ERROR: Git is not installed"
    echo "Please install Git from https://git-scm.com/download"
    exit 1
fi

echo "Step 1: Adding remote origin..."
git remote add origin https://github.com/T-Fam/Exam-Pearson.git 2>/dev/null
if [ $? -ne 0 ]; then
    echo "Remote already exists, updating..."
    git remote set-url origin https://github.com/T-Fam/Exam-Pearson.git
fi

echo "Step 2: Renaming branch to main..."
git branch -M main

echo "Step 3: Pushing code to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "========================================"
    echo "SUCCESS! Your code has been pushed!"
    echo "========================================"
    echo ""
    echo "Next steps:"
    echo "1. Go to: https://github.com/T-Fam/Exam-Pearson/settings/pages"
    echo "2. Select 'Deploy from a branch'"
    echo "3. Select 'main' branch"
    echo "4. Click Save"
    echo ""
    echo "Your website will be live at:"
    echo "https://T-Fam.github.io/Exam-Pearson/"
    echo ""
else
    echo ""
    echo "ERROR: Push failed!"
    echo "Please check your GitHub credentials and try again."
    echo ""
fi
