const burgerEl = document.querySelector('.burger');
const menuEl = document.querySelector('.main-nav__list');
const mainMenuEl = document.querySelector('.header__menu');
const headerEl = document.querySelector('.main-header');
const prodNavEl = document.getElementById('main-nav__prod');
const prodListEl = document.querySelector('.nav-item__submenu');
const prodCloseBtn = document.querySelector('.submenu__close');

const actionBurgerMenu = function() {
  this.classList.toggle('main-nav__burger--active');
  menuEl.classList.toggle('main-nav__list--active');
  if (!(this.classList.contains('main-nav__burger--active'))) {
    prodListEl.classList.remove('nav-item__submenu--active');
  }
};

const openProdList = function(e) {
  e.preventDefault();
  document.documentElement.scrollTop = 0;
  prodListEl.classList.toggle('nav-item__submenu--active');
};

const desactivateSubmenu = (evt) => {
  if (prodListEl.classList.contains('nav-item__submenu--active')) {
    const xCoord = (document.documentElement.clientWidth - prodListEl.offsetWidth) / 2;
    const yCoord = prodListEl.offsetHeight;

    if ((((evt.clientX > 0) && (evt.clientX < xCoord)) || (evt.clientX > prodListEl.offsetWidth + xCoord))
      || (evt.clientY > yCoord)) {
      prodListEl.classList.remove('nav-item__submenu--active');
    }
  }
};

const closeMenu = function() {
  prodListEl.classList.remove('nav-item__submenu--active');
};

const fixMainMenu = function() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  if ((scrollTop > headerEl.offsetHeight) && !(prodListEl.classList.contains('nav-item__submenu--active')) && !(burgerEl.classList.contains('main-nav__burger--active'))) {
    mainMenuEl.classList.add('fixed');
  } else {
    mainMenuEl.classList.remove('fixed');
  }
};

const getMenu = () => {
  //Burger menu
  burgerEl.addEventListener('click', actionBurgerMenu);

  prodNavEl.addEventListener('click', openProdList);

  window.addEventListener('click', (evt) => {desactivateSubmenu(evt);});

  prodCloseBtn.addEventListener('click', closeMenu);

  //Stiky menu
  window.addEventListener('scroll', fixMainMenu);
};

export { getMenu };

