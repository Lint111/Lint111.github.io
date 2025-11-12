// Initialize all event listeners and functionality
function initializeScripts() {
    // Load accessibility preferences
    loadPreferences();

    // Accessibility menu toggle
    const accessibilityToggle = document.getElementById('accessibilityToggle');
    const accessibilityMenu = document.getElementById('accessibilityMenu');
    
    if (accessibilityToggle && accessibilityMenu) {
        // Remove old event listeners by cloning
        const newToggle = accessibilityToggle.cloneNode(true);
        accessibilityToggle.parentNode.replaceChild(newToggle, accessibilityToggle);
        
        newToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            accessibilityMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!accessibilityMenu.contains(e.target) && !newToggle.contains(e.target)) {
                accessibilityMenu.classList.remove('active');
            }
        });
    }

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        // Remove old event listeners by cloning
        const newMobileToggle = mobileMenuToggle.cloneNode(true);
        mobileMenuToggle.parentNode.replaceChild(newMobileToggle, mobileMenuToggle);
        
        newMobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            newMobileToggle.classList.toggle('active');
        });

        // Close menu when clicking on nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                newMobileToggle.classList.remove('active');
            });
        });
    }

    // Smooth scroll for all anchor links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    initializeScripts();

    // Add active state to navigation links on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinksForHighlight = document.querySelectorAll('.nav-link');

    function highlightNavigation() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinksForHighlight.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // Add scroll animation for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe skill categories, project cards, and blog posts
    const animatedElements = document.querySelectorAll(
        '.skill-category, .project-card, .blog-post'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add navbar background on scroll
    const navbar = document.querySelector('.navbar');
    
    function updateNavbarOnScroll() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        }
    }

    window.addEventListener('scroll', updateNavbarOnScroll);

    // Log page load for analytics (placeholder)
    console.log('Portfolio page loaded successfully');
});

// Optional: Add a function to dynamically update the year in footer
function updateYear() {
    const yearElement = document.querySelector('.footer p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = yearElement.textContent.replace('2024', currentYear);
    }
}

// Call updateYear when DOM is loaded
document.addEventListener('DOMContentLoaded', updateYear);

// Accessibility Functions

// Load saved preferences
function loadPreferences() {
    const savedTextSize = localStorage.getItem('textSize') || 'normal';
    const savedTheme = localStorage.getItem('colorTheme') || 'default';
    
    setTextSize(savedTextSize);
    setTheme(savedTheme);
}

// Set Text Size
function setTextSize(size) {
    const html = document.documentElement;
    
    // Remove all text size classes
    html.classList.remove('text-small', 'text-large');
    
    // Add the selected size class (unless it's normal)
    if (size === 'small') {
        html.classList.add('text-small');
    } else if (size === 'large') {
        html.classList.add('text-large');
    }
    
    // Update active state on buttons
    document.querySelectorAll('.text-size-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.size === size) {
            btn.classList.add('active');
        }
    });
    
    // Save preference
    localStorage.setItem('textSize', size);
}

// Set Color Theme
function setTheme(theme) {
    // Remove all theme classes
    document.body.classList.remove('theme-high-contrast', 'theme-deuteranopia', 'theme-protanopia', 'theme-tritanopia');
    
    // Add the selected theme class (unless it's default)
    if (theme !== 'default') {
        document.body.classList.add(`theme-${theme}`);
    }
    
    // Update active state on buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.theme === theme) {
            btn.classList.add('active');
        }
    });
    
    // Save preference
    localStorage.setItem('colorTheme', theme);
}
