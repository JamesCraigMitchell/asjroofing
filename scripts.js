// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });

        // Close the navbar if it's open
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});

// Reveal elements on scroll
const fadeInElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

fadeInElements.forEach(el => observer.observe(el));

// Form validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (name && email && message) {
        alert('Thank you for reaching out!');
        form.reset();
    } else {
        alert('Please fill out all fields.');
    }
});

// Rotate navbar toggler on click
const navbarToggler = document.querySelector('.navbar-toggler');
navbarToggler.addEventListener('click', function () {
    this.classList.toggle('active');
});

// Auto-collapse navbar when clicking outside
document.addEventListener('click', function (e) {
    const navbar = document.querySelector('.navbar');
    const isClickInsideNavbar = navbar.contains(e.target);

    if (!isClickInsideNavbar) {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const toggler = document.querySelector('.navbar-toggler');
        
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
            toggler.classList.remove('active'); // Reset toggler rotation
        }
    }
});
