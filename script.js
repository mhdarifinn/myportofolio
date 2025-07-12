const toggle = document.getElementById("toggleDark");
const body = document.body;

toggle.addEventListener("click", function () {
    body.classList.toggle("dark");

    const icon = toggle.querySelector("i");
    if (body.classList.contains("dark")) {
        icon.classList.add("fa-solid");
    } else {
        icon.classList.remove("fa-solid");
    }

    // Simpan preferensi ke localStorage
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});

// Aktifkan preferensi sebelumnya
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");
        toggle.querySelector("i").classList.add("fa-solid");
    }
});

// === NEW: Highlight active navbar link ===
const navbarLinks = document.querySelectorAll(".a-navbar");

navbarLinks.forEach(link => {
    link.addEventListener("click", function () {
        navbarLinks.forEach(nav => nav.classList.remove("active")); // hapus dari semua
        this.classList.add("active"); // tambahkan ke link yang diklik
    });
});

window.addEventListener("DOMContentLoaded", () => {
    // ...dark mode...

    // Auto-detect halaman aktif
    const path = window.location.pathname.split("/").pop();
    document.querySelectorAll(".a-navbar").forEach(link => {
        if (link.getAttribute("href") === path || (path === "" && link.getAttribute("href") === "#")) {
            link.classList.add("active");
        }
    });
});