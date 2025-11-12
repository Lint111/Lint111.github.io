#!/bin/bash

# Cleanup script to remove Next.js blog files and keep only the simple HTML blog

echo "🧹 Cleaning up old Next.js blog files..."

cd /workspaces/Lint111.github.io

# Remove the entire Next.js portfolio folder
echo "Removing lior-yaari-portfolio directory..."
rm -rf lior-yaari-portfolio/

# Remove Next.js documentation files
echo "Removing documentation files..."
rm -f BLOG_README.md
rm -f BLOG_QUICK_START.md
rm -f BLOG_IMPLEMENTATION_SUMMARY.md
rm -f DEPLOYMENT_INSTRUCTIONS.md
rm -f deploy-blog.sh

echo "✅ Cleanup complete!"
echo ""
echo "📁 Remaining blog files (the simple ones we want):"
echo "  - blog.html"
echo "  - blog.js"
echo "  - blog-data.js"
echo "  - blog-posts/"
echo "  - SIMPLE_BLOG_README.md"
echo ""
echo "🚀 Ready to commit and push!"
