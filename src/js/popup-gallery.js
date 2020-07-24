"use strict";

if (document.querySelector('.media-list') !== null) {
	let galleryListEl = document.querySelector('.media-list').children;
	let galleryListArr = Array.prototype.slice.call(galleryListEl);
	//let photoItemEl = document.querySelector('.media-list__item');

	let modalEl = document.querySelector('.popup');
	let popupFigureEl = document.querySelector('.popup__figure');
	let popupImg = document.querySelector('.popup__img');
	let popupTitle = document.querySelector('.popup__figcaption');
	let popupCloseEl = document.querySelector('.popup__close');
	let arrowRightEl = document.querySelector('.arrow__right');
	let arrowLeftEl = document.querySelector('.arrow__left');
	let index = 0;
	let curImg = galleryListArr[index].querySelector('.media-list__img');

	if (galleryListArr.length<2) {
		arrowRightEl.style.display = "none";
		arrowLeftEl.style.display = "none";
	}

	popupCloseEl.addEventListener( "click", function(event) {
		modalEl.style.display = "none";
	});

	modalEl.addEventListener( "click", function(event) {
		let target = event.target;
		if ((target !== popupImg) && (target !== arrowRightEl) && (target !== arrowLeftEl)) {
			modalEl.style.display = "none";
		}
	});

	arrowRightEl.addEventListener("click", function() {
    	if (index < galleryListArr.length -1 ) {
    		index++;
    	} else {
    		index = 0;
    	}
    	curImg = galleryListArr[index].querySelector('.media-list__img');
    	popupImg.src = curImg.src;
    	popupTitle.innerHTML = "" + curImg.title;

    	
    });

    popupImg.addEventListener("click", function() {
    	if (index < galleryListArr.length -1 ) {
    		index++;
    	} else {
    		index = 0;
    	}
    	curImg = galleryListArr[index].querySelector('.media-list__img');
    	popupImg.src = curImg.src;
    	popupTitle.innerHTML = "" + curImg.title;
    });

    arrowLeftEl.addEventListener("click", function() {
    	if (index > 0 ) {
    		index--;
    	} else {
    		index = galleryListArr.length -1;
    	}
    	
    	curImg = galleryListArr[index].querySelector('.media-list__img');
    	popupImg.src = curImg.src;
    	popupTitle.innerHTML = "" + curImg.title;
    });

	for (let i=0; i < galleryListArr.length; i++) {
		galleryListArr[i].addEventListener( "click", function(event) {
			index = i;
			event.preventDefault();
			modalEl.style.display = "flex";
		    curImg = galleryListArr[i].querySelector('.media-list__img');
		    //настройки содержимого
		    popupImg.src = curImg.src;
		    popupImg.alt = curImg.alt;
		    popupImg.title = curImg.title;
		    popupTitle.innerHTML = "" + curImg.title;
		    //настройки размеров
		    popupImg.style.maxHeight  = (0.7*(screen.height)) +"px";
		    popupImg.style.maxWidth = (0.7*(screen.width)) + "px";
		    popupFigureEl.style.height  = (0.75*(screen.height)) +"px";
		    arrowLeftEl.style.top = (0.35*(screen.height)) + "px";
		    arrowRightEl.style.top = (0.35*(screen.height)) + "px";
		    modalEl.style.height = (document.body.scrollHeight ) + "px";
		    
		    document.documentElement.scrollTop = 0;
		});
	}	
	
}

if (document.querySelector('.list-video') !== null) {
	let videoListEl = document.querySelector('.list-video').children;
	let videoListArr = Array.prototype.slice.call(videoListEl);

	let modalVideoEl = document.querySelector('.popup-video');
	
	let popupVideo = document.querySelector('iframe');
	let popupVideoCloseEl = document.querySelector('.popup-video__close');
	
	for (let i=0; i < videoListArr.length; i++) {
		videoListArr[i].addEventListener( "click", function(e) {
			e.preventDefault();
			modalVideoEl.style.display = "flex";
		    
		    //настройки содержимого
		    popupVideo.src = this.href;
		    modalVideoEl.style.height = (document.body.scrollHeight ) + "px";
		    
		    document.documentElement.scrollTop = 0;
		});
	}

	modalVideoEl.addEventListener( "click", function(event) {
		let target = event.target;
		if (target !== popupVideo) {
			modalVideoEl.style.display = "none";
		}
	});

	popupVideoCloseEl.addEventListener( "click", function(event) {
		modalVideoEl.style.display = "none";
	});
}
