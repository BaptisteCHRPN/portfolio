const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Burger menu
const burger = document.querySelector('.nav-burger');
const navbar = document.querySelector('.navbar');

burger.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
    });
});
