let captionsEl = null;
let captionsListArr = null;
let contentEl = null;
let extraContentListArr = null;

const getContentTab = (caption, content) => {
  for (let j = 0; j < extraContentListArr.length; j++) {
    captionsListArr[j].classList.remove('captions__item--active');
    extraContentListArr[j].classList.remove('extra-content__item--active');
  }

  caption.classList.add('captions__item--active');
  content.classList.add('extra-content__item--active');
};

const getTabs = () => {
  if (document.querySelector('.extra') !== null) {
    captionsEl = document.querySelector('.captions').children;
    captionsListArr = Array.prototype.slice.call(captionsEl);
    contentEl = document.querySelector('.extra-content').children;
    extraContentListArr = Array.prototype.slice.call(contentEl);

    captionsListArr[0].classList.add('captions__item--active');
    extraContentListArr[0].classList.add('extra-content__item--active');

    for (let i = 0; i < captionsListArr.length; i++) {
      captionsListArr[i].addEventListener('click', () => {getContentTab(captionsListArr[i], extraContentListArr[i]);});
    }
  }
};

export { getTabs };


