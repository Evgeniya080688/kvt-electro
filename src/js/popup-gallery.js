let galleryListEl = null;
let galleryListArr = null;

let modalEl = null;
let popupFigureEl = null;
let popupImg = null;
let popupTitle = null;
let popupCloseEl = null;
let arrowRightEl = null;
let arrowLeftEl = null;
let videoListEl = null;
let videoListArr = null;
let modalVideoEl = null;
let popupVideo = null;
let popupVideoCloseEl = null;
let drawing = null;
let popupSvg = null;
let modalSvgEl = null;
let popupSvgFigureEl = null;
let curImg = null;
let link3dEl = null;
let index = 0;


const showImage = (evt, i) => {
  index = i;
  evt.preventDefault();
  modalEl.style.display = 'flex';
  curImg = galleryListArr[i].querySelector('.media-list__img');
  //настройки содержимого
  popupImg.src = curImg.src;
  popupImg.alt = curImg.alt;
  popupImg.title = curImg.title;
  popupTitle.innerHTML = `${(index + 1)}/${galleryListArr.length}-${curImg.title}`;
  //настройки размеров
  popupImg.style.maxHeight = `${(0.8 * (screen.height))}px`;
  popupImg.style.maxWidth = `${(0.95 * (screen.width))}px`;
  popupFigureEl.style.height = `${(0.9 * (screen.height))}px`;
  arrowLeftEl.style.top = `${(0.40 * (screen.height))}px`;
  arrowRightEl.style.top = `${(0.40 * (screen.height))}px`;
  modalEl.style.height = `${(document.body.scrollHeight)}px`;

  document.documentElement.scrollTop = 0;
};

const closeModal = function() {
  modalEl.style.display = 'none';
};

const closeModalByArea = (evt) => {
  const target = evt.target;
  if ((target !== popupImg) && (target !== arrowRightEl) && (target !== arrowLeftEl)) {
    modalEl.style.display = 'none';
  }
};

const flipRight = function() {
  if (index < galleryListArr.length - 1) {
    index++;
  } else {
    index = 0;
  }
  curImg = galleryListArr[index].querySelector('.media-list__img');
  popupImg.src = curImg.src;
  popupTitle.innerHTML = `${index+1}/${galleryListArr.length} - ${curImg.title}`;
};

const flipLeft = function() {
  if (index > 0) {
    index--;
  } else {
    index = galleryListArr.length - 1;
  }

  curImg = galleryListArr[index].querySelector('.media-list__img');
  popupImg.src = curImg.src;
  popupTitle.innerHTML = `${index+1}/${galleryListArr.length} - ${curImg.title}`;
};

const showVideo = (evt, link) => {
  evt.preventDefault();
  modalVideoEl.style.display = 'flex';

  //настройки содержимого
  popupVideo.src = link.href;
  modalVideoEl.style.height = `${document.body.scrollHeight}px`;

  document.documentElement.scrollTop = 0;
};

const closeVideoModal = function() {
  modalVideoEl.style.display = 'none';
  popupVideoCloseEl.removeEventListener('click', closeVideoModal);
};

const closeVideoModalByArea = function(evt) {
  const target = evt.target;
  if (target !== popupVideo) {
    modalVideoEl.style.display = 'none';
    for (let i = 0; i < videoListArr.length; i++) {
      videoListArr[i].removeEventListener('click', showVideo);
    }
    modalVideoEl.removeEventListener('click', closeVideoModalByArea);
  }
};

const showSvg = (evt, elem) => {
  evt.preventDefault();
  modalSvgEl.style.display = 'flex';
  const svg = elem.querySelector('.svg__img');
  console.log(popupSvg);
  //настройки содержимого
  popupSvg.src = svg.src;
  popupSvg.alt = svg.alt;
  popupSvg.title = svg.title;
  //настройки размеров
  popupSvg.style.backgroundColor = 'white';
  popupSvg.style.height = `${(0.5 * (screen.height))}px`;
  popupSvg.style.maxWidth = `${(0.95 * (screen.width))}px`;
  popupSvgFigureEl.style.width = '70%';
  popupSvgFigureEl.style.height = `${(0.9 * (screen.height))}px`;
  arrowLeftEl.style.display = 'none';
  arrowRightEl.style.display = 'none';

  document.documentElement.scrollTop = 0;
};

const closeSvgModalByArea = (evt) => {
  const target = evt.target;
  if (target !== popupSvg) {
    modalSvgEl.style.display = 'none';
  }
};

const getPopup = () => {
  if (document.querySelector('.media-list__item') !== null) {
    galleryListEl = document.querySelectorAll('.media-list__item');
    galleryListArr = Array.prototype.slice.call(galleryListEl);

    modalEl = document.querySelector('.popup');
    popupFigureEl = document.querySelector('.popup__figure');
    popupImg = document.querySelector('.popup__img');
    popupTitle = document.querySelector('.popup__figcaption');
    popupCloseEl = document.querySelector('.popup__close');
    arrowRightEl = document.querySelector('.arrow__right');
    arrowLeftEl = document.querySelector('.arrow__left');
    curImg = galleryListArr[index].querySelector('.media-list__img');

    if (galleryListArr.length < 2) {
      arrowRightEl.style.display = 'none';
      arrowLeftEl.style.display = 'none';
    }

    popupCloseEl.addEventListener('click', closeModal);

    modalEl.addEventListener('click', (evt) => {closeModalByArea(evt);});

    arrowRightEl.addEventListener('click', flipRight);

    arrowLeftEl.addEventListener('click', flipLeft);

    popupImg.addEventListener('click', flipRight);

    for (let i = 0; i < galleryListArr.length; i++) {
      galleryListArr[i].addEventListener('click', (evt) => {showImage(evt, i);});
    }
  }

  //чертеж
  if (document.querySelector('.product-info__svg') !== null) {
    modalSvgEl = document.querySelector('.popup-svg');
    popupSvgFigureEl = document.querySelector('.popup-svg__figure');
    popupSvg = document.querySelector('.popup-svg__img');
    drawing = document.querySelector('.product-info__svg');
    drawing.addEventListener('click',(evt) => {showSvg(evt, drawing);});
    modalSvgEl.addEventListener('click', (evt) => {closeSvgModalByArea(evt);});
  }

  //для видео в модальном окне
  if (document.querySelector('.list-video') !== null) {
    videoListEl = document.querySelector('.list-video').children;
    videoListArr = Array.prototype.slice.call(videoListEl);

    modalVideoEl = document.querySelector('.popup-video');

    popupVideo = document.querySelector('iframe');
    popupVideoCloseEl = document.querySelector('.popup-video__close');

    for (let i = 0; i < videoListArr.length; i++) {
      videoListArr[i].addEventListener('click', (evt) => {showVideo(evt, videoListArr[i]);});
    }

    modalVideoEl.addEventListener('click', (evt) => {closeVideoModalByArea(evt);});
    popupVideoCloseEl.addEventListener('click', closeVideoModal);
  }

  //для вывода 3д в модальном окне
  if (document.querySelector('.media-3d__link') !== null) {
    link3dEl = document.querySelector('.media-3d__link');
    modalVideoEl = document.querySelector('.popup-video');
    popupVideo = document.querySelector('iframe');
    popupVideoCloseEl = document.querySelector('.popup-video__close');

    link3dEl.addEventListener('click', (evt) => {showVideo(evt, link3dEl);});

    modalVideoEl.addEventListener('click',(evt) => {closeVideoModalByArea(evt);});

    popupVideoCloseEl.addEventListener('click', closeVideoModal);

  }
};

export { getPopup };

