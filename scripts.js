document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Schedule Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const daySchedules = document.querySelectorAll('.day-schedule');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            daySchedules.forEach(s => s.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.getAttribute('data-day')).classList.add('active');
        });
    });

    // Sticky Navbar shadow
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        else navbar.style.boxShadow = 'none';
    });
});