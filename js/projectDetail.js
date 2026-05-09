// Import projects data (reference to projects.js data)
// This file works with the projectsData array from projects.js

let currentSlideIndex = 0;
let projectGallery = [];

// Get project ID from URL
function getProjectId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || 'project-001';
}

// Find projects data (needs to be accessible from projects.js)
function getProjectData(id) {
    // This will use projectsData from projects.js
    return projectsData.find(p => p.id === id);
}

// Load project detail
function loadProjectDetail() {
    const id = getProjectId();
    const project = getProjectData(id);

    if (!project) {
        document.getElementById('project-title').textContent = 'Project Not Found';
        return;
    }

    // Update page title
    document.title = `${project.title} | WNM Ltd - Projects`;

    // Update main sections
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-subtitle').textContent = project.shortDesc;
    document.getElementById('project-client').textContent = project.client;
    document.getElementById('project-category').textContent = project.category.charAt(0).toUpperCase() + project.category.slice(1);
    document.getElementById('project-year').textContent = project.year;

    // Overview section
    document.getElementById('project-description').textContent = project.description;
    document.getElementById('project-challenge').innerHTML = project.challenge;
    document.getElementById('project-solution').innerHTML = project.solution;
    document.getElementById('project-results').innerHTML = project.results;

    // Specifications
    document.getElementById('spec-duration').textContent = project.duration;
    document.getElementById('spec-solution-type').textContent = project.solutionType;
    document.getElementById('spec-location').textContent = project.location;
    document.getElementById('spec-status').innerHTML = `<span class="status-badge">${project.status}</span>`;

    // Achievements
    const achievementsList = document.getElementById('achievements-list');
    achievementsList.innerHTML = project.achievements.map(achievement => `
        <div class="achievement-item">
            <i class="fas fa-check-circle"></i>
            <span>${achievement}</span>
        </div>
    `).join('');

    // Gallery
    projectGallery = project.gallery;
    initializeCarousel();

    // Related projects
    loadRelatedProjects(project.relatedProjects);
}

// Initialize carousel
function initializeCarousel() {
    if (projectGallery.length === 0) return;

    // Set first image
    updateMainSlide(0);

    // Generate indicators
    const indicatorsContainer = document.getElementById('carousel-indicators');
    indicatorsContainer.innerHTML = projectGallery.map((_, index) => `
        <button class="indicator ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></button>
    `).join('');

    // Generate thumbnails
    const thumbnailGallery = document.getElementById('thumbnail-gallery');
    thumbnailGallery.innerHTML = projectGallery.map((image, index) => `
        <img src="${image}" alt="Project thumbnail ${index + 1}" class="thumbnail ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})" onerror="this.src='images/placeholder.jpg'">
    `).join('');
}

// Update main slide
function updateMainSlide(index) {
    if (index < 0) index = projectGallery.length - 1;
    if (index >= projectGallery.length) index = 0;

    currentSlideIndex = index;

    // Update main image
    const mainCarousel = document.getElementById('main-carousel');
    mainCarousel.innerHTML = `<img src="${projectGallery[index]}" alt="Project Image" onerror="this.src='images/placeholder.jpg'">`;

    // Update indicators
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((ind, i) => {
        ind.classList.toggle('active', i === index);
    });

    // Update thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// Change slide
function changeSlide(direction) {
    updateMainSlide(currentSlideIndex + direction);
}

// Go to specific slide
function goToSlide(index) {
    updateMainSlide(index);
}

// Load related projects
function loadRelatedProjects(relatedIds) {
    const grid = document.getElementById('related-projects-grid');
    
    if (!relatedIds || relatedIds.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--color-text-muted);">No related projects at this time.</p>';
        return;
    }

    const relatedProjects = relatedIds
        .map(id => projectsData.find(p => p.id === id))
        .filter(p => p);

    grid.innerHTML = relatedProjects.map(project => `
        <a href="projectDetail.html?id=${project.id}" class="related-project-card">
            <div class="related-project-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.src='images/placeholder.jpg'">
            </div>
            <div class="related-project-content">
                <h4>${project.title}</h4>
                <p>${project.client}</p>
                <span class="category-badge">${project.category}</span>
            </div>
        </a>
    `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadProjectDetail();
});

// Keyboard navigation for carousel
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') changeSlide(-1);
    if (e.key === 'ArrowRight') changeSlide(1);
});
