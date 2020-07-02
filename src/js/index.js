"use strict";

import * as banerAction from './banner.js';

//Burger menu
let burgerEl = document.querySelector('.burger');
  

function actionBurgerMenu() {
	let menuEl = document.querySelector('.main-nav__list');
	this.classList.toggle('main-nav__burger--active');
	menuEl.classList.toggle('main-nav__list--active');
}

burgerEl.addEventListener("click", actionBurgerMenu);

let prodNavEl = document.getElementById('main-nav__prod');
let prodListEl = document.querySelector('.nav-item__submenu');
let prodCloseBtn = document.querySelector('.submenu__close');

function openProdList(e) {	
	e.preventDefault();
	prodListEl.classList.toggle('nav-item__submenu--active');
}

prodNavEl.addEventListener("click", openProdList);

prodCloseBtn.addEventListener("click", function() {
	prodListEl.classList.remove('nav-item__submenu--active');
});




