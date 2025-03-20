// JS untuk aktifin modal profile 
document.addEventListener("DOMContentLoaded", function () {
    const profilePic = document.querySelector(".main-header__pic img");
    const menu = document.querySelector(".main-header__pic ul");

    profilePic.addEventListener("click", function (event) {
        menu.classList.toggle("active"); // Toggle class 'active'
        event.stopPropagation(); // Hindari close saat klik gambar
    });

    // Klik di luar menu untuk menutup
    document.addEventListener("click", function (event) {
        if (!profilePic.contains(event.target) && !menu.contains(event.target)) {
            menu.classList.remove("active");
        }
    });
});


// Untuk mengaktifkan action pada data dan checkbox 
