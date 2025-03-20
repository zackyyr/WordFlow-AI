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
document.addEventListener("DOMContentLoaded", function () {
    const selectAllCheckbox = document.getElementById("select-all");
    const rowCheckboxes = document.querySelectorAll(".row-checkbox");

    // Handle select all
    selectAllCheckbox.addEventListener("change", function () {
        rowCheckboxes.forEach(checkbox => {
            checkbox.checked = selectAllCheckbox.checked;
        });
    });

    // Handle individual checkbox (kalau semua dicentang, header ikut centang)
    rowCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            selectAllCheckbox.checked = [...rowCheckboxes].every(cb => cb.checked);
        });
    });

    // Handle dropdown toggle
    document.querySelectorAll(".dropdown-btn").forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.stopPropagation(); // Biar gak nutup langsung
            const dropdown = this.parentElement;
            dropdown.classList.toggle("active");

            // Close dropdown lain yang sedang terbuka
            document.querySelectorAll(".dropdown").forEach(d => {
                if (d !== dropdown) d.classList.remove("active");
            });
        });
    });

    // Close dropdown kalau klik di luar
    document.addEventListener("click", function () {
        document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("active"));
    });
});
