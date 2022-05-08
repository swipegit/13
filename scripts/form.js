'use strict';

let name = document.getElementById('name');
let email = document.getElementById('email');
let question = document.getElementById('question');
let inputSubmit = document.getElementById('input_submit');
let loader = document.getElementById('loader')
let loaderTxt = document.getElementById('loader_txt');
let formFeild = document.getElementById('sent_form')

function loaderFunc(){
    loader.classList.add('play')
    setInterval(() => {loader.classList.remove('play'), loaderTxt.classList.add('open')},1400);
}

function disable(){
    inputSubmit.disabled = true;
    inputSubmit.style.opacity = '.7';
    inputSubmit.style.cursor = 'default';
    email.disabled = true;
    name.disabled = true;
    question.disabled = true;
}

function clear(){
    email.value = " ";
    name.value = " ";
    question.value =" ";
}

function form(){
    formFeild.classList.add('open');
    setInterval(loaderFunc, 2000);
    setTimeout(() => {formFeild.classList.remove('open')}, 5000);
    clear()
    disable()
}

inputSubmit.addEventListener('click', form)

