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
    },
    {
        id: 2,
        title: "Getting Started with Vulkan: A Graphics Programmer's Journey",
        excerpt: "Learning Vulkan has been one of the most challenging yet rewarding experiences in my game development journey. Unlike higher-level APIs like OpenGL or DirectX 11, Vulkan forces you to understand graphics programming at a much deeper level.",
        date: "2025-11-12",
        author: "Lior Yaari",
        tags: ["Vulkan", "Graphics Programming", "Game Engine", "C++"],
        image: "https://via.placeholder.com/400x250/1a1a2e/4a90e2?text=Vulkan+Graphics",
        url: "blog-posts/getting-started-with-vulkan.html",
        readTime: "8 min read"
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
