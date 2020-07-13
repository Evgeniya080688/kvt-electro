"use strict";

import * as banerAction from './banner.js';

//Burger menu
let burgerEl = document.querySelector('.burger');
let menuEl = document.querySelector('.main-nav__list');
let mainMenuEl = document.querySelector('.header__menu');
let headerEl = document.querySelector('.main-header');

function actionBurgerMenu() {
	this.classList.toggle('main-nav__burger--active');
	menuEl.classList.toggle('main-nav__list--active');
	if (!(this.classList.contains('main-nav__burger--active'))) {
		prodListEl.classList.remove('nav-item__submenu--active');
	}
}

burgerEl.addEventListener("click", actionBurgerMenu);

let prodNavEl = document.getElementById('main-nav__prod');
let prodListEl = document.querySelector('.nav-item__submenu');
let prodCloseBtn = document.querySelector('.submenu__close');

function openProdList(e) {	
	e.preventDefault();
	document.documentElement.scrollTop = 0;
	prodListEl.classList.toggle('nav-item__submenu--active');
}

prodNavEl.addEventListener("click", openProdList);

prodCloseBtn.addEventListener("click", function() {
	prodListEl.classList.remove('nav-item__submenu--active');
});


window.addEventListener('scroll', function() {
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if ((scrollTop > headerEl.offsetHeight) &&
		!(prodListEl.classList.contains('nav-item__submenu--active')) && 
		!(burgerEl.classList.contains('main-nav__burger--active'))	) {
			mainMenuEl.classList.add('fixed');
	}
	else {
		mainMenuEl.classList.remove('fixed');
	}
	//alert( "Текущая прокрутка: " + scrollTop );
	
});	




