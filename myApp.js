

let hamburger = document.querySelector(".burgerBtn");
let menu = document.querySelector(".hamburgerMenu");

hamburger.addEventListener('click', openMenu);

function openMenu () {
    if (menu.style.display === "none"){
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
}
