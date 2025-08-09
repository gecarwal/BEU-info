
        // JavaScript for interactive features
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile Menu Toggle
            const mobileMenu = document.querySelector('.mobile-menu');
            const nav = document.querySelector('nav');
            
            mobileMenu.addEventListener('click', function() {
                nav.classList.toggle('active');
                this.querySelector('i').classList.toggle('fa-bars');
                this.querySelector('i').classList.toggle('fa-times');
            });
            
            // Page Navigation
            const navLinks = document.querySelectorAll('.nav-link, .hero-btns a, .footer-links a');
            const pages = document.querySelectorAll('.page');
            
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Get target page from data attribute
                    const targetPage = this.getAttribute('data-page');
                    
                    // Hide all pages
                    pages.forEach(page => {
                        page.classList.remove('active');
                    });
                    
                    // Show target page
                    document.getElementById(targetPage).classList.add('active');
                    
                    // Update active nav link
                    document.querySelectorAll('.nav-link').forEach(navLink => {
                        navLink.classList.remove('active');
                    });
                    
                    // If it's a nav link, set it to active
                    if (this.classList.contains('nav-link')) {
                        this.classList.add('active');
                    }
                    
                    // Close mobile menu if open
                    if (nav.classList.contains('active')) {
                        nav.classList.remove('active');
                        mobileMenu.querySelector('i').classList.add('fa-bars');
                        mobileMenu.querySelector('i').classList.remove('fa-times');
                    }
                    
                    // Scroll to top
                    window.scrollTo(0, 0);
                });
            });
            
            // Announcements Carousel
            const carouselItems = document.querySelectorAll('.carousel-item');
            const dots = document.querySelectorAll('.carousel-dot');
            let currentIndex = 0;
            
            function showSlide(index) {
                // Hide all slides
                carouselItems.forEach(item => {
                    item.classList.remove('active');
                });
                
                // Remove active class from all dots
                dots.forEach(dot => {
                    dot.classList.remove('active');
                });
                
                // Show current slide
                carouselItems[index].classList.add('active');
                
                // Activate current dot
                dots[index].classList.add('active');
            }
            
            // Auto rotate slides
            setInterval(() => {
                currentIndex = (currentIndex + 1) % carouselItems.length;
                showSlide(currentIndex);
            }, 5000);
            
            // Dot click event
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    currentIndex = index;
                    showSlide(currentIndex);
                });
            });
            
            // Form Validation
            const admissionForm = document.getElementById('admissionForm');
            const contactForm = document.getElementById('contactForm');
            
            if (admissionForm) {
                admissionForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Simple validation
                    const fullName = document.getElementById('fullName').value;
                    const email = document.getElementById('email').value;
                    
                    if (fullName && email) {
                        alert('Thank you for your application! We will contact you shortly.');
                        this.reset();
                    }
                });
            }
            
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Simple validation
                    const name = document.getElementById('contactName').value;
                    const email = document.getElementById('contactEmail').value;
                    const message = document.getElementById('contactMessage').value;
                    
                    if (name && email && message) {
                        alert('Thank you for your message! We will get back to you soon.');
                        this.reset();
                    }
                });
            }
            
            // Header scroll effect
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 100) {
                    header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                    header.style.background = 'rgba(255, 255, 255, 0.95)';
                } else {
                    header.style.boxShadow = 'var(--shadow)';
                    header.style.background = 'white';
                }
            });
        });
    