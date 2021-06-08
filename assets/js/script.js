const toggleButton = document.getElementById("hamburger-icon");
const navbarLinks = document.getElementsByClassName('navbar-links')[0];


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});