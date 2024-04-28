'use strict';

const menu = document.querySelector('span');
const dropdown = document.querySelector('#nav-box');

menu.addEventListener('click', () => {
    if (menu.innerHTML == 'menu') {
        menu.innerHTML = 'close';
        dropdown.classList.add('active');
    } else {
        menu.innerHTML = 'menu';
        dropdown.classList.remove('active');
    }
});

const menuLinks = document.querySelectorAll('.link');

menuLinks.forEach(elem => {
    elem.addEventListener('click', () => {
        menu.innerHTML = 'menu';
        dropdown.classList.remove('active');
    })
})


const burger = document.getElementById('burger-container');
const options = document.querySelectorAll('.option');
const bun = document.getElementsByClassName('bun');

function plusFunc(ingredient, burger, bun) {
    const newIngredient = document.createElement("div");
    const alert = document.getElementsByClassName('alert');
    alert[0].classList.remove('alert-alerted')
    alert[0].innerHTML = '';
    newIngredient.classList.add(ingredient);
    newIngredient.innerHTML = ingredient.toUpperCase();
    burger.insertBefore(newIngredient, bun);
}

function minusFunc(ingredient) {
    const ing = document.getElementsByClassName(ingredient);
    const alert = document.getElementsByClassName('alert');
    alert[0].classList.remove('alert-alerted')
    alert[0].innerHTML = '';
    if (ing.length > 0) {
        ing[0].remove();
    } else {
        alert[0].innerHTML = 'error no more ' + ingredient;
        alert[0].classList.add('alert-alerted');
    }
}

options.forEach((elem) => {
    const plus = elem.getElementsByClassName('add')[0];
    const minus = elem.getElementsByClassName('delete')[0];
    const elemClass = elem.title;
    plus.addEventListener('click', () => {
        plusFunc(elemClass, burger, bun[1], elemClass);
    });

    minus.addEventListener('click', () => {
        minusFunc(elemClass);
    });
});




