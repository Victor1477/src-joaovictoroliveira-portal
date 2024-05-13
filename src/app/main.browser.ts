const body = document.querySelector("body") as HTMLBodyElement;
const button = document.querySelector(".mobile-nav") as HTMLDivElement;
const backdrop = document.querySelector(".backdrop") as HTMLDivElement;
const sidebar = document.querySelector(".sidebar") as HTMLElement;

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
