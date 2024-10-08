// Selecting the menu button and header
const menu = document.querySelector('#menu-btn');
const header = document.querySelector('.header');

// Toggle the menu, header, and body active classes on menu button click
menu.onclick = () => {
    menu.classList.toggle('fa-times');    // Toggle the 'X' icon for the menu
    header.classList.toggle('active');    // Toggle active class for the header
    document.body.classList.toggle('active'); // Prevent body scrolling when menu is open
};

// Function to reset classes when scrolling (for mobile views)
const resetMenuOnScroll = () => {
    if (window.innerWidth < 991) {  // Check if window width is less than 991px (mobile devices)
        menu.classList.remove('fa-times');   // Remove 'X' icon
        header.classList.remove('active');   // Remove active class from header
        document.body.classList.remove('active'); // Remove active class from body
    }

    // Highlight navbar links on scroll
    document.querySelectorAll('section').forEach(section => {
        const top = window.scrollY;          // Current scroll position
        const offset = section.offsetTop - 150; // Section position offset for when to highlight
        const height = section.offsetHeight; // Section height
        const id = section.getAttribute('id');  // Section ID

        // Check if the section is in view
        if (top >= offset && top < offset + height) {
            document.querySelectorAll('.header .navbar a').forEach(link => {
                link.classList.remove('active');   // Remove 'active' class from all links
            });
            document.querySelector(`.header .navbar a[href*=${id}]`).classList.add('active'); // Add 'active' class to the current section's link
        }
    });
};

// Run the resetMenuOnScroll function on window scroll
window.onscroll = resetMenuOnScroll;

// Limit input for number fields to the maximum length
document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
    inputNumber.oninput = () => {
        const maxLength = inputNumber.maxLength || 999; // Set default max length if not provided
        if (inputNumber.value.length > maxLength) {
            inputNumber.value = inputNumber.value.slice(0, maxLength);  // Limit input to max length
        }
    };
});

// Accessibility improvements: ensure aria-expanded is properly handled
window.onload = () => {
    menu.setAttribute('aria-expanded', false); // Ensure aria-expanded is set to false on load
};

menu.onclick = () => {
    const expanded = menu.getAttribute('aria-expanded') === 'true' || false;
    menu.setAttribute('aria-expanded', !expanded); // Toggle aria-expanded
};
