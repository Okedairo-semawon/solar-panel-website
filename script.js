// mobile menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector ('.hamburger-button');
    const mobileMenu = document.querySelector ('.mobile-menu');

    hamburgerButton.addEventListener ('click', () =>
     mobileMenu.classList.toggle('active')
    );
});