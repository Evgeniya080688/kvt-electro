import { getMenu } from './menu.js';
import { getBanner } from './banner.js';
import { getPopup } from './popup-gallery.js';
import { getTabs } from './tabs.js';
import { getAccordeon } from './accordion.js';
import { getInfoBlocks } from './info-blocks.js';
import * as barcode from './JsBarcode.all.min.js';

JsBarcode('.barcode').init();
getAccordeon();
getTabs();
getPopup();
getBanner();
getMenu();
getInfoBlocks();
