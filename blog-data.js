// Blog posts data
const blogPosts = [
    {
        id: "getting-started-with-vulkan",
        title: "Getting Started with Vulkan: A Graphics Programmer's Journey",
        description: "My experience learning Vulkan API and building a custom game engine from scratch. Covering the basics, common pitfalls, and key takeaways.",
        date: "2025-11-12",
        author: "Lior Yaari",
        tags: ["Vulkan", "Graphics Programming", "Game Engine", "C++"],
        image: "https://via.placeholder.com/600x300/1a1a1a/4a90e2?text=Vulkan",
        readTime: "8 min read",
        featured: true,
        content: "blog-posts/getting-started-with-vulkan.html"
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
