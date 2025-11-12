# Shared Components

This directory contains reusable HTML components that are loaded dynamically across the website.

## Components

### nav.html
The main navigation bar with accessibility menu. Includes:
- Accessibility toggle button with dropdown menu
- Navigation links (About, Skills, Projects, Blog, Education, Contact, Resume)
- Mobile menu toggle

### footer.html
The footer with social media links (GitHub, LinkedIn, Itch.io, Email)

### loader.js
JavaScript component loader that:
- Dynamically loads nav and footer HTML
- Handles path resolution for pages in subdirectories
- Automatically sets active states for nav links
- Re-initializes event listeners after loading

## Usage

### In HTML pages:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- ... your head content ... -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navigation placeholder -->
    <div id="nav-placeholder"></div>
    
    <!-- Your page content -->
    <main>
        <!-- ... -->
    </main>
    
    <!-- Footer placeholder -->
    <div id="footer-placeholder"></div>
    
    <!-- Load scripts -->
    <script src="components/loader.js"></script>
    <script src="script.js"></script>
</body>
</html>
```

### For pages in subdirectories (e.g., blog-posts/):

The loader automatically detects the page location and adjusts paths accordingly.

## Benefits

1. **Single source of truth**: Nav and footer are defined once
2. **Easy maintenance**: Update one file to change all pages
3. **Consistency**: All pages use identical navigation and footer
4. **Automatic path resolution**: Works from root and subdirectories

## Template Variables

The loader replaces these placeholders in component HTML:

- `{{baseUrl}}` - Relative path to root (empty for root pages, '../' for subdirectories)
- `{{blogActive}}` - Adds 'active' class to Blog nav link when on blog pages
