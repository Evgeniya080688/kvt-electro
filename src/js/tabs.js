const getTabs = () => {
  if (document.querySelector('.extra') !== null) {
    const captionsEl = document.querySelector('.captions').children;
    const captionsListArr = Array.prototype.slice.call(captionsEl);
    const contentEl = document.querySelector('.extra-content').children;
    const extraContentListArr = Array.prototype.slice.call(contentEl);

    captionsListArr[0].classList.add('captions__item--active');
    extraContentListArr[0].classList.add('extra-content__item--active');

    for (let i = 0; i < captionsListArr.length; i++) {
      captionsListArr[i].addEventListener('click', function() {
        for (let j = 0; j < extraContentListArr.length; j++) {
          captionsListArr[j].classList.remove('captions__item--active');
          extraContentListArr[j].classList.remove('extra-content__item--active');
        }

        captionsListArr[i].classList.add('captions__item--active');
        extraContentListArr[i].classList.add('extra-content__item--active');
      });
    }
  }
};

export { getTabs };


