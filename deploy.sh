#!/bin/bash

# 🚀 Quick Deploy Script for Next.js Portfolio
# This script helps you deploy your portfolio to Vercel

echo "🚀 Starting deployment process..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit: Next.js portfolio"
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Check if remote origin exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Please add your GitHub repository as remote origin:"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/portfolio-nextjs.git"
    echo "   git branch -M main"
    echo "   git push -u origin main"
    echo ""
    echo "📝 Then follow these steps:"
    echo "1. Go to https://vercel.com"
    echo "2. Sign up/Login with GitHub"
    echo "3. Click 'New Project'"
    echo "4. Import your repository"
    echo "5. Click 'Deploy'"
else
    echo "✅ Remote origin already configured"
    echo "🔄 Pushing latest changes..."
    git add .
    git commit -m "Update portfolio" || echo "No changes to commit"
    git push origin main
    echo "✅ Changes pushed to GitHub"
    echo ""
    echo "🎉 Your changes are now live on Vercel!"
fi

echo ""
echo "📋 Next steps:"
echo "1. Visit your Vercel dashboard"
echo "2. Check deployment status"
echo "3. Test your live website"
echo "4. Add custom domain (optional)"
echo ""
echo "🔗 Useful links:"
echo "- Vercel Dashboard: https://vercel.com/dashboard"
echo "- Vercel Documentation: https://vercel.com/docs"
echo "- Next.js Documentation: https://nextjs.org/docs"
