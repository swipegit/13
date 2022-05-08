'use strict'

let burgerBtn = document.getElementById('burger_btn');
let burgerMenu = document.getElementById('burger_menu');
let underHeader = document.getElementById('under_header');
let closeBurger = document.getElementById('burger_close_wherever');
let header = document.getElementById("header")
let body = document.body;


function onScroll() {
    if (window.scrollY > 80) {
        burgerBtn.classList.add('scroll')
    } else {
        burgerBtn.classList.remove('scroll')
    }
}

function openBurger(){
    burgerBtn.classList.toggle('open');
    burgerMenu.classList.toggle('open');
    underHeader.classList.toggle('hidden');
    closeBurger.classList.toggle('open');
    if(burgerMenu.classList.contains('open') || closeBurger.classList.contains('open')){
        body.style.height = '100vh';
        body.style.overflow = 'hidden'
    } else {
        body.style.height = 'auto';
        body.style.overflow = 'auto'
    }
}

burgerBtn.addEventListener('click', openBurger);
closeBurger.addEventListener('click', () => {
    burgerBtn.classList.remove('open');
    burgerMenu.classList.remove('open');
    underHeader.classList.remove('hidden');
    closeBurger.classList.remove('open');
    body.style.height = 'auto';
    body.style.overflow = 'auto'
})
document.addEventListener('scroll', onScroll)
AOS.init();