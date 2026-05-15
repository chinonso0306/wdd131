const year = document.querySelector("#year");
const modified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();
modified.textContent = document.lastModified;

const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuButton.textContent = nav.classList.contains("open") ? "X" : "☰";
});