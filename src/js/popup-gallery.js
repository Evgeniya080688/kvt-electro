let galleryListEl = null;
let galleryListArr = null;

let modalEl = null;
let popupFigureEl = null;
let popupImg = null;
let popupTitle = null;
let popupCloseEl = null;
let arrowRightEl = null;
let arrowLeftEl = null;
let curImg = null;
let index = 0;

const closeModalByDefaltClick = (evt) => {
  const target = evt.target;
  if ((target !== popupImg) && (target !== arrowRightEl) && (target !== arrowLeftEl)) {
    modalEl.style.display = 'none';
  }
};

const closeModalByBtnClick = function() {
  modalEl.style.display = 'none';
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
  popupTitle.innerHTML = `${index-1}/${galleryListArr.length} - ${curImg.title}`;
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

    popupCloseEl.addEventListener('click', closeModalByBtnClick);

    modalEl.addEventListener('click', (evt) => {closeModalByDefaltClick(evt);});

    arrowRightEl.addEventListener('click', flipRight);

    arrowLeftEl.addEventListener('click', flipLeft);

    popupImg.addEventListener('click', flipRight);


    for (let i = 0; i < galleryListArr.length; i++) {
      galleryListArr[i].addEventListener('click', function(evt) {
        index = i;
        evt.preventDefault();
        modalEl.style.display = 'flex';
        curImg = galleryListArr[i].querySelector('.media-list__img');
        //настройки содержимого
        popupImg.src = curImg.src;
        popupImg.alt = curImg.alt;
        popupImg.title = curImg.title;
        popupTitle.innerHTML = '' + (index + 1) + '/' + galleryListArr.length + ' - ' + curImg.title;
        //настройки размеров
        popupImg.style.maxHeight = (0.8 * (screen.height)) + 'px';
        popupImg.style.maxWidth = (0.95 * (screen.width)) + 'px';
        popupFigureEl.style.height = (0.9 * (screen.height)) + 'px';
        arrowLeftEl.style.top = (0.35 * (screen.height)) + 'px';
        arrowRightEl.style.top = (0.35 * (screen.height)) + 'px';
        modalEl.style.height = (document.body.scrollHeight) + 'px';

        document.documentElement.scrollTop = 0;
      });
    }
  }

  if (document.querySelector('.list-video') !== null) {
    const videoListEl = document.querySelector('.list-video').children;
    const videoListArr = Array.prototype.slice.call(videoListEl);

    const modalVideoEl = document.querySelector('.popup-video');

    const popupVideo = document.querySelector('iframe');
    const popupVideoCloseEl = document.querySelector('.popup-video__close');

    for (let i = 0; i < videoListArr.length; i++) {
      videoListArr[i].addEventListener('click', function(e) {
        e.preventDefault();
        modalVideoEl.style.display = 'flex';

        //настройки содержимого
        popupVideo.src = this.href;
        modalVideoEl.style.height = (document.body.scrollHeight) + 'px';

        document.documentElement.scrollTop = 0;
      });
    }

    modalVideoEl.addEventListener('click', function(event) {
      const target = event.target;
      if (target !== popupVideo) {
        modalVideoEl.style.display = 'none';
      }
    });

    popupVideoCloseEl.addEventListener('click', function() {
      modalVideoEl.style.display = 'none';
    });
  }

  if (document.querySelector('.media-3d__link') !== null) {
    const link3dEl = document.querySelector('.media-3d__link');
    const modalVideoEl = document.querySelector('.popup-video');
    const popupVideo = document.querySelector('iframe');
    const popupVideoCloseEl = document.querySelector('.popup-video__close');

    link3dEl.addEventListener('click', function(e) {
      e.preventDefault();
      modalVideoEl.style.display = 'flex';

      //настройки содержимого
      popupVideo.src = this.href;
      modalVideoEl.style.height = (document.body.scrollHeight) + 'px';

      document.documentElement.scrollTop = 0;
    });


    modalVideoEl.addEventListener('click', function accumulate(event) {
      const target = event.target;
      if (target !== popupVideo) {
        modalVideoEl.style.display = 'none';
      }
    });

    popupVideoCloseEl.addEventListener('click', function() {
      modalVideoEl.style.display = 'none';
    });
  }
};

export { getPopup };

