@echo off
REM Exam-Pearson GitHub Deployment Script
REM This script pushes your website to GitHub Pages

echo.
echo ========================================
echo  Exam-Pearson GitHub Deployment
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Git is not installed or not in PATH
    echo Please install Git from https://git-scm.com/download/win
    pause
    exit /b 1
)

echo Step 1: Adding remote origin...
git remote add origin https://github.com/T-Fam/Exam-Pearson.git 2>nul
if %errorlevel% equ 128 (
    echo Remote already exists, updating...
    git remote set-url origin https://github.com/T-Fam/Exam-Pearson.git
)

echo Step 2: Renaming branch to main...
git branch -M main

echo Step 3: Pushing code to GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo SUCCESS! Your code has been pushed!
    echo ========================================
    echo.
    echo Next steps:
    echo 1. Go to: https://github.com/T-Fam/Exam-Pearson/settings/pages
    echo 2. Select "Deploy from a branch"
    echo 3. Select "main" branch
    echo 4. Click Save
    echo.
    echo Your website will be live at:
    echo https://T-Fam.github.io/Exam-Pearson/
    echo.
) else (
    echo.
    echo ERROR: Push failed!
    echo Please check your GitHub credentials and try again.
    echo.
)

pause
