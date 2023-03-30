const getMenu = () => {
  //Burger menu
  const burgerEl = document.querySelector('.burger');
  const menuEl = document.querySelector('.main-nav__list');
  const mainMenuEl = document.querySelector('.header__menu');
  const headerEl = document.querySelector('.main-header');
  const prodNavEl = document.getElementById('main-nav__prod');
  const prodListEl = document.querySelector('.nav-item__submenu');
  const prodCloseBtn = document.querySelector('.submenu__close');

  function actionBurgerMenu() {
    this.classList.toggle('main-nav__burger--active');
    menuEl.classList.toggle('main-nav__list--active');
    if (!(this.classList.contains('main-nav__burger--active'))) {
      prodListEl.classList.remove('nav-item__submenu--active');
    }
  }

  burgerEl.addEventListener('click', actionBurgerMenu);

  function openProdList(e) {
    e.preventDefault();
    document.documentElement.scrollTop = 0;
    prodListEl.classList.toggle('nav-item__submenu--active');
  }

  prodNavEl.addEventListener('click', openProdList);

  window.addEventListener('click', function(event) {
    if (prodListEl.classList.contains('nav-item__submenu--active')) {
      const xCoord = (document.documentElement.clientWidth - prodListEl.offsetWidth) / 2;
      const yCoord = prodListEl.offsetHeight;

      if ((((event.clientX > 0) && (event.clientX < xCoord)) || (event.clientX > prodListEl.offsetWidth + xCoord))
        || (event.clientY > yCoord)) {
        prodListEl.classList.remove('nav-item__submenu--active');
      }
    }
  });

  prodCloseBtn.addEventListener('click', function() {
    prodListEl.classList.remove('nav-item__submenu--active');
  });

  //Stiky menu
  window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if ((scrollTop > headerEl.offsetHeight) && !(prodListEl.classList.contains('nav-item__submenu--active')) && !(burgerEl.classList.contains('main-nav__burger--active'))) {
      mainMenuEl.classList.add('fixed');
    } else {
      mainMenuEl.classList.remove('fixed');
    }
  });
};

export { getMenu };

