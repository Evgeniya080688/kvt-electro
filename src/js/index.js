import {getMenu} from './menu.js';
import {getBunner} from './banner.js';
import {getPopup} from './popup-gallery.js';
import {getTabs} from './tabs.js';
import {getAccordeon} from "./accordion.js";
import * as barcode from './JsBarcode.all.min.js';

JsBarcode(".barcode").init();
getAccordeon();
getTabs();
getPopup();
getBunner();
getMenu();

if (document.querySelector('.info-blocks__item') !== null) {
	let blocks = document.querySelectorAll('.info-blocks__item');

	for(let block of blocks) {
		block.addEventListener( "click", function(e) {
			block.querySelector('.block__front').classList.toggle('block__front--active');
			block.querySelector('.block__back').classList.toggle('block__back--active');
		});	
	}		
}	







    


