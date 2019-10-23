

let hamburger = document.querySelector(".burgerBtn");
let menu = document.querySelector(".hamburgerMenu");

hamburger.addEventlistener('click', openMenu);

function openMenu () {
        menu.style.visibility="visibile";
}