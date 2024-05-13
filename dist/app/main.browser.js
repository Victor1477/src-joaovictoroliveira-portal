"use strict";
const body = document.querySelector("body");
const button = document.querySelector(".mobile-nav");
const backdrop = document.querySelector(".backdrop");
const sidebar = document.querySelector(".sidebar");
//EventListeners
button.addEventListener("click", () => {
    openMobileNav();
});
backdrop.addEventListener("click", () => {
    closeMobileNav();
});
//Functions
function openMobileNav() {
    body.style.overflow = "hidden";
    sidebar.classList.add("open");
    backdrop.classList.add("open");
}
function closeMobileNav() {
    body.style.overflow = "auto";
    sidebar.classList.remove("open");
    backdrop.classList.remove("open");
}
