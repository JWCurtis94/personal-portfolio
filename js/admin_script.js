// Select the navbar element inside the header
const navbar = document.querySelector('.header .flex .navbar');

// Select the menu button element
const menuBtn = document.querySelector('#menu-btn');

// Toggle navbar visibility on button click
menuBtn.onclick = () => {
    navbar.classList.toggle('active');
    // Toggle ARIA-expanded for accessibility
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
    menuBtn.setAttribute('aria-expanded', !expanded);
};

// Function to remove 'active' class from the navbar
const closeNavbar = () => {
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', false); // Reset ARIA-expanded
    }
};

// Debounce function to improve scroll performance
let debounceTimer;
window.onscroll = () => {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        closeNavbar();
    }, 100);  // Adjust the delay as needed
};

// Ensure ARIA attributes are properly set on page load for accessibility
window.onload = () => {
    menuBtn.setAttribute('aria-expanded', false);
};
