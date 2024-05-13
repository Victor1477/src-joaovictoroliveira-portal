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
const list = document.querySelector(".sidebar__navigation");
for (let i = 2; i < 51; i++) {
    const item = document.createElement("li");
    item.textContent = "Item " + i;
    list?.appendChild(item);
}
