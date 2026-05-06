
    // Solution data based on URL parameter
    const solutionsData = {
        'flooring-outdoor': {
            title: 'Outdoor Flooring',
            // Plain text version for breadcrumb, browser tab, etc.
            subtitlePlain: 'Building dream edifice with precision, quality materials and attention to every detail.',
            // HTML version for displaying with line breaks
            subtitleHTML: 'Building dream edifice with precision, quality materials <br> and attention to every detail.',
            overview: 'Outdoor flooring solutions are engineered to withstand harsh weather conditions while maintaining structural integrity and visual appeal. Ideal for patios, walkways, and open spaces, they combine durability, safety, and low maintenance for long-term outdoor performance..',
            image: 'images/solutions/outdoorFlooring.jpg',
            features: [
                { 
                    icon: 'fa-solid fa-hard-hat', 
                    title: 'Weather Resistance', 
                    desc: 'Designed to endure extreme sun, rain, and temperature changes without fading, cracking, or warping, ensuring long-lasting performance and consistent appearance in outdoor environments.' 

                },
                { 
                    icon: 'fa-solid fa-cube', 
                    title: 'Slip-Resistant Surface', 
                    desc: 'Textured finishes enhance grip and reduce the risk of slips and falls, making it safer for use in wet or high-traffic outdoor areas.' 
                },
                { 
                    icon: 'fa-solid fa-chart-line', 
                    title: 'High Load Capacity', 
                    desc: 'Built to support heavy foot traffic and equipment without deformation, maintaining structural stability and safety over time.' 
                },
                { 
                    icon: 'fa-solid fa-leaf', 
                    title: 'UV Protection', 
                    desc: 'Advanced UV-resistant materials prevent discoloration and degradation, helping the flooring retain its original look even after prolonged sun exposure.' 
                },
                { 
                    icon: 'fa-solid fa-shield-alt', 
                    title: 'Low Maintenance', 
                    desc: 'Requires minimal cleaning and upkeep, reducing long-term maintenance costs while maintaining a clean and professional outdoor appearance.' 
                },
                { 
                    icon: 'fa-regular fa-clock', 
                    title: 'Drainage Efficiency', 
                    desc: 'Engineered to allow proper water flow, preventing water accumulation and enhancing safety and durability in outdoor installations.' 
                }
            ],
            benefits: [
                '20+ years of residential construction experience',
                '100+ satisfied homeowners served',
                '5-year workmanship warranty',
                'Free initial consultation and quote',
                'Regular project updates and communication',
                'Post-construction support and maintenance'
            ],
            related: [
                { 
                    title: 'Indoor Flooring', 
                    desc: 'Indoor raised flooring systems provide flexible and efficient...', 
                    image: 'images/solutions/indoorFlooring.jpg', 
                    link: 'solution_detail.html?id=construction-commercial' 

                },
                { 
                    title: 'Wood Plastic Composite', 
                    desc: 'Wood Plastic Composite flooring combines the natural look', 
                    image: 'images/solutions/wpc.jpg', 
                    link: 'solution_detail.html?id=residential-automation' 
                },
                { 
                    title: 'Ceramic Tiles', 
                    desc: 'Beautiful and functional interior spaces', 
                    image: 'images/imagePlaceholder.jpg', 
                    link: 'solution_detail.html?id=architectural-interior' }
            ]
        },
        'flooring-indoor': {
            title: 'Indoor Flooring',
            subtitle: 'Delivering exceptional commercial spaces including offices, retail centers, and mixed-use developments.',
            overview: 'Our commercial construction division specializes in creating functional, inspiring, and efficient business environments. From corporate headquarters to retail spaces, we understand the unique requirements of commercial projects including strict timelines, budget constraints, and minimal business disruption.',
            image: 'img/service-2.jpg',
            features: [
                { icon: 'fa-solid fa-building', title: 'Turnkey Solutions', desc: 'End-to-end project management from concept to completion' },
                { icon: 'fa-solid fa-chart-simple', title: 'Budget Optimization', desc: 'Cost-effective solutions without compromising quality' },
                { icon: 'fa-solid fa-helmet-safety', title: 'Safety Compliance', desc: 'Strict adherence to safety regulations and standards' },
                { icon: 'fa-solid fa-code-branch', title: 'Modern Techniques', desc: 'Latest construction technologies and methodologies' }
            ],
            benefits: [
                '15+ commercial projects completed',
                'Zero safety incidents record',
                'Flexible working arrangements',
                'LEED certified team members'
            ],
            related: [
                { title: 'Industrial Construction', desc: 'Factories, warehouses, and industrial facilities', image: 'img/service-3.jpg', link: 'solution_detail.html?id=construction-industrial' },
                { title: 'Office Solutions', desc: 'Modern office fit-outs and renovations', image: 'img/service-5.jpg', link: 'solution_detail.html?id=commercial-office' }
            ]
        },
        'construction-industrial': {
            title: 'Industrial Construction',
            subtitle: 'Specialized industrial facilities, warehouses, and manufacturing plants built to the highest standards.',
            overview: 'We deliver robust industrial construction solutions designed for maximum efficiency and durability. Our expertise covers manufacturing plants, warehouses, distribution centers, and specialized industrial facilities with focus on operational workflow, safety, and regulatory compliance.',
            image: 'img/service-3.jpg',
            features: [
                { icon: 'fa-solid fa-industry', title: 'Heavy-Duty Construction', desc: 'Built to withstand demanding industrial environments' },
                { icon: 'fa-solid fa-gear', title: 'Process Integration', desc: 'Seamless integration with existing operations' },
                { icon: 'fa-solid fa-charging-station', title: 'Energy Efficiency', desc: 'Sustainable and cost-effective industrial design' }
            ],
            benefits: [
                'Advanced industrial expertise',
                'Minimal operational disruption',
                'Comprehensive safety protocols',
                'Long-term durability guarantee'
            ],
            related: [
                { title: 'Commercial Construction', desc: 'Office and retail spaces', image: 'img/service-2.jpg', link: 'solution_detail.html?id=construction-commercial' },
                { title: 'Industrial Machinery', desc: 'Equipment installation and maintenance', image: 'img/service-6.jpg', link: 'solution_detail.html?id=mechanical-machinery' }
            ]
        },
        'mechanical-hvac': {
            title: 'HVAC Systems',
            subtitle: 'Energy-efficient heating, ventilation, and air conditioning solutions for optimal indoor comfort.',
            overview: 'Our comprehensive HVAC solutions ensure optimal indoor air quality and energy efficiency. From design and installation to maintenance and repair, we provide complete climate control systems for residential, commercial, and industrial applications.',
            image: 'img/service-4.jpg',
            features: [
                { icon: 'fa-solid fa-wind', title: 'Energy Efficient', desc: 'High-efficiency systems that reduce energy costs' },
                { icon: 'fa-solid fa-temperature-low', title: 'Climate Control', desc: 'Precise temperature and humidity management' },
                { icon: 'fa-solid fa-filter', title: 'Air Quality', desc: 'Advanced filtration for clean indoor air' }
            ],
            benefits: [
                'Certified HVAC technicians',
                '24/7 emergency service',
                'Energy savings up to 30%',
                'Extended equipment lifespan'
            ],
            related: [
                { title: 'Plumbing Services', desc: 'Complete plumbing solutions', image: 'img/service-5.jpg', link: 'solution_detail.html?id=mechanical-plumbing' },
                { title: 'Home Automation', desc: 'Smart climate control integration', image: 'img/service-1.jpg', link: 'solution_detail.html?id=residential-automation' }
            ]
        },
        'mechanical-plumbing': {
            title: 'Plumbing Services',
            subtitle: 'Comprehensive plumbing solutions for residential, commercial, and industrial applications.',
            overview: 'From installation to repair and maintenance, our licensed plumbers deliver reliable, code-compliant plumbing solutions for any project size. We specialize in efficient water systems, leak detection, and sustainable plumbing fixtures.',
            image: 'img/service-5.jpg',
            features: [
                { icon: 'fa-solid fa-water', title: 'Complete Systems', desc: 'Full plumbing system design and installation' },
                { icon: 'fa-solid fa-magnifying-glass', title: 'Leak Detection', desc: 'Advanced technology for pinpoint accuracy' },
                { icon: 'fa-solid fa-leaf', title: 'Water Efficiency', desc: 'Eco-friendly fixtures and water conservation' }
            ],
            benefits: [
                'Licensed and insured plumbers',
                'Emergency repair service',
                'Quality workmanship guarantee',
                'Competitive pricing'
            ],
            related: [
                { title: 'HVAC Systems', desc: 'Heating and cooling solutions', image: 'img/service-4.jpg', link: 'solution_detail.html?id=mechanical-hvac' },
                { title: 'Industrial Machinery', desc: 'Industrial equipment services', image: 'img/service-6.jpg', link: 'solution_detail.html?id=mechanical-machinery' }
            ]
        },
        'mechanical-machinery': {
            title: 'Industrial Machinery',
            subtitle: 'Installation, maintenance, and optimization of industrial machinery and equipment.',
            overview: 'We provide comprehensive industrial machinery services including installation, preventive maintenance, repair, and performance optimization. Our certified technicians ensure your equipment operates at peak efficiency with minimal downtime.',
            image: 'img/service-6.jpg',
            features: [
                { icon: 'fa-solid fa-robot', title: 'Automation', desc: 'Advanced automation solutions' },
                { icon: 'fa-solid fa-chart-line', title: 'Predictive Maintenance', desc: 'Proactive equipment monitoring' },
                { icon: 'fa-solid fa-microchip', title: 'Smart Integration', desc: 'Industry 4.0 ready systems' }
            ],
            benefits: [
                '24/7 technical support',
                'OEM-certified technicians',
                'Reduced equipment downtime',
                'Extended machinery life'
            ],
            related: [
                { title: 'Industrial Construction', desc: 'Facility construction', image: 'img/service-3.jpg', link: 'solution_detail.html?id=construction-industrial' },
                { title: 'HVAC Systems', desc: 'Industrial climate control', image: 'img/service-4.jpg', link: 'solution_detail.html?id=mechanical-hvac' }
            ]
        },
        'architectural-residential': {
            title: 'Residential Design',
            subtitle: 'Creative and functional architectural designs that bring your dream home to life.',
            overview: 'Our architectural team creates stunning, livable spaces that reflect your personal style and meet your practical needs. From initial concept to final construction documents, we guide you through every step of the design process.',
            image: 'img/service-1.jpg',
            features: [
                { icon: 'fa-solid fa-pen-ruler', title: 'Custom Design', desc: 'Tailored to your lifestyle and preferences' },
                { icon: 'fa-solid fa-swatchbook', title: 'Material Selection', desc: 'Expert guidance on finishes and materials' },
                { icon: 'fa-solid fa-cube', title: '3D Visualization', desc: 'See your home before it is built' }
            ],
            benefits: [
                'Award-winning design team',
                'Sustainable design expertise',
                'Permit and approval assistance',
                'Construction administration'
            ],
            related: [
                { title: 'Residential Construction', desc: 'Build your dream home', image: 'img/service-1.jpg', link: 'solution_detail.html?id=flooring-outdoor' },
                { title: 'Interior Design', desc: 'Beautiful interior spaces', image: 'img/service-6.jpg', link: 'solution_detail.html?id=architectural-interior' }
            ]
        },
        'architectural-commercial': {
            title: 'Commercial Design',
            subtitle: 'Innovative commercial spaces that enhance productivity and brand identity.',
            overview: 'We design commercial environments that inspire, function efficiently, and reflect your brand identity. Our portfolio includes offices, retail spaces, restaurants, hotels, and mixed-use developments.',
            image: 'img/service-2.jpg',
            features: [
                { icon: 'fa-solid fa-chart-line', title: 'Workflow Optimization', desc: 'Spaces designed for productivity' },
                { icon: 'fa-solid fa-palette', title: 'Brand Integration', desc: 'Reflect your brand through design' },
                { icon: 'fa-solid fa-building-user', title: 'Code Compliance', desc: 'Full regulatory adherence' }
            ],
            benefits: [
                'Rapid design turnaround',
                'Value engineering expertise',
                'Sustainability certification',
                'Post-occupancy evaluation'
            ],
            related: [
                { title: 'Commercial Construction', desc: 'Build commercial spaces', image: 'img/service-2.jpg', link: 'solution_detail.html?id=construction-commercial' },
                { title: 'Urban Planning', desc: 'Community development', image: 'img/service-3.jpg', link: 'solution_detail.html?id=architectural-urban' }
            ]
        },
        'architectural-urban': {
            title: 'Urban Planning',
            subtitle: 'Sustainable urban development solutions for thriving communities.',
            overview: 'Our urban planning services create vibrant, sustainable communities through thoughtful design, environmental stewardship, and community engagement. We work with municipalities, developers, and community groups.',
            image: 'img/service-3.jpg',
            features: [
                { icon: 'fa-solid fa-city', title: 'Sustainable Development', desc: 'Eco-friendly urban solutions' },
                { icon: 'fa-solid fa-people-arrows', title: 'Community Focus', desc: 'Designed for people' },
                { icon: 'fa-solid fa-tree', title: 'Green Spaces', desc: 'Integrating nature into urban design' }
            ],
            benefits: [
                'Comprehensive planning expertise',
                'Stakeholder engagement',
                'Regulatory navigation',
                'Long-term sustainability'
            ],
            related: [
                { title: 'Commercial Design', desc: 'Commercial architectural design', image: 'img/service-2.jpg', link: 'solution_detail.html?id=architectural-commercial' },
                { title: 'Residential Design', desc: 'Home architectural design', image: 'img/service-1.jpg', link: 'solution_detail.html?id=architectural-residential' }
            ]
        }
    };

    // Get solution ID from URL
    function getSolutionId() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('id') || 'flooring-outdoor';
    }

    // Load solution data
        function loadSolution() {
            const id = getSolutionId();
            const data = solutionsData[id] || solutionsData['flooring-outdoor'];
            
            // Update title (this element is critical)
            const titleElement = document.getElementById('solution-title');
            if (titleElement) {
                titleElement.textContent = data.title;
            }
            
            // Update subtitle - USE HTML VERSION for display
            const subtitleElement = document.getElementById('solution-subtitle');
            if (subtitleElement) {
                // Use innerHTML for HTML version (supports <br> tags)
                if (data.subtitleHTML) {
                    subtitleElement.innerHTML = data.subtitleHTML;
                } else {
                    subtitleElement.textContent = data.subtitlePlain || data.subtitle;
                }
            }
            
            // Update overview text (if you want line breaks here too)
            const overviewElement = document.getElementById('overview-text');
            if (overviewElement) {
                overviewElement.innerHTML = data.overview;
            }
            
            // Update overview image
            const imageElement = document.getElementById('overview-image');
            if (imageElement) {
                imageElement.src = data.image;
                imageElement.alt = data.title;
            }
            
            // Update breadcrumb - USE PLAIN TEXT version
            const breadcrumbElement = document.getElementById('breadcrumb-solution');
            if (breadcrumbElement) {
                breadcrumbElement.textContent = data.subtitlePlain || data.title;
            }
            
            // Update browser tab title - USE PLAIN TEXT version
            document.title = `${data.title} | WNM Ltd - Innovative Business Solutions`;
            
            // Populate features - THIS WILL ALWAYS WORK
            const featuresGrid = document.getElementById('features-grid');
            if (featuresGrid) {
                featuresGrid.innerHTML = data.features.map(feature => `
                    <div class="feature-item">
                        <div class="feature-icon">
                            <i class="${feature.icon}"></i>
                        </div>
                        <h3>${feature.title}</h3>
                        <p>${feature.desc}</p>
                    </div>
                `).join('');
            }
            
            // Populate benefits - THIS WILL ALWAYS WORK
            const benefitsList = document.getElementById('benefits-list');
            if (benefitsList) {
                benefitsList.innerHTML = data.benefits.map(benefit => `
                    <li>
                        <i class="fas fa-check-circle"></i>
                        <span>${benefit}</span>
                    </li>
                `).join('');
            }
            
            // Populate related solutions
            const relatedGrid = document.getElementById('related-solutions');
            if (relatedGrid && data.related && data.related.length > 0) {
                relatedGrid.innerHTML = data.related.map(related => `
                    <a href="${related.link}" class="related-card">
                        <img src="${related.image}" alt="${related.title}">
                        <div class="related-card-content">
                            <h4>${related.title}</h4>
                            <p>${related.desc}</p>
                        </div>
                    </a>
                `).join('');
            }
        }

        // Load solution when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', loadSolution);
        } else {
            loadSolution();
        }







        
// -------------------------------------------------------------------------
// Get Indoor Flooring ID from URL and Data
// -------------------------------------------------------------------------
         // Get solution ID from URL
    function getIndoorId() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('id') || 'flooring-indoor';
    }

    // Load solution data
        function loadIndoorFlooring() {
            const id = getIndoorId();
            const data = solutionsData[id] || solutionsData['flooring-indoor'];
            
            // Update title (this element is critical)
            const titleElement = document.getElementById('solution-title');
            if (titleElement) {
                titleElement.textContent = data.title;
            }
            
            // Update subtitle - USE HTML VERSION for display
            const subtitleElement = document.getElementById('solution-subtitle');
            if (subtitleElement) {
                // Use innerHTML for HTML version (supports <br> tags)
                if (data.subtitleHTML) {
                    subtitleElement.innerHTML = data.subtitleHTML;
                } else {
                    subtitleElement.textContent = data.subtitlePlain || data.subtitle;
                }
            }
            
            // Update overview text (if you want line breaks here too)
            const overviewElement = document.getElementById('overview-text');
            if (overviewElement) {
                overviewElement.innerHTML = data.overview;
            }
            
            // Update overview image
            const imageElement = document.getElementById('overview-image');
            if (imageElement) {
                imageElement.src = data.image;
                imageElement.alt = data.title;
            }
            
            // Update breadcrumb - USE PLAIN TEXT version
            const breadcrumbElement = document.getElementById('breadcrumb-solution');
            if (breadcrumbElement) {
                breadcrumbElement.textContent = data.subtitlePlain || data.title;
            }
            
            // Update browser tab title - USE PLAIN TEXT version
            document.title = `${data.title} | WNM Ltd - Innovative Business Solutions`;
            
            // Populate features - THIS WILL ALWAYS WORK
            const featuresGrid = document.getElementById('features-grid');
            if (featuresGrid) {
                featuresGrid.innerHTML = data.features.map(feature => `
                    <div class="feature-item">
                        <div class="feature-icon">
                            <i class="${feature.icon}"></i>
                        </div>
                        <h3>${feature.title}</h3>
                        <p>${feature.desc}</p>
                    </div>
                `).join('');
            }
            
            // Populate benefits - THIS WILL ALWAYS WORK
            const benefitsList = document.getElementById('benefits-list');
            if (benefitsList) {
                benefitsList.innerHTML = data.benefits.map(benefit => `
                    <li>
                        <i class="fas fa-check-circle"></i>
                        <span>${benefit}</span>
                    </li>
                `).join('');
            }
            
            // Populate related solutions
            const relatedGrid = document.getElementById('related-solutions');
            if (relatedGrid && data.related && data.related.length > 0) {
                relatedGrid.innerHTML = data.related.map(related => `
                    <a href="${related.link}" class="related-card">
                        <img src="${related.image}" alt="${related.title}">
                        <div class="related-card-content">
                            <h4>${related.title}</h4>
                            <p>${related.desc}</p>
                        </div>
                    </a>
                `).join('');
            }
        }

        // Load Indoor Flooring when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', loadIndoorFlooring);
        } else {
            loadIndoorFlooring();
        }


document.title = `${data.title} | WNM Ltd - Innovative Business Solutions`;

