document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 800,
        delay: 300
    });

    document.getElementById('menu-btn').addEventListener('click', function() {
        document.querySelector('body').classList.toggle('active');
        document.querySelector('.header').classList.toggle('active');
    });

    document.getElementById('year').textContent = new Date().getFullYear();
});
