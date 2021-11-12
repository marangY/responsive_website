'use strict';

//nav color change
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    if (window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else{
        navbar.classList.remove('navbar--dark');
    }
});

// nav move
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    navbarMenu.classList.remove("open");
    scrollIntoView(link);
});

// contact me
const homeContact = document.querySelector(".home__contact");
homeContact.addEventListener("click", () => {
    scrollIntoView("#contact");
});

// home opacity control
const home = document.querySelector(".home__contanier");
const homeHeight = home.getBoundingClientRect().height
document.addEventListener("scroll", () => {
    home.style.opacity = 1 - window.scrollY/homeHeight;
});

// hambuger menu clicker
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("open");
});

// arrowup btn
const homeMainHeight = document.querySelector("#home").getBoundingClientRect().height;
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
    if(window.scrollY/homeMainHeight > 0.5)
        arrowUp.classList.add("visible");
    else
        arrowUp.classList.remove("visible");
});
arrowUp.addEventListener("click", () => {
    scrollIntoView("#home");
});

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior : "smooth"});
}

