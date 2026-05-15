// 1. Set current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// 2. Set last modified date
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// 3. Hamburger Menu Toggle
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});