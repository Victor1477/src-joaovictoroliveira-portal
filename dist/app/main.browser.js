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
//letter Animation
function animateText() {
    const letter = document.querySelector(".letter");
    const str1 = "Joao Oliveira";
    const str2 = "Software Developer";
    const bar = "|";
    let strIndex = 0;
    write();
    let str = str1;
    function write() {
        const writeInterval = setInterval(() => {
            if (strIndex <= str.length) {
                letter.textContent = str.substring(0, strIndex) + bar;
                strIndex++;
                return;
            }
            clearInterval(writeInterval);
            setTimeout(() => {
                erase();
            }, 250);
        }, 250);
    }
    function erase() {
        const eraseInterval = setInterval(() => {
            if (strIndex >= 0) {
                letter.textContent = str.substring(0, strIndex) + bar;
                strIndex--;
                return;
            }
            clearInterval(eraseInterval);
            if (str === str1) {
                str = str2;
            }
            else {
                str = str1;
            }
            write();
        }, 100);
    }
}
animateText();
