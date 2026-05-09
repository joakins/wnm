// Projects data
const projectsData = [
    {
        id: 'project-001',
        title: 'Lekki Innovation Hub Construction',
        client: 'Tech Innovation Africa Ltd',
        category: 'construction',
        year: 2024,
        image: 'images/projects/lekki-hub.jpg',
        shortDesc: 'Complete infrastructure development for a modern tech hub with state-of-the-art facilities',
        description: 'Comprehensive construction project involving the development of a 5-story innovation hub facility featuring flexible office spaces, collaborative areas, and cutting-edge infrastructure.',
        challenge: 'The project required coordination between multiple contractors and strict adherence to project timeline while maintaining safety standards in an active commercial area.',
        solution: 'We implemented a comprehensive project management system with daily progress tracking, weekly coordination meetings, and a dedicated safety team.',
        results: 'Project completed 2 weeks ahead of schedule with zero safety incidents and 98% client satisfaction.',
        duration: '18 months',
        solutionType: 'Construction Management',
        location: 'Lekki, Lagos',
        status: 'Completed',
        achievements: [
            'Zero safety incidents throughout project duration',
            '2 weeks ahead of schedule',
            '98% client satisfaction rating',
            'LEED Silver certification achieved',
            'Employed 150+ workers'
        ],
        gallery: [
            'images/projects/lekki-hub-1.jpg',
            'images/projects/lekki-hub-2.jpg',
            'images/projects/lekki-hub-3.jpg',
            'images/projects/lekki-hub-4.jpg'
        ],
        relatedProjects: ['project-003', 'project-005']
    },
    {
        id: 'project-002',
        title: 'VI Commercial Complex - HVAC Installation',
        client: 'Urban Properties Development',
        category: 'mechanical',
        year: 2023,
        image: 'images/projects/vi-complex.jpg',
        shortDesc: 'Advanced HVAC system installation in a premium commercial complex',
        description: 'Installation of state-of-the-art HVAC systems in a 12-story commercial complex with advanced energy management and automation features.',
        challenge: 'The building was partially occupied during installation, requiring careful scheduling and minimal disruption to ongoing business operations.',
        solution: 'We implemented a phased installation approach with night and weekend work schedules to minimize impact on tenants.',
        results: 'Successfully completed installation with 30% energy efficiency improvement and zero operational disruptions.',
        duration: '12 months',
        solutionType: 'HVAC Systems',
        location: 'Victoria Island, Lagos',
        status: 'Completed',
        achievements: [
            '30% energy efficiency improvement',
            'Zero operational disruptions',
            'Advanced automation features',
            'Reduced operational costs by ₦2.5M annually',
            'Smart building integration'
        ],
        gallery: [
            'images/projects/vi-complex-1.jpg',
            'images/projects/vi-complex-2.jpg',
            'images/projects/vi-complex-3.jpg',
            'images/projects/vi-complex-4.jpg'
        ],
        relatedProjects: ['project-004', 'project-006']
    },
    {
        id: 'project-003',
        title: 'Port Authority Flooring Rehabilitation',
        client: 'Nigeria Ports Authority',
        category: 'infrastructure',
        year: 2024,
        image: 'images/projects/port-flooring.jpg',
        shortDesc: 'Large-scale industrial flooring rehabilitation using advanced composite materials',
        description: 'Complete flooring rehabilitation of port facilities covering 50,000 sq meters using GRP and composite materials for superior durability and safety.',
        challenge: 'Project required working in an active port environment with strict operational constraints and minimal downtime allowance.',
        solution: 'We coordinated with port management to schedule work during low-traffic periods and used fast-curing materials for minimal disruption.',
        results: 'Successfully rehabilitated all facilities with enhanced durability and improved safety standards.',
        duration: '9 months',
        solutionType: 'Composite Flooring',
        location: 'Apapa Port, Lagos',
        status: 'Completed',
        achievements: [
            '50,000 sq meters rehabilitated',
            'Zero downtime for port operations',
            '99.5% durability rating',
            'Enhanced safety standards met',
            'Cost savings of ₦4M'
        ],
        gallery: [
            'images/projects/port-flooring-1.jpg',
            'images/projects/port-flooring-2.jpg',
            'images/projects/port-flooring-3.jpg',
            'images/projects/port-flooring-4.jpg'
        ],
        relatedProjects: ['project-001', 'project-007']
    },
    {
        id: 'project-004',
        title: 'Marina Pontoon Jetty Installation',
        client: 'Lekki Marina Development',
        category: 'marine',
        year: 2023,
        image: 'images/projects/marina-jetty.jpg',
        shortDesc: 'Custom-designed floating pontoon jetty system for premium yacht marina',
        description: 'Design and installation of modular floating pontoon jetty system accommodating 50+ vessels with advanced mooring systems.',
        challenge: 'Installation in challenging marine conditions with strict environmental compliance requirements.',
        solution: 'Deployed experienced marine engineering team with specialized equipment and phased installation approach.',
        results: 'Successfully installed fully functional marina facility exceeding client expectations.',
        duration: '14 months',
        solutionType: 'Marine Solutions',
        location: 'Lekki, Lagos',
        status: 'Completed',
        achievements: [
            '50+ vessel capacity',
            'Advanced mooring systems',
            'Environmental compliance achieved',
            'On-time delivery',
            'Client satisfaction: 99%'
        ],
        gallery: [
            'images/projects/marina-jetty-1.jpg',
            'images/projects/marina-jetty-2.jpg',
            'images/projects/marina-jetty-3.jpg',
            'images/projects/marina-jetty-4.jpg'
        ],
        relatedProjects: ['project-008', 'project-002']
    },
    {
        id: 'project-005',
        title: 'Epe Industrial Park Infrastructure',
        client: 'Epe Industrial Consortium',
        category: 'infrastructure',
        year: 2023,
        image: 'images/projects/epe-park.jpg',
        shortDesc: 'Comprehensive industrial park development with utilities and access control',
        description: 'Full infrastructure development including roads, utilities, and integrated access control systems for 200-hectare industrial park.',
        challenge: 'Large-scale project requiring coordination across multiple contractors and stakeholders.',
        solution: 'Implemented integrated project management platform with real-time monitoring and coordination.',
        results: 'Successfully completed park with all facilities operational and ready for tenants.',
        duration: '24 months',
        solutionType: 'Infrastructure Development',
        location: 'Epe, Lagos',
        status: 'Completed',
        achievements: [
            '200 hectares developed',
            'All utilities installed',
            'Access control system integrated',
            '50+ industrial units leased',
            'On budget completion'
        ],
        gallery: [
            'images/projects/epe-park-1.jpg',
            'images/projects/epe-park-2.jpg',
            'images/projects/epe-park-3.jpg',
            'images/projects/epe-park-4.jpg'
        ],
        relatedProjects: ['project-003', 'project-009']
    },
    {
        id: 'project-006',
        title: 'BRT Terminal Mechanical Systems',
        client: 'Lagos Metropolitan Transportation',
        category: 'mechanical',
        year: 2022,
        image: 'images/projects/brt-terminal.jpg',
        shortDesc: 'Complete mechanical systems installation for modern BRT terminal',
        description: 'Installation of comprehensive mechanical systems including HVAC, plumbing, and automated controls in state-of-the-art BRT terminal.',
        challenge: 'Project required compliance with strict transportation safety standards and minimal disruption to ongoing transport operations.',
        solution: 'Implemented staged installation with temporary systems maintaining service during upgrade.',
        results: 'Terminal now operational with world-class mechanical systems and zero service interruptions.',
        duration: '10 months',
        solutionType: 'Mechanical Installation',
        location: 'Lekki, Lagos',
        status: 'Completed',
        achievements: [
            'World-class systems installed',
            'Zero service interruptions',
            'Energy efficient design',
            'Handles 50,000+ daily passengers',
            'Safety standards exceeded'
        ],
        gallery: [
            'images/projects/brt-1.jpg',
            'images/projects/brt-2.jpg',
            'images/projects/brt-3.jpg',
            'images/projects/brt-4.jpg'
        ],
        relatedProjects: ['project-002', 'project-010']
    },
    {
        id: 'project-007',
        title: 'Ikoyi Residential Building Construction',
        client: 'Prime Estates Ltd',
        category: 'construction',
        year: 2024,
        image: 'images/projects/ikoyi-residential.jpg',
        shortDesc: 'Luxury residential complex with premium finishing and modern amenities',
        description: 'Construction of 15-story luxury residential building featuring 80 units, state-of-the-art amenities, and smart building features.',
        challenge: 'High-end finishing requirements and strict timeline on prestigious residential property.',
        solution: 'Dedicated quality control team with premium material sourcing and expert craftsmanship.',
        results: '95% of units pre-leased before completion with exceptional quality ratings.',
        duration: '20 months',
        solutionType: 'Residential Construction',
        location: 'Ikoyi, Lagos',
        status: 'Completed',
        achievements: [
            '80 luxury units delivered',
            '95% pre-leased before completion',
            'Smart building features',
            'Premium finishing quality',
            'Award-winning design'
        ],
        gallery: [
            'images/projects/ikoyi-1.jpg',
            'images/projects/ikoyi-2.jpg',
            'images/projects/ikoyi-3.jpg',
            'images/projects/ikoyi-4.jpg'
        ],
        relatedProjects: ['project-001', 'project-011']
    },
    {
        id: 'project-008',
        title: 'Lagos Island Manhole Covers Replacement',
        client: 'Lagos Waste Management Board',
        category: 'infrastructure',
        year: 2023,
        image: 'images/projects/manhole-covers.jpg',
        shortDesc: 'Large-scale replacement of utility access covers with advanced composite materials',
        description: 'Replacement of 2,000+ manhole covers across Lagos Island with GRP composite covers for improved durability and safety.',
        challenge: 'City-wide project requiring coordination with multiple utilities and minimal traffic disruption.',
        solution: 'Phased approach with community coordination and dedicated traffic management teams.',
        results: 'All covers replaced with zero accidents and improved street safety.',
        duration: '12 months',
        solutionType: 'Infrastructure Upgrades',
        location: 'Lagos Island, Lagos',
        status: 'Completed',
        achievements: [
            '2,000+ covers replaced',
            'Zero accidents during project',
            'Improved street safety',
            'GRP durability advantage',
            'Community satisfaction'
        ],
        gallery: [
            'images/projects/manhole-1.jpg',
            'images/projects/manhole-2.jpg',
            'images/projects/manhole-3.jpg',
            'images/projects/manhole-4.jpg'
        ],
        relatedProjects: ['project-003', 'project-005']
    },
    {
        id: 'project-009',
        title: 'Lagos Eko Atlantic City Infrastructure',
        client: 'Eko Atlantic Development Co.',
        category: 'construction',
        year: 2023,
        image: 'images/projects/eko-atlantic.jpg',
        shortDesc: 'Mega project infrastructure for Africa\'s premier waterfront development',
        description: 'Infrastructure development supporting Africa\'s largest waterfront development including utilities, roads, and building systems.',
        challenge: 'Complex mega-project requiring coordination across multiple phases and international standards.',
        solution: 'State-of-the-art project management with BIM technology and advanced coordination systems.',
        results: 'Successfully delivered major infrastructure milestone with international recognition.',
        duration: '30 months',
        solutionType: 'Mega Project Development',
        location: 'Victoria Island, Lagos',
        status: 'Completed',
        achievements: [
            'International standards met',
            'BIM technology implemented',
            'Multi-phase coordination',
            'Award-winning infrastructure',
            'Sustainable design features'
        ],
        gallery: [
            'images/projects/eko-atlantic-1.jpg',
            'images/projects/eko-atlantic-2.jpg',
            'images/projects/eko-atlantic-3.jpg',
            'images/projects/eko-atlantic-4.jpg'
        ],
        relatedProjects: ['project-005', 'project-004']
    },
    {
        id: 'project-010',
        title: 'Corporate Access Control System Implementation',
        client: 'Zenith Bank Plc',
        category: 'mechanical',
        year: 2024,
        image: 'images/projects/access-control.jpg',
        shortDesc: 'Advanced CyberLock access control system installation across 15 facilities',
        description: 'Implementation of enterprise-wide CyberLock access control system across 15 banking facilities with centralized management.',
        challenge: 'Critical infrastructure requiring zero downtime and stringent security protocols.',
        solution: 'Phased implementation with parallel systems and extensive security training.',
        results: 'System operational across all facilities with 99.9% uptime and enhanced security.',
        duration: '8 months',
        solutionType: 'Security Systems',
        location: 'Multiple Locations',
        status: 'Completed',
        achievements: [
            '15 facilities secured',
            '99.9% system uptime',
            'Enhanced security protocols',
            'Centralized management',
            'Employee training completed'
        ],
        gallery: [
            'images/projects/access-1.jpg',
            'images/projects/access-2.jpg',
            'images/projects/access-3.jpg',
            'images/projects/access-4.jpg'
        ],
        relatedProjects: ['project-006', 'project-002']
    },
    {
        id: 'project-011',
        title: 'Gbagada Commercial Complex Development',
        client: 'Gbagada Developments Ltd',
        category: 'construction',
        year: 2023,
        image: 'images/projects/gbagada-complex.jpg',
        shortDesc: 'Mixed-use commercial complex with retail, office, and restaurant spaces',
        description: 'Development of 8-story mixed-use commercial complex featuring retail outlets, premium office spaces, and fine dining establishments.',
        challenge: 'Mixed-use project with diverse tenant requirements and complex coordination needs.',
        solution: 'Flexible modular design approach with pre-fitted tenant spaces.',
        results: '100% occupancy achieved within 6 months of completion.',
        duration: '18 months',
        solutionType: 'Commercial Development',
        location: 'Gbagada, Lagos',
        status: 'Completed',
        achievements: [
            '100% occupancy achieved',
            'Mixed-use functionality',
            'Premium finishes throughout',
            'Retail optimization achieved',
            'Tenant satisfaction: 96%'
        ],
        gallery: [
            'images/projects/gbagada-1.jpg',
            'images/projects/gbagada-2.jpg',
            'images/projects/gbagada-3.jpg',
            'images/projects/gbagada-4.jpg'
        ],
        relatedProjects: ['project-001', 'project-007']
    }
];

// Filter functionality
document.addEventListener('DOMContentLoaded', () => {
    loadProjects('all');

    // Filter button event listeners
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            // Load filtered projects
            const filter = btn.getAttribute('data-filter');
            loadProjects(filter);
        });
    });
});

// Load projects based on filter
function loadProjects(filter) {
    const grid = document.getElementById('projects-grid');
    let filteredProjects = projectsData;

    if (filter !== 'all') {
        filteredProjects = projectsData.filter(project => project.category === filter);
    }

    grid.innerHTML = filteredProjects.map(project => `
        <a href="projectDetail.html?id=${project.id}" class="project-card">
            <div class="project-card-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.src='images/placeholder.jpg'">
                <div class="project-overlay">
                    <span class="project-category">${project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
                </div>
            </div>
            <div class="project-card-content">
                <h3>${project.title}</h3>
                <p class="project-client"><strong>Client:</strong> ${project.client}</p>
                <p class="project-desc">${project.shortDesc}</p>
                <div class="project-footer">
                    <span class="project-year">${project.year}</span>
                    <span class="read-more">View Details <i class="fas fa-arrow-right"></i></span>
                </div>
            </div>
        </a>
    `).join('');

    // Add fade-in animation
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}
