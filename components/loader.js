// Component loader - loads shared HTML components
async function loadComponent(elementId, componentPath, options = {}) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with id "${elementId}" not found`);
        return;
    }
    
    try {
        const response = await fetch(componentPath);
        if (!response.ok) {
            throw new Error(`Failed to load ${componentPath}: ${response.statusText}`);
        }
        
        let html = await response.text();
        
        // Replace placeholders with actual values
        const baseUrl = options.baseUrl || '';
        const blogActive = options.blogActive ? 'active' : '';
        
        html = html.replace(/\{\{baseUrl\}\}/g, baseUrl);
        html = html.replace(/\{\{blogActive\}\}/g, blogActive);
        
        element.innerHTML = html;
    } catch (error) {
        console.error(`Error loading component:`, error);
    }
}

// Load all components when DOM is ready
document.addEventListener('DOMContentLoaded', async function() {
    // Determine base URL based on current page location
    const path = window.location.pathname;
    const inBlogPost = path.includes('/blog-posts/');
    const baseUrl = inBlogPost ? '../' : '';
    const isBlogPage = path.includes('blog.html') || inBlogPost;
    
    // Load nav and footer
    await loadComponent('nav-placeholder', `${baseUrl}components/nav.html`, { 
        baseUrl, 
        blogActive: isBlogPage 
    });
    await loadComponent('footer-placeholder', `${baseUrl}components/footer.html`, { baseUrl });
    
    // Re-initialize scripts after components are loaded
    if (typeof window.initializeScripts === 'function') {
        window.initializeScripts();
    }
});
