#!/bin/bash

# Script to commit only the blog system files

cd /workspaces/Lint111.github.io

echo "📋 Current git status:"
git status

echo ""
echo "📝 Files to commit for the blog system:"
echo "  - index.html (added Blog link to navigation)"
echo "  - blog.html (main blog page)"
echo "  - blog.js (blog functionality)"
echo "  - blog-data.js (blog posts data)"
echo "  - blog-posts/ (blog content folder)"
echo "  - SIMPLE_BLOG_README.md (documentation)"
echo "  - cleanup.sh (cleanup script)"
echo ""

read -p "Ready to commit? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo "🚀 Committing blog system..."
    git add index.html blog.html blog.js blog-data.js blog-posts/ SIMPLE_BLOG_README.md cleanup.sh
    git commit -m "Add simple blog system with search and filtering

- Added blog.html with search and tag filtering
- Created blog-data.js for managing blog posts
- Added blog.js for interactive functionality
- Created blog-posts/ folder with sample content
- Updated navigation in index.html to include Blog link
- Includes documentation in SIMPLE_BLOG_README.md"
    
    echo ""
    echo "✅ Committed successfully!"
    echo ""
    read -p "Push to GitHub? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]
    then
        git push origin main
        echo ""
        echo "🎉 Done! Your blog will be live at https://lint111.github.io/blog.html in a few minutes!"
    fi
fi
