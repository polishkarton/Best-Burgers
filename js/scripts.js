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
    newIngredient.classList.add(ingredient);
    newIngredient.innerHTML = ingredient.toUpperCase();
    burger.insertBefore(newIngredient, bun);
}

function minusFunc(ingredient) {
    const ing = document.getElementsByClassName(ingredient);
    if (ing.length > 0) {
        ing[0].remove();
    } else {
        console.log('error no more ' + ingredient);
    }
}

options.forEach((elem) => {
    const plus = elem.getElementsByClassName('add')[0];
    const minus = elem.getElementsByClassName('delete')[0];
    const elemClass = elem.title;
    plus.addEventListener('click', () => {
        plusFunc(elemClass, burger, bun[1]);
    });

    minus.addEventListener('click', () => {
        minusFunc(elemClass);
    });
});





