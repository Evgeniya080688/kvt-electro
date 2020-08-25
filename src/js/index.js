"use strict";

import * as menu from './menu.js';
import * as banerAction from './banner.js';
import * as popupGal from './popup-gallery.js';
import * as tabs from './tabs.js';
import * as accordion from './accordion.js';
import * as barcode from './JsBarcode.all.min.js';

JsBarcode(".barcode").init();

if (document.querySelector('.info-blocks__item') !== null) {
	let blocks = document.querySelectorAll('.info-blocks__item');

	for(let block of blocks) {
		block.addEventListener( "click", function(e) {
			block.querySelector('.block__front').classList.toggle('block__front--active');
			block.querySelector('.block__back').classList.toggle('block__back--active');
		});	
	}		
}	



    


