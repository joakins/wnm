document.addEventListener('DOMContentLoaded', () => {

    // -------------------------------------------------------------------------
    // Mobile Menu Toggle
    // -------------------------------------------------------------------------
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');

            // Animate hamburger to X (optional simple transform)
            // For now, we rely on the CSS 'active' state if we want to add animations later
        });

        // Close menu when clicking a link
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
            });
        });
    }

    // -------------------------------------------------------------------------
    // Smooth Scrolling for Anchor Links
    // -------------------------------------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80; // Height of fixed header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // -------------------------------------------------------------------------
    // Intersection Observer for Fade-in Animations
    // -------------------------------------------------------------------------
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // -------------------------------------------------------------------------
    // Hero Slideshow Logic
    // -------------------------------------------------------------------------
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 5000; // 5 seconds

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        setInterval(nextSlide, slideInterval);
    }

    // -------------------------------------------------------------------------
    // About Page Tabs Logic
    // -------------------------------------------------------------------------
    const tabs = document.querySelectorAll('.tab-pill');
    const contentTitle = document.querySelector('.defines-content h2');
    const contentBody = document.querySelector('.defines-content'); // Container for paragraphs

    // Data for tabs
    const tabData = {
        'Our Purpose': {
            title: 'Revolutionizing operations, empowering growth',
            html: `
                <p>At wnm limited, our purpose is to transform how businesses operate with technology and engineering excellence. We are committed to creating solutions that offer seamless, engaging, and personalized results.</p>
                <p><strong>Our Mission:</strong> To create stakeholder value by repeatedly exceeding customer expectations. It is our goal to maintain and enhance our reputation by acting ethically at all times.</p>
                <p>We strive to understand our clients' businesses to provide them with the best option from our range of solutions.</p>
            `
        },
        'Our Journey': {
            title: 'Over 30 Years of Innovation',
            html: `
                <p>It began with a simple idea: that technology should serve people, not the other way around. Since our inception, we have evolved from a niche telecom service provider into a robust integrated solutions partner.</p>
                <p>We have successfully navigated the shifting landscapes of Nigeria's infrastructure and technology sectors, consistently staying ahead of the curve to deliver value that endures.</p>
            `
        },
        'Our Promise': {
            title: 'Quality, Integrity, and Excellence',
            html: `
                <p>We promise to deliver not just projects, but peace of mind. Our commitment to quality assurance means we don’t cut corners.</p>
                <p><strong>Our Vision:</strong> To be the number one provider of customer-centric and innovative business solutions across multiple industries. We pledge to be transparent, reliable, and dedicated to your success.</p>
            `
        }
    };

    if (tabs.length > 0 && contentTitle && contentBody) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active from all
                tabs.forEach(t => t.classList.remove('active'));
                // Add active to clicked
                tab.classList.add('active');

                // Update Content
                const key = tab.textContent.trim();
                const data = tabData[key];

                if (data) {
                    // Simple fade effect
                    contentBody.style.opacity = '0';
                    setTimeout(() => {
                        contentTitle.textContent = data.title;
                        // Keep the h2 and append the rest, or just replace innerHTML of a specific container
                        // To keep it simple, we replace the paragraphs after the H2.
                        // Actually, let's just replace the innerHTML of a content wrapper if possible, 
                        // but here we have h2 inside .defines-content.

                        // Strategy: Rebuild innerHTML
                        contentBody.innerHTML = `<h2>${data.title}</h2>${data.html}`;
                        contentBody.style.opacity = '1';
                    }, 200);
                }
            });
        });

        // Add transition for opacity
        contentBody.style.transition = 'opacity 0.2s ease';
    }

});
