'use strict';

import { tns } from "tiny-slider";
// import { tns } from "./node_modules/tiny-slider/src/tiny-slider"; імпорт файлів в 20% випадків з папки node_modules. Інші 80% припадають на імпорт напряму

tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true
  });

const myModule = require('./main');

const myModuleInstance = new myModule();

myModuleInstance.hello();
myModuleInstance.bye();