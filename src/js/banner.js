"use strict";

let bannerBlockEl = document.querySelector('.main-baner').children;

let bannerBlockArr = Array.prototype.slice.call(bannerBlockEl);
let index = 0;
let widthBaner = document.querySelector('.main-baner').offsetWidth;

let prevBtnEl = document.querySelector('.baner__nav--left');
let nextBtnEl = document.querySelector('.baner__nav--right');
let paginatorEl = document.querySelector('.paginator_js');
let paginatorArrEl ;
let arrPaginator = [];
let arrButtons = [];

//создание точек для пагинатора
for (var i=0; i<bannerBlockArr.length; i++) {	
	var paginatorItemEl = document.createElement('li');
	paginatorItemEl.classList.add('paginator__item');
	paginatorItemEl.innerHTML = '<button class="paginator__btn "></button>';
	paginatorEl.appendChild(paginatorItemEl);
	arrPaginator.push(paginatorItemEl);
}

//
paginatorArrEl = document.querySelectorAll('.paginator__btn');
paginatorArrEl[index].classList.add('paginator__btn--active');
bannerBlockArr[index].classList.add('main-baner__item--active');


for (var i=0; i<bannerBlockArr.length; i++) {
 	arrButtons.push(paginatorArrEl[i]);
}


function nextSlide() {
	
	if (index < bannerBlockArr.length-1) {
		index++;
	}
	else {
		index = 0;
	}

	bannerBlockArr[index].classList.add('main-baner__item--active');
	arrButtons[index].classList.add('paginator__btn--active');
	for (let i=0; i < bannerBlockArr.length; i++) {
		if (i != index) {
			bannerBlockArr[i].classList.remove('main-baner__item--active');
			arrButtons[i].classList.remove('paginator__btn--active');
		}
	}
}


function prevSlide() {
	
	if (index > 0)  {
		index--;
	}
	else {
		index = bannerBlockArr.length - 1;
	}

	bannerBlockArr[index].classList.add('main-baner__item--active');
	arrButtons[index].classList.add('paginator__btn--active');
	for (let i=0; i < bannerBlockArr.length; i++) {
		if (i != index) {
			bannerBlockArr[i].classList.remove('main-baner__item--active');
			arrButtons[i].classList.remove('paginator__btn--active');
		}
	}
}

nextBtnEl.addEventListener('click', function(event) {
	nextSlide();
});

prevBtnEl.addEventListener('click', function(event) {
	prevSlide();
});

paginatorEl.addEventListener('click', function(event) {
	if (event.target.tagName == 'BUTTON') {
		
		event.target.classList.add('paginator__btn--active');

		index = arrButtons.indexOf(event.target);
		bannerBlockArr[index].classList.add('main-baner__item--active');
		for (var i=0; i< arrButtons.length; i++ ) {
			if (i != index) {
				arrButtons[i].classList.remove('paginator__btn--active');
				bannerBlockArr[i].classList.remove('main-baner__item--active');
			}
		}
		
	}
});	


setInterval(function() {
  nextSlide();
}, 7000);


