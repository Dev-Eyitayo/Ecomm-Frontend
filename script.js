var menuIcon = document.getElementById("hamburger-menu");
var sideBar = document.querySelector('.side-bar');

// Toggle sidebar visibility when the menu icon is clicked
menuIcon.addEventListener('click', (event) => {
    sideBar.classList.toggle('open');

    // Change the menu icon based on the sidebar's visibility
    if (sideBar.classList.contains('open')) {
        menuIcon.src = "Assets/cancel.png"; // Icon when sidebar is open
    } else {
        menuIcon.src = "Assets/menu.png"; // Icon when sidebar is closed
    }
    event.stopPropagation(); // Prevent click from propagating to the document
});

// Close sidebar when clicking outside of it
document.addEventListener('click', (event) => {
    if (sideBar.classList.contains('open') && !sideBar.contains(event.target) && event.target !== menuIcon) {
        sideBar.classList.remove('open');
        menuIcon.src = "Assets/menu.png"; // Reset to default menu icon
    }
});


