// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "VIXEN: From Learning Tool to Research Framework",
        excerpt: "How I transformed a Vulkan learning project into a modular render graph framework for comparative research on voxel rendering pipelines. A journey from monolithic architecture to a flexible, node-based system.",
        date: "2025-11-12",
        author: "Lior Yaari",
        tags: ["Vulkan", "Render Graph", "C++", "Game Engine", "Research", "Architecture"],
        image: "https://via.placeholder.com/400x250/1a1a2e/4a90e2?text=VIXEN+Framework",
        url: "blog-posts/vixen-learning-tool-to-research-framework.html",
        readTime: "10 min read"
    }
];

// Helper functions
function getAllTags() {
    const tags = new Set();
    blogPosts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}
