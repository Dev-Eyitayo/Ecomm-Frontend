var menuIcon = document.getElementById("hamburger-menu");
var sideBar = document.querySelector('.side-bar');

menuIcon.addEventListener('click', () => {
    // Toggle sidebar visibility by adding/removing 'open' class
    sideBar.classList.toggle('open');

    // Get the image element
    // const menuIcon = document.getElementById("hamburger-menu");

    // Change icon based on the sidebar's visibility
    if (sideBar.classList.contains('open')) {
        menuIcon.src = "Assets/cancel-menu.png"; // Icon when sidebar is open
    } else {
        menuIcon.src = "Assets/menu.png";  // Icon when sidebar is closed
    }
});


