# Simple Blog System - Quick Guide

## ✅ What Was Created

A lightweight, standalone blog system using plain HTML, CSS, and JavaScript that integrates seamlessly with your existing portfolio site.

## 📁 Files Added

```
/workspaces/Lint111.github.io/
├── blog.html              # Main blog listing page
├── blog.js                # Blog functionality (search, filter)
├── blog-data.js           # Blog posts data
└── blog-posts/
    └── getting-started-with-vulkan.html  # Sample blog post
```

## 🚀 Features

- ✅ **Search functionality** - Real-time filtering
- ✅ **Tag filtering** - Click tags to filter posts
- ✅ **Responsive design** - Works on all devices
- ✅ **Featured posts** - Highlight important content
- ✅ **No build process** - Pure HTML/CSS/JS
- ✅ **Fast and simple** - No dependencies or frameworks

## 📝 How to Add a New Post

### 1. Create the HTML file
Create a new file in `blog-posts/my-new-post.html` using `getting-started-with-vulkan.html` as a template.

### 2. Add to blog-data.js
Open `blog-data.js` and add your post to the `blogPosts` array:

```javascript
{
    id: "my-new-post",
    title: "My New Post Title",
    description: "Brief description for the card",
    date: "2025-11-12",
    author: "Lior Yaari",
    tags: ["Tag1", "Tag2"],
    image: "https://via.placeholder.com/600x300/1a1a1a/4a90e2?text=My+Post",
    readTime: "5 min read",
    featured: false,
    content: "blog-posts/my-new-post.html"
}
```

### 3. Done!
Your post will appear automatically on the blog page.

## 🎨 Customization

- **Colors**: Edit the CSS in `blog.html` or your main `styles.css`
- **Layout**: Modify the grid in `blog.html` (currently 3 columns)
- **Images**: Use your own images or placeholder services

## 🌐 Navigation

Added "Blog" link to your main navigation in `index.html`

## 🚀 Deploy

Simply commit and push to GitHub:

```bash
cd /workspaces/Lint111.github.io
git add .
git commit -m "Add simple blog system"
git push origin main
```

Visit: **https://lint111.github.io/blog.html**

## ✨ Advantages

- **No build process** - Just edit and push
- **No dependencies** - Works everywhere
- **Easy to maintain** - Plain HTML/CSS/JS
- **Fast loading** - No framework overhead
- **SEO friendly** - Static HTML pages

## 📖 Creating More Blog Posts

Copy `blog-posts/getting-started-with-vulkan.html` and customize:
1. Change the title, date, tags
2. Update the content
3. Add to `blog-data.js`
4. Done!

That's it! Much simpler than Next.js! 🎉
