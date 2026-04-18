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
// Hero Slideshow Logic with Content Sync - FIXED VERSION
// -------------------------------------------------------------------------
(function() {
    function initHeroSlideshow() {
        const slides = document.querySelectorAll('.hero-slide');
        const contents = document.querySelectorAll('.hero-content');
        
        if (slides.length === 0 || contents.length === 0) {
            console.log('Hero elements not found');
            return;
        }
        
        console.log(`Found ${slides.length} slides and ${contents.length} content blocks`);
        
        let currentSlide = 0;
        const slideInterval = 5000; // 5 seconds
        let intervalId = null;

        function updateSlide(index) {
            console.log(`Updating to slide ${index}`);
            
            // Update background slides
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
            });
            
            // Update text content
            contents.forEach((content, i) => {
                content.classList.remove('active');
                if (i === index) {
                    content.classList.add('active');
                }
            });
            
            // Update indicators if they exist
            const indicators = document.querySelectorAll('.hero-indicator');
            if (indicators.length) {
                indicators.forEach((ind, i) => {
                    if (i === index) {
                        ind.classList.add('active');
                    } else {
                        ind.classList.remove('active');
                    }
                });
            }
            
            currentSlide = index;
        }

        function nextSlide() {
            const nextIndex = (currentSlide + 1) % slides.length;
            updateSlide(nextIndex);
        }

        function startSlideshow() {
            if (intervalId) clearInterval(intervalId);
            intervalId = setInterval(nextSlide, slideInterval);
        }

        // Initialize first slide
        updateSlide(0);
        
        // Start automatic slideshow
        startSlideshow();

        // Add indicator dots
        function addIndicators() {
            const heroContainer = document.querySelector('.hero-container');
            if (!heroContainer) return;
            
            // Remove existing indicators if any
            const existingIndicators = document.querySelector('.hero-indicators');
            if (existingIndicators) existingIndicators.remove();
            
            const indicatorsDiv = document.createElement('div');
            indicatorsDiv.className = 'hero-indicators';
            
            for (let i = 0; i < slides.length; i++) {
                const dot = document.createElement('div');
                dot.className = 'hero-indicator';
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => {
                    clearInterval(intervalId);
                    updateSlide(i);
                    startSlideshow();
                });
                indicatorsDiv.appendChild(dot);
            }
            
            heroContainer.appendChild(indicatorsDiv);
        }

        addIndicators();
    }
    
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHeroSlideshow);
    } else {
        initHeroSlideshow();
    }
})();








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
                <p>
                wnm limited (formally known as wireless newmedia ltd) is an 
                integrated business solutions provider that offers a variety of 
                innovative services including the planning and implementation of 
                composite solutions for related infrastructure and construction 
                projects, end to end implementation of unique access control systems, 
                deployment of communication networks infrastructure, print and other 
                related media service, etc. across various industry sectors including; 
                Telecoms, Media & Technology (TMT); Energy; Oil and Gas; Public Sector; etc.
                <br><br>
                With over 30 years of collective experience, we have developed innovative 
                and dynamic solutions, together with our strategic and technical partners, 
                a consistent, customer-centric service - catering to multiple industries 
                in Nigeria and West Africa.
                </p>
                
                <p><strong>Our Vision:</strong> 
                To be the number one provider of customer-centric and innovative business 
                solutions across multiple industries.
                </p>
                
                <p><strong>Our Mission:</strong> 
                To create stakeholder value by repeatedly exceeding customer expectations.
                <br><br>
                It is our goal to maintain and enhance our reputation by acting ethically 
                at all times. We also focus on the needs of our clients and we strive to 
                understand their businesses to provide them with the best option from our 
                range of solutions.
                </p>
            `
        },
        'Our Team': {
            title: 'Our Team',
            html: `
                <p>
                The wnm limited team comprises of a group of industry professionals with 
                over 30 years of collective experience. We pride ourselves on our technical 
                know-how and each member brings a wealth of experience to the table.
                </p>
                
            `
        },
        'Strategic Partnerships': {
            title: 'Strategic Partnerships',
            html: `
                <p>
                To allow us provide our product offerings and services to an international 
                standard for our clients, wnm limited has had to enter into a number of 
                strategic alliances with international organisations. We continue to build 
                international partnerships to deliver world-class services and expertise to 
                address client needs. Below is a list of just some of the companies whose 
                products we currently represent in Nigeria and other West African countries:
                </p>
                
                <p><a href="#"><strong>AFL Telecommunications Europe Ltd</strong> </a>
                <br>
                British Manufacturer of Power & Telecom Cables
                </p>

                <p><a href="#"><strong>Buzon</strong> </a>
                <br>
                Belgian manufacturer of raised flooring systems
                </p>

                <p><a href="#"><strong>CyberLock Inc.</strong> </a>
                <br>
                American Manufacturer of Access Control Solutions
                (Intelligent Padlocks and Keys)
                </p>

                <p><a href="#"><strong>Hidrostank</strong> </a>
                <br>
                Spanish provider of innovative solutions for the construction 
                and telecoms industries
                </p>

                <p><a href="#"><strong>Lionweld Kennedy Flooring Limited</strong> </a>
                <br>
                British manufacturer of Steel and Fibreglass Reinforced Plastic (GRP) gratings, 
                access and composite structure products
                </p>

                <p><a href="#"><strong>McGard</strong> </a>
                <br>
                Deutsche Manufacturer of Anti-theft Secure Bolts
                </p>

                <p><a href="#"><strong>Silvadec</strong> </a>
                <br>
                Silvadec are suppliers of high quality Composite 
                Flooring and Cladding Products.
                </p>
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
