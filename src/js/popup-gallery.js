const getPopup = () => {
  if (document.querySelector('.media-list__item') !== null) {
    const galleryListEl = document.querySelectorAll('.media-list__item');
    const galleryListArr = Array.prototype.slice.call(galleryListEl);
    //let photoItemEl = document.querySelector('.media-list__item');

    const modalEl = document.querySelector('.popup');
    const popupFigureEl = document.querySelector('.popup__figure');
    const popupImg = document.querySelector('.popup__img');
    const popupTitle = document.querySelector('.popup__figcaption');
    const popupCloseEl = document.querySelector('.popup__close');
    const arrowRightEl = document.querySelector('.arrow__right');
    const arrowLeftEl = document.querySelector('.arrow__left');
    let index = 0;
    let curImg = galleryListArr[index].querySelector('.media-list__img');

    if (galleryListArr.length < 2) {
      arrowRightEl.style.display = 'none';
      arrowLeftEl.style.display = 'none';
    }

    popupCloseEl.addEventListener('click', function() {
      modalEl.style.display = 'none';
    });

    modalEl.addEventListener('click', function(event) {
      const target = event.target;
      if ((target !== popupImg) && (target !== arrowRightEl) && (target !== arrowLeftEl)) {
        modalEl.style.display = 'none';
      }
    });

    arrowRightEl.addEventListener('click', function() {
      if (index < galleryListArr.length - 1) {
        index++;
      } else {
        index = 0;
      }
      curImg = galleryListArr[index].querySelector('.media-list__img');
      popupImg.src = curImg.src;
      popupTitle.innerHTML = '' + (index + 1) + '/' + galleryListArr.length + ' - ' + curImg.title;
    });

    popupImg.addEventListener('click', function() {
      if (index < galleryListArr.length - 1) {
        index++;
      } else {
        index = 0;
      }

      curImg = galleryListArr[index].querySelector('.media-list__img');
      popupImg.src = curImg.src;
      popupTitle.innerHTML = '' + (index + 1) + '/' + galleryListArr.length + ' - ' + curImg.title;
    });

    arrowLeftEl.addEventListener('click', function() {
      if (index > 0) {
        index--;
      } else {
        index = galleryListArr.length - 1;
      }

      curImg = galleryListArr[index].querySelector('.media-list__img');
      popupImg.src = curImg.src;
      popupTitle.innerHTML = '' + curImg.title;
    });

    for (let i = 0; i < galleryListArr.length; i++) {
      galleryListArr[i].addEventListener('click', function(event) {
        index = i;
        event.preventDefault();
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

