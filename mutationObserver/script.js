'use strict';

const box = document.querySelector('.box');

let observer = new MutationObserver(mutationRecords => { // функція обробник
    console.log(mutationRecords); // Які дії прийняти на випадок зміни контенту через contenteditable
});

observer.observe(box, {
    childList: true,
}); // слідкує за яким об'єктом, що саме відслідковувати

// ******************** Прочитати документацію з MutationObserver та ResizeObserver ******************
// https://developer.mozilla.org/ru/docs/Web/API/MutationObserver
// https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord 
// https://learn.javascript.ru/mutation-observer#ispolzovanie-dlya-integratsii
// https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
// https://www.youtube.com/watch?v=M2c37drnnOA