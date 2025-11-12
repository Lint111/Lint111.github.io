// Blog functionality
let selectedTag = null;
let searchQuery = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderTagFilters();
    renderBlogPosts(blogPosts);
    setupSearchListener();
});

// Render tag filters
function renderTagFilters() {
    const tagsFilter = document.getElementById('tagsFilter');
    const allTags = getAllTags();
    
    allTags.forEach(tag => {
        const btn = document.createElement('button');
        btn.className = 'tag-btn';
        btn.textContent = tag;
        btn.onclick = () => toggleTag(tag, btn);
        tagsFilter.appendChild(btn);
    });
}

// Toggle tag filter
function toggleTag(tag, btn) {
    // Remove active from all buttons
    document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
    
    if (selectedTag === tag) {
        selectedTag = null;
    } else {
        selectedTag = tag;
        btn.classList.add('active');
    }
    
    filterAndRenderPosts();
}

// Setup search listener
function setupSearchListener() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        filterAndRenderPosts();
    });
}

// Filter and render posts
function filterAndRenderPosts() {
    let filteredPosts = [...blogPosts];
    
    // Filter by tag
    if (selectedTag) {
        filteredPosts = filteredPosts.filter(post => post.tags.includes(selectedTag));
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
        filteredPosts = filteredPosts.filter(post =>
            post.title.toLowerCase().includes(searchQuery) ||
            post.description.toLowerCase().includes(searchQuery) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchQuery))
        );
    }
    
    // Sort by date (newest first)
    filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Update results count
    updateResultsCount(filteredPosts.length);
    
    // Render posts
    renderBlogPosts(filteredPosts);
}

// Update results count
function updateResultsCount(count) {
    const resultsCount = document.getElementById('resultsCount');
    if (count === blogPosts.length) {
        resultsCount.textContent = `Showing all ${count} posts`;
    } else {
        resultsCount.textContent = `Found ${count} post${count !== 1 ? 's' : ''}`;
    }
}

// Render blog posts
function renderBlogPosts(posts) {
    const blogGrid = document.getElementById('blogGrid');
    blogGrid.innerHTML = '';
    
    if (posts.length === 0) {
        blogGrid.innerHTML = `
            <div class="no-results">
                <h3>No posts found matching your criteria.</h3>
                <button onclick="clearFilters()" class="tag-btn" style="margin-top: 1rem;">Clear Filters</button>
            </div>
        `;
        return;
    }
    
    posts.forEach(post => {
        const card = createBlogCard(post);
        blogGrid.appendChild(card);
    });
}

// Create blog card
function createBlogCard(post) {
    const card = document.createElement('div');
    card.className = 'blog-card';
    card.onclick = () => window.location.href = post.content;
    
    card.innerHTML = `
        ${post.image ? `
            <div style="position: relative;">
                <img src="${post.image}" alt="${post.title}" class="blog-card-image">
                ${post.featured ? '<span class="featured-badge">Featured</span>' : ''}
            </div>
        ` : ''}
        <div class="blog-card-content">
            <div class="blog-card-meta">
                <span>${formatDate(post.date)}</span>
                ${post.readTime ? `<span>${post.readTime}</span>` : ''}
            </div>
            <h3 class="blog-card-title">${post.title}</h3>
            <p class="blog-card-description">${post.description}</p>
            <div class="blog-card-tags">
                ${post.tags.map(tag => `<span class="blog-card-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    return card;
}

// Clear filters
function clearFilters() {
    selectedTag = null;
    searchQuery = '';
    document.getElementById('searchInput').value = '';
    document.querySelectorAll('.tag-btn').forEach(btn => btn.classList.remove('active'));
    filterAndRenderPosts();
}
