document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('nav');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('navbar-toggler');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            const nav = document.getElementById('navbarNav');
            nav.classList.toggle('show');
        });
    } else {
        console.error('Element with ID "navbar-toggler" not found.');
    }
});