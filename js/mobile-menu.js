"use strict";

const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenuClose = document.getElementById("mobile-menu-close");
const mobileMenuBackdrop = document.getElementById("mobile-menu-backdrop");

function openMobileMenu() {
    mobileMenu?.classList.add("active");
    document.body.classList.add("menu-open");
}

function closeMobileMenu() {
    mobileMenu?.classList.remove("active");
    document.body.classList.remove("menu-open");
}

mobileMenuBtn?.addEventListener("click", openMobileMenu);
mobileMenuClose?.addEventListener("click", closeMobileMenu);
mobileMenuBackdrop?.addEventListener("click", closeMobileMenu);

// Close on ESC key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeMobileMenu();
    }
});

// Close menu when clicking a nav link
mobileMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
});
