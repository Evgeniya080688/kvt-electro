let bannerBlockEl = null;
let bannerBlockArr = [];
let index = 0;

let prevBtnEl = null;
let nextBtnEl = null;
let paginatorEl = null;
const arrPaginator = [];
const arrButtons = [];

const clickPaginator = (evt) => {
  if (evt.target.tagName === 'BUTTON') {
    evt.target.classList.add('paginator__btn--active');
    index = arrButtons.indexOf(evt.target);
    bannerBlockArr[index].classList.add('main-baner__item--active');
    for (let i = 0; i < arrButtons.length; i++) {
      if (i !== index) {
        arrButtons[i].classList.remove('paginator__btn--active');
        bannerBlockArr[i].classList.remove('main-baner__item--active');
      }
    }
  }
};

const nextSlide = () => {
  if (index < bannerBlockArr.length - 1) {
    index++;
  } else {
    index = 0;
  }

  bannerBlockArr[index].classList.add('main-baner__item--active');
  arrButtons[index].classList.add('paginator__btn--active');
  for (let i = 0; i < bannerBlockArr.length; i++) {
    if (i !== index) {
      bannerBlockArr[i].classList.remove('main-baner__item--active');
      arrButtons[i].classList.remove('paginator__btn--active');
    }
  }
};

const prevSlide = () => {
  if (index > 0) {
    index--;
  } else {
    index = bannerBlockArr.length - 1;
  }

  bannerBlockArr[index].classList.add('main-baner__item--active');
  arrButtons[index].classList.add('paginator__btn--active');
  for (let i = 0; i < bannerBlockArr.length; i++) {
    if (i !== index) {
      bannerBlockArr[i].classList.remove('main-baner__item--active');
      arrButtons[i].classList.remove('paginator__btn--active');
    }
  }
};

const getBanner = () => {
  if (document.querySelector('.main-baner') !== null) {
    bannerBlockEl = document.querySelector('.main-baner').children;
    bannerBlockArr = Array.prototype.slice.call(bannerBlockEl);
    prevBtnEl = document.querySelector('.baner__nav--left');
    nextBtnEl = document.querySelector('.baner__nav--right');
    paginatorEl = document.querySelector('.paginator_js');

    //создание точек для пагинатора
    for (let i = 0; i < bannerBlockArr.length; i++) {
      const paginatorItemEl = document.createElement('li');
      paginatorItemEl.classList.add('paginator__item');
      paginatorItemEl.innerHTML = '<button class=\"paginator__btn \"></button>';
      paginatorEl.appendChild(paginatorItemEl);
      arrPaginator.push(paginatorItemEl);
    }

    const paginatorArrEl = document.querySelectorAll('.paginator__btn');
    paginatorArrEl[index].classList.add('paginator__btn--active');
    bannerBlockArr[index].classList.add('main-baner__item--active');

    for (let i = 0; i < bannerBlockArr.length; i++) {
      arrButtons.push(paginatorArrEl[i]);
    }

    nextBtnEl.addEventListener('click', () => { nextSlide(); });

    prevBtnEl.addEventListener('click', () => { prevSlide(); });

    paginatorEl.addEventListener('click', (evt) => { clickPaginator(evt); });

    setInterval(() => { nextSlide(); }, 7000);
  }
};

export { getBanner };


