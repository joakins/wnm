
        // Helper function to strip HTML tags for plain text contexts
        function stripHtml(html) {
            if (!html) return '';
            const temp = document.createElement('div');
            temp.innerHTML = html;
            return temp.textContent || temp.innerText || '';
        }

        // Solution data based on URL parameter
        const solutionsData = {
            // ========== CONSTRUCTION SOLUTIONS ==========
            'flooring-outdoor': {
                title: 'Outdoor Flooring',
                subtitle: 'Building dream edifice with precision, quality materials<br> and attention to every detail.',
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
                        desc: 'Requires minimal cleaning and upkeep, reducing long-term maintenance costs while maintaining a clean and professional outdoor appearance.' },
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
                        desc: 'Indoor raised flooring systems provide flexible and efficient solutions for', 
                        image: 'images/solutions/indoorFlooring.jpg',
                        link: 'solutionDetail.html?id=flooring-indoor' 
                    },
                    { 
                        title: 'Wood Plastic Composit', 
                        desc: 'Wood Plastic Composite flooring combines the natural look of wood...', 
                        image: 'images/solutions/wpc.jpg',
                        link: 'solutionDetail.html?id=wood-plastic' 
                    },
                    {   title: 'Ceramic Tiles', 
                        desc: 'Durable, stylish surfaces for modern flooring applications', 
                        image: 'images/solutions/ceramicTiles.jpg',
                        link: 'solutionDetail.html?id=tiles-ceramic' 
                    }
                ]
            },
            
            'flooring-indoor': {
                title: 'Indoor Flooring',
                subtitle: 'We deliver exceptional Indoor Raised Floors for offices,<br> retail centers, and mixed-use developments.',
                overview: 'Indoor raised flooring systems provide flexible and efficient solutions for modern interior spaces. Designed for offices, data centers, and commercial buildings, they enable easy cable management, improved airflow, and adaptability to evolving infrastructure needs.',
                image: 'images/solutions/indoorFlooring.jpg',
                features: [
                    { 
                        icon: 'fa-solid fa-building', 
                        title: 'Cable Management System', 
                        desc: 'Creates an underfloor space for organized routing of cables and utilities, reducing clutter and improving accessibility for maintenance and future upgrades.' 
                    },
                    { 
                        icon: 'fa-solid fa-chart-simple', 
                        title: 'Modular Design', 
                        desc: 'Panels can be easily removed and reinstalled, allowing quick access to underlying systems without disrupting the entire floor structure.' 
                    },
                    { 
                        icon: 'fa-solid fa-helmet-safety', 
                        title: 'Improved Airflow', 
                        desc: 'Enhances ventilation and cooling efficiency by enabling controlled airflow beneath the floor, ideal for data centers and technical environments.' 
                    },
                    { 
                        icon: 'fa-solid fa-code-branch', 
                        title: 'Structural Stability', 
                        desc: 'Engineered for strength and durability, ensuring consistent performance under heavy loads such as office equipment and server racks.' 
                    },
                    { 
                        icon: 'fa-solid fa-clock', 
                        title: 'Acoustic Performance', 
                        desc: 'Reduces noise transmission within interior spaces, creating a quieter and more comfortable working environment.' 
                    },
                    { 
                        icon: 'fa-solid fa-handshake', 
                        title: 'Flexible Layout Adaptation', 
                        desc: 'Supports changing workspace configurations, allowing easy reconfiguration without costly structural modifications.' 
                    }
                ],
                benefits: [
                    '15+ commercial projects completed successfully',
                    'Zero safety incidents record',
                    'Flexible working arrangements during construction',
                    'LEED certified team members',
                    'Post-construction support and maintenance',
                    'Competitive pricing with transparent quotes'
                ],
                related: [
                    { 
                        title: 'Wood Plastic Composit', 
                        desc: 'Wood Plastic Composite flooring combines the natural look of wood...', 
                        image: 'images/solutions/wpc.jpg',
                        link: 'solutionDetail.html?id=wood-plastic' 
                    },
                    {   title: 'Ceramic Tiles', 
                        desc: 'Durable, stylish surfaces for modern flooring applications', 
                        image: 'images/solutions/ceramicTiles.jpg',
                        link: 'solutionDetail.html?id=tiles-ceramic' 
                    },
                    { 
                        title: 'Outdoor Flooring', 
                        desc: 'Building dream edifice with precision, quality materials and attention to...', 
                        image: 'images/solutions/outdoorFlooring.jpg',
                        link: 'solutionDetail.html?id=flooring-outdoor' 
                    },
                ]
            },
            
            'wood-plastic': {
                title: 'Wood Plastic Composit',
                subtitle: 'Wood Plastic Composite flooring combines the natural look of wood with the <br> durability of modern materials.',
                overview: 'Wood Plastic Composite flooring combines the natural look of wood with the durability of modern materials. It offers a sustainable, moisture-resistant solution suitable for both indoor and outdoor applications, delivering long-lasting performance with minimal maintenance requirements.',
                image: 'images/solutions/wpc.jpg',
                features: [
                    { 
                        icon: 'fa-solid fa-industry', 
                        title: 'Eco-Friendly Composition', 
                        desc: 'Manufactured using recycled wood fibers and plastics, reducing environmental impact while providing a sustainable alternative to traditional timber flooring.' 
                    },
                    { 
                        icon: 'fa-solid fa-gear', 
                        title: 'Moisture Resistance', 
                        desc: 'Highly resistant to water absorption, preventing swelling, rotting, or mold growth in humid or wet conditions.' 
                    },
                    { 
                        icon: 'fa-solid fa-charging-station', 
                        title: 'Natural Aesthetic Appeal', 
                        desc: 'Replicates the appearance of real wood, delivering a warm and elegant finish without the drawbacks of traditional wood materials.' 
                    },
                    { 
                        icon: 'fa-solid fa-people-carry-box', 
                        title: 'Durability and Longevity', 
                        desc: 'Resistant to wear, insects, and environmental damage, ensuring extended lifespan and consistent performance over time.' 
                    },
                    { 
                        icon: 'fa-solid fa-helmet-safety', 
                        title: 'Low Maintenance Requirements', 
                        desc: 'Does not require painting, staining, or sealing, making it easy to maintain while preserving its appearance.' 
                    },
                    { 
                        icon: 'fa-solid fa-expand', 
                        title: 'Anti-Slip Surface', 
                        desc: 'Provides enhanced traction, improving safety for both residential and commercial applications.' 
                    }
                ],
                benefits: [
                    'Advanced industrial construction expertise',
                    'Minimal operational disruption during construction',
                    'Comprehensive safety protocols and compliance',
                    'Long-term durability guarantee',
                    'Custom solutions for specific industry needs',
                    'Experienced project management team'
                ],
                related: [
                    { 
                        title: 'Indoor Flooring', 
                        desc: 'Indoor raised flooring systems provide flexible and efficient solutions for', 
                        image: 'images/solutions/indoorFlooring.jpg',
                        link: 'solutionDetail.html?id=flooring-indoor' 
                    },
                    {   title: 'Ceramic Tiles', 
                        desc: 'Durable, stylish surfaces for modern flooring applications', 
                        image: 'images/solutions/ceramicTiles.jpg',
                        link: 'solutionDetail.html?id=tiles-ceramic' 
                    },
                    { 
                        title: 'Outdoor Flooring', 
                        desc: 'Building dream edifice with precision, quality materials and attention to...', 
                        image: 'images/solutions/outdoorFlooring.jpg',
                        link: 'solutionDetail.html?id=flooring-outdoor' 
                    },
                ]
            },
            
            // Add other solutions here (mechanical-hvac, mechanical-plumbing, etc.)
            'tiles-ceramic': {
                title: 'Ceramic Tiles',
                subtitle: 'Durable, stylish surfaces for modern flooring applications',
                overview: 'Ceramic tiles provide a versatile and durable flooring solution suitable for a wide range of indoor environments. Known for their strength and aesthetic flexibility, they are widely used in residential, commercial, and industrial spaces. <br><br> Their resistance to moisture, stains, and wear makes them ideal for high-traffic areas. With various finishes and designs available, ceramic tiles combine functionality with visual appeal, delivering long-lasting performance and easy maintenance.',
                image: 'images/solutions/ceramicTiles.jpg',
                features: [
                    { 
                        icon: 'fa-solid fa-wind', 
                        title: 'High Durability', 
                        desc: 'Engineered to withstand heavy usage and foot traffic, ceramic tiles maintain structural integrity and surface quality over time, making them suitable for both residential and commercial flooring applications.' 
                    },
                    { 
                        icon: 'fa-solid fa-temperature-low', 
                        title: 'Moisture Resistance', 
                        desc: 'Non-porous surfaces prevent water absorption, reducing the risk of damage, staining, or mold growth in areas exposed to moisture or humidity.' 
                    },
                    { 
                        icon: 'fa-solid fa-filter', 
                        title: 'Easy Maintenance', 
                        desc: 'Requires minimal cleaning effort, as dirt and stains can be easily removed, helping maintain a clean and polished appearance with minimal upkeep.' 
                    },
                    { 
                        icon: 'fa-solid fa-clock', 
                        title: 'Aesthetic Versatility', 
                        desc: 'Available in a wide variety of colors, textures, and patterns, allowing flexible design options to suit different architectural and interior styles.' 
                    },
                    { 
                        icon: 'fa-solid fa-chart-line', 
                        title: 'Scratch Resistance', 
                        desc: 'Hard surface composition resists scratches and abrasions, preserving the tile’s appearance even in high-traffic or demanding environments.' 
                    },
                    { 
                        icon: 'fa-solid fa-leaf', 
                        title: 'Fire Resistance', 
                        desc: 'Naturally resistant to heat and fire, enhancing safety in buildings and making it a reliable flooring option in diverse settings.' 
                    }
                ],
                benefits: [
                    'Certified HVAC technicians',
                    '24/7 emergency service availability',
                    'Energy savings up to 30%',
                    'Extended equipment lifespan',
                    'Preventive maintenance plans',
                    'Free system assessment'
                ],
                related: [
                    { 
                        title: 'Outdoor Flooring', 
                        desc: 'Building dream edifice with precision, quality materials and attention to...', 
                        image: 'images/solutions/outdoorFlooring.jpg',
                        link: 'solutionDetail.html?id=flooring-outdoor' 
                    },
                    { 
                        title: 'Indoor Flooring', 
                        desc: 'Indoor raised flooring systems provide flexible and efficient solutions for', 
                        image: 'images/solutions/indoorFlooring.jpg',
                        link: 'solutionDetail.html?id=flooring-indoor' 
                    },
                    {   title: 'GRP (Glass Reinforced Plastic)', 
                        desc: 'Lightweight, high-strength material for demanding environments', 
                        image: 'images/solutions/grp.jpg',
                        link: 'solutionDetail.html?id=glass-reinforced' 
                    },
                    
                ]
            },
            
            'glass-reinforced': {
                title: 'GRP (Glass Reinforced Plastic)',
                subtitle: 'Lightweight, high-strength material for demanding environments',
                overview: 'GRP (Glass Reinforced Plastic) is a composite material known for its exceptional strength-to-weight ratio and corrosion resistance. It is widely used in construction and industrial applications where durability and lightweight properties are essential. <br> <br >Its non-corrosive nature makes it ideal for environments exposed to chemicals, moisture, or extreme weather conditions. GRP solutions offer long-lasting performance, reduced maintenance, and flexibility in design, making them a preferred alternative to traditional materials.',
                image: 'images/solutions/grp.jpg',
                features: [
                    { 
                        icon: 'fa-solid fa-water', 
                        title: 'Corrosion Resistance', 
                        desc: 'Unaffected by moisture, chemicals, or harsh environmental conditions, ensuring long-term durability without rusting or degradation, especially in industrial or coastal environments.' 
                    },
                    { 
                        icon: 'fa-solid fa-magnifying-glass', 
                        title: 'Lightweight Structure', 
                        desc: 'Easier to transport and install compared to traditional materials, reducing labor costs and improving overall project efficiency without compromising strength.' 
                    },
                    { 
                        icon: 'fa-solid fa-leaf', 
                        title: 'High Strength-to-Weight Ratio', 
                        desc: 'Offers exceptional structural performance while remaining lightweight, making it suitable for demanding applications requiring both durability and efficiency.' 
                    },
                    { 
                        icon: 'fa-solid fa-bolt', 
                        title: 'Low Maintenance', 
                        desc: 'Requires minimal upkeep due to its resistance to environmental damage, helping reduce operational and maintenance costs over time.' 
                    },
                    { 
                        icon: 'fa-solid fa-chart-line', 
                        title: 'Non-Conductive Properties', 
                        desc: 'Provides electrical and thermal insulation, enhancing safety in environments where conductivity could pose a risk.' 
                    },
                    { 
                        icon: 'fa-solid fa-shield-alt', 
                        title: 'Design Flexibility', 
                        desc: 'Can be molded into various shapes and sizes, allowing customized solutions to meet specific project requirements.' 
                    }
                ],
                benefits: [
                    'Licensed and insured plumbers',
                    'Emergency repair service available 24/7',
                    'Quality workmanship guarantee',
                    'Competitive pricing with transparent quotes',
                    'Free estimates and consultations',
                    'Eco-friendly solutions'
                ],
                related: [
                    { 
                        title: 'Wood Plastic Composit', 
                        desc: 'Wood Plastic Composite flooring combines the natural look of wood...', 
                        image: 'images/solutions/wpc.jpg',
                        link: 'solutionDetail.html?id=wood-plastic' 
                    },
                    {   title: 'Ceramic Tiles', 
                        desc: 'Durable, stylish surfaces for modern flooring applications', 
                        image: 'images/solutions/ceramicTiles.jpg',
                        link: 'solutionDetail.html?id=tiles-ceramic' 
                    },
                    { 
                        title: 'Outdoor Flooring', 
                        desc: 'Building dream edifice with precision, quality materials and attention to...', 
                        image: 'images/solutions/outdoorFlooring.jpg',
                        link: 'solutionDetail.html?id=flooring-outdoor' 
                    },
                ]
            },
            

            //COMPOSITES & CONSTRUCTION RELATED
            'profiles-grp': {
                title: 'GRP Profiles',
                subtitle: 'Customizable structural profiles for versatile <br> construction applications.',
                overview: 'GRP profiles are engineered structural components made from glass reinforced plastic, designed for strength, durability, and versatility. They are widely used in construction, infrastructure, and industrial projects requiring lightweight yet robust materials. <br> <br> These profiles offer excellent resistance to corrosion and environmental factors, making them suitable for both indoor and outdoor applications. Their adaptability allows them to be used in platforms, walkways, supports, and frameworks.',
                image: 'images/solutions/grpProfiles.jpg',
                features: [
                    { 
                        icon: 'fa-solid fa-robot', 
                        title: 'Corrosion Resistance', 
                        desc: 'Resistant to rust, chemicals, and environmental exposure, ensuring long-term reliability in challenging conditions such as marine or industrial environments.' 
                    },
                    { 
                        icon: 'fa-solid fa-chart-line', 
                        title: 'Lightweight Design', 
                        desc: 'Simplifies handling and installation processes, reducing construction time and associated labor costs without sacrificing performance.' 
                    },
                    { 
                        icon: 'fa-solid fa-microchip', 
                        title: 'Structural Strength', 
                        desc: 'Provides reliable load-bearing capacity, ensuring safety and durability in structural and support applications.' 
                    },
                    { 
                        icon: 'fa-solid fa-wrench', 
                        title: 'Low Maintenance Needs', 
                        desc: 'Minimal upkeep required due to resistance to wear and environmental damage, lowering long-term operational costs.' 
                    },
                    { 
                        icon: 'fa-solid fa-charging-station', 
                        title: 'Non-Conductive Nature', 
                        desc: 'Enhances safety by preventing electrical conductivity, making it ideal for use in sensitive or hazardous environments.' 
                    },
                    { 
                        icon: 'fa-solid fa-headset', 
                        title: 'Custom Fabrication', 
                        desc: 'Easily tailored to specific dimensions and shapes, enabling flexible design and application across various projects.' 
                    }
                ],
                benefits: [
                    '24/7 technical support availability',
                    'OEM-certified technicians',
                    'Reduced equipment downtime significantly',
                    'Extended machinery lifespan',
                    'Custom maintenance schedules',
                    'Emergency repair response team'
                ],
                related: [
                    { 
                        title: 'Manhole Covers', 
                        desc: 'Heavy-duty covers for secure underground access systems', 
                        image: 'images/solutions/mhc.jpg',
                        link: 'solutionDetail.html?id=covers-manhole' 
                    },
                    { 
                        title: 'Manlock bolts', 
                        desc: 'Industrial climate control', 
                        image: 'images/solutions/manlockBolts.jpg',
                        link: 'solutionDetail.html?id=manlock-bolts' 
                    }
                ]
            },
            
            'covers-manhole': {
                title: 'Manhole Covers',
                subtitle: 'Heavy-duty covers for secure underground access systems',
                overview: 'Manhole covers are essential components used to provide secure access to underground utility systems such as drainage, sewage, and electrical networks. They are designed to ensure safety while allowing maintenance access when needed. <br> <br> Constructed from durable materials, these covers are built to withstand heavy loads and harsh environmental conditions. Their design prioritizes safety, longevity, and reliability in both urban and industrial environments.',
                image: 'images/solutions/mhc.jpg',
                features: [
                    { 
                        icon: 'fa-solid fa-pen-ruler', 
                        title: 'High Load Capacity', 
                        desc: 'Engineered to withstand heavy vehicular and pedestrian loads, ensuring durability and safety in high-traffic areas such as roads and industrial zones.' 
                    },
                    { 
                        icon: 'fa-solid fa-swatchbook', 
                        title: 'Anti-Slip Surface', 
                        desc: 'Textured design enhances traction, reducing the risk of slips and accidents, especially in wet or hazardous conditions.' 
                    },
                    { 
                        icon: 'fa-solid fa-cube', 
                        title: 'Corrosion Resistance', 
                        desc: 'Resistant to environmental damage, ensuring long-term performance even in harsh weather or chemically exposed environments.' 
                    },
                    { 
                        icon: 'fa-solid fa-chart-line', 
                        title: 'Secure Locking Mechanism', 
                        desc: 'Prevents unauthorized access and enhances safety by securely covering underground systems.' 
                    },
                    { 
                        icon: 'fa-solid fa-leaf', 
                        title: 'Long Service Life', 
                        desc: 'Durable construction ensures extended lifespan, reducing replacement frequency and overall maintenance costs.' 
                    },
                    { 
                        icon: 'fa-solid fa-handshake', 
                        title: 'Easy Installation', 
                        desc: 'Designed for efficient placement and removal, simplifying maintenance operations and reducing downtime.' 
                    }
                ],
                benefits: [
                    'Award-winning design team',
                    'Sustainable design expertise',
                    'Permit and approval assistance',
                    'Construction administration services',
                    '3D renderings and walkthroughs',
                    'Material and vendor recommendations'
                ],
                related: [
                    { 
                        title: 'GRP Profiles', 
                        desc: 'Customizable structural profiles for versatile construction applications', 
                        image: 'images/solutions/grpProfiles.jpg',
                        link: 'solutionDetail.html?id=profiles-grp' 
                    },
                    { 
                        title: 'Manlock bolts', 
                        desc: 'Secure fastening solutions for critical infrastructure applications', 
                        image: 'images/solutions/manlockBolts.jpg',
                        link: 'solutionDetail.html?id=manlock-bolts' 
                    }
                ]
            },
            
            'manlock-bolts': {
                title: 'Manlock bolts',
                subtitle: 'Secure fastening solutions for critical infrastructure <br> applications.',
                overview: 'Manlock bolts are specialized fastening components designed to secure manhole covers and similar infrastructure elements. They provide enhanced safety by preventing unauthorized access and ensuring structural stability. <br> <br> Built for durability and reliability, these bolts are resistant to tampering and environmental conditions. They play a critical role in maintaining the integrity and security of underground systems..',
                image: 'images/solutions/manlockBolts.jpg',
                features: [
                    { 
                        icon: 'fa-solid fa-chart-line', 
                        title: 'Tamper-Resistant Design', 
                        desc: 'Prevents unauthorized removal or interference, enhancing security and protecting critical infrastructure components from vandalism or theft.' 
                    },
                    { 
                        icon: 'fa-solid fa-palette', 
                        title: 'High Strength Material', 
                        desc: 'Manufactured from durable materials to withstand stress and environmental exposure, ensuring long-lasting performance.' 
                    },
                    { 
                        icon: 'fa-solid fa-building-user', 
                        title: 'Corrosion Resistance', 
                        desc: 'Resistant to rust and environmental degradation, maintaining functionality even in harsh outdoor conditions.' 
                    },
                    { 
                        icon: 'fa-solid fa-cube', 
                        title: 'Secure Fastening', 
                        desc: 'Provides firm and reliable locking, ensuring that manhole covers remain safely in place under various conditions.' 
                    },
                    { 
                        icon: 'fa-solid fa-leaf', 
                        title: 'Easy Maintenance Access', 
                        desc: 'Allows authorized personnel to access secured systems efficiently without compromising security.' 
                    },
                    { 
                        icon: 'fa-solid fa-chart-simple', 
                        title: 'Long-Term Reliability', 
                        desc: 'Engineered for consistent performance over time, reducing the need for frequent replacements or repairs.' 
                    }
                ],
                benefits: [
                    'Rapid design turnaround time',
                    'Value engineering expertise',
                    'Sustainability certification assistance',
                    'Post-occupancy evaluation',
                    'Construction documentation',
                    'Bidding and contractor coordination'
                ],
                related: [
                    { 
                        title: 'Manhole Covers', 
                        desc: 'Heavy-duty covers for secure underground access systems', 
                        image: 'images/solutions/mhc.jpg',
                        link: 'solutionDetail.html?id=covers-manhole' 
                    },
                    { 
                        title: 'GRP Profiles', 
                        desc: 'Customizable structural profiles for versatile construction applications', 
                        image: 'images/solutions/grpProfiles.jpg',
                        link: 'solutionDetail.html?id=profiles-grp' 
                    }
                ]
            },
            
            'architectural-urban': {
                title: 'Urban Planning',
                subtitle: 'Sustainable urban development solutions<br> for thriving communities.',
                overview: 'Our urban planning services create vibrant, sustainable communities through thoughtful design, environmental stewardship, and community engagement. We work with municipalities, developers, and community groups.',
                image: 'img/service-3.jpg',
                features: [
                    { icon: 'fa-solid fa-city', title: 'Sustainable Development', desc: 'Eco-friendly urban solutions' },
                    { icon: 'fa-solid fa-people-arrows', title: 'Community Focus', desc: 'Designed for people' },
                    { icon: 'fa-solid fa-tree', title: 'Green Spaces', desc: 'Integrating nature into urban design' },
                    { icon: 'fa-solid fa-chart-line', title: 'Master Planning', desc: 'Comprehensive development strategies' },
                    { icon: 'fa-solid fa-code-branch', title: 'Infrastructure Design', desc: 'Roads, utilities, and public spaces' },
                    { icon: 'fa-solid fa-chart-simple', title: 'Economic Analysis', desc: 'Feasibility and impact studies' }
                ],
                benefits: [
                    'Comprehensive planning expertise',
                    'Stakeholder engagement and facilitation',
                    'Regulatory navigation and approvals',
                    'Long-term sustainability focus',
                    'Public-private partnership experience',
                    'Environmental impact assessment'
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
            const data = solutionsData[id];
            
            // If data doesn't exist, show error or fallback
            if (!data) {
                console.error('Solution not found:', id);
                document.getElementById('solution-title').textContent = 'Solution Not Found';
                document.getElementById('solution-subtitle').innerHTML = 'The requested solution could not be found.';
                document.getElementById('overview-text').innerHTML = 'Please check the URL or return to our <a href="our_solution.html">solutions page</a>.';
                return;
            }
            
            // Update page title (browser tab)
            document.title = `${data.title} | WNM Ltd - Innovative Business Solutions`;
            
            // Update main title
            const titleElement = document.getElementById('solution-title');
            if (titleElement) {
                titleElement.textContent = data.title;
            }
            
            // Update subtitle - supports HTML <br> tags
            const subtitleElement = document.getElementById('solution-subtitle');
            if (subtitleElement) {
                subtitleElement.innerHTML = data.subtitle;
            }
            
            // Update overview text
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
            
            // Update breadcrumb - uses plain text (strips HTML tags)
            const breadcrumbElement = document.getElementById('breadcrumb-solution');
            if (breadcrumbElement) {
                breadcrumbElement.textContent = stripHtml(data.subtitle);
            }
            
            // Populate features
            const featuresGrid = document.getElementById('features-grid');
            if (featuresGrid && data.features) {
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
            
            // Populate benefits
            const benefitsList = document.getElementById('benefits-list');
            if (benefitsList && data.benefits) {
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
                        <img src="${related.image}" alt="${related.title}" onerror="this.src='img/placeholder.jpg'">
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
  