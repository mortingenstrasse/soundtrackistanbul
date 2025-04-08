// JavaScript for soundtrackistanbul website
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Coffee button interaction
    const coffeeButtons = document.querySelectorAll('.btn-coffee');
    if (coffeeButtons.length > 0) {
        coffeeButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                // Check if this is a direct link (not in navbar)
                if (!this.closest('nav')) {
                    // Let the link navigate to the href attribute
                    // No need to prevent default
                } else {
                    e.preventDefault();
                    const coffeeLink = 'https://buymeacoffee.com/soundtrackistanbul';
                    if (coffeeLink) {
                        window.location.href = coffeeLink;
                    } else {
                        alert('Thank you for considering to buy me a coffee!');
                    }
                }
            });
        });
    }

    // Download buttons interaction
    const downloadButtons = document.querySelectorAll('.btn-download');
    if (downloadButtons.length > 0) {
        downloadButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                // Don't prevent default - let the link navigate to its href
                // But we can still add some feedback
                const downloadType = this.textContent.trim();
                console.log(`Starting download for: ${downloadType}`);
            });
        });
    }

    // Image loading optimization
    document.querySelectorAll('img').forEach(img => {
        // Set loading="lazy" attribute for better performance
        img.setAttribute('loading', 'lazy');
        
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        img.addEventListener('error', function() {
            console.error('Error loading image:', this.src);
            // Fallback if image fails to load
            this.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22600%22%20height%3D%22328%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20600%20328%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_187505c0ee2%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A30pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_187505c0ee2%22%3E%3Crect%20width%3D%22600%22%20height%3D%22328%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22180%22%20y%3D%22174%22%3EImage%20Not%20Found%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
        });
    });

    // Add animation to product cards
    const productCards = document.querySelectorAll('.product-card');
    if (productCards.length > 0) {
        productCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
            });
        });
    }

    // Responsive navigation for small screens
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            const isVisible = nav.style.display === 'block';
            nav.style.display = isVisible ? 'none' : 'block';
            
            // Add a little animation
            if (!isVisible) {
                nav.style.opacity = '0';
                nav.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    nav.style.opacity = '1';
                    nav.style.transform = 'translateY(0)';
                }, 10);
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target) && window.innerWidth <= 480) {
                nav.style.display = 'none';
            }
        });

        // Check screen size on load and resize
        function checkScreenSize() {
            if (window.innerWidth > 480) {
                nav.style.display = 'block';
                nav.style.position = 'static';
                nav.style.boxShadow = 'none';
                nav.style.opacity = '1';
                nav.style.transform = 'translateY(0)';
            } else {
                nav.style.display = 'none';
            }
        }

        // Initial check
        checkScreenSize();
        
        // Listen for window resize
        window.addEventListener('resize', checkScreenSize);
    }
    
    // Add subtle animations on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.product-card, .feature, .step');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate-fade-in');
            }
        });
    };
    
    // Initial check
    animateOnScroll();
    
    // Listen for scroll
    window.addEventListener('scroll', animateOnScroll);
});
