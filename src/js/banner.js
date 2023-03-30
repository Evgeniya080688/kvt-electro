const getBunner = () => {
  if (document.querySelector('.main-baner') !== null) {
    const bannerBlockEl = document.querySelector('.main-baner').children;
    const bannerBlockArr = Array.prototype.slice.call(bannerBlockEl);
    let index = 0;

    const prevBtnEl = document.querySelector('.baner__nav--left');
    const nextBtnEl = document.querySelector('.baner__nav--right');
    const paginatorEl = document.querySelector('.paginator_js');
    let arrPaginator = [];
    let arrButtons = [];

    //создание точек для пагинатора
    for (let i = 0; i < bannerBlockArr.length; i++) {
      const paginatorItemEl = document.createElement('li');
      paginatorItemEl.classList.add('paginator__item');
      paginatorItemEl.innerHTML = '<button class=\"paginator__btn \"></button>';
      paginatorEl.appendChild(paginatorItemEl);
      arrPaginator.push(paginatorItemEl);
    }

    //
    const paginatorArrEl = document.querySelectorAll('.paginator__btn');
    paginatorArrEl[index].classList.add('paginator__btn--active');
    bannerBlockArr[index].classList.add('main-baner__item--active');

    for (let i = 0; i < bannerBlockArr.length; i++) {
      arrButtons.push(paginatorArrEl[i]);
    }

    function nextSlide() {
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
    }

    function prevSlide() {
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
    }

    nextBtnEl.addEventListener('click', function() {
      nextSlide();
    });

    prevBtnEl.addEventListener('click', function() {
      prevSlide();
    });

    paginatorEl.addEventListener('click', function(event) {
      if (event.target.tagName === 'BUTTON') {
        event.target.classList.add('paginator__btn--active');
        index = arrButtons.indexOf(event.target);
        bannerBlockArr[index].classList.add('main-baner__item--active');
        for (let i = 0; i < arrButtons.length; i++) {
          if (i !== index) {
            arrButtons[i].classList.remove('paginator__btn--active');
            bannerBlockArr[i].classList.remove('main-baner__item--active');
          }
        }
      }
    });

    setInterval(function() {
      nextSlide();
    }, 7000);
  }
};

export { getBunner };


