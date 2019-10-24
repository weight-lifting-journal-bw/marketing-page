let hamburger = document.querySelector(".burgerBtn");
let menu = document.querySelector(".hamburgerMenu");
let maxWidth = window.matchMedia( "(max-width: 1000px)" );


// hamburger.addEventListener('click', openMenu);

function openMenu () {
    if(maxWidth === true){
        hamburger.addEventListener('click', openMenu);
    }
}

function openMenu () {
        if (menu.style.display === "none"){
            menu.style.display = "flex";
        } else {
            menu.style.display = "none";
        };
}