'use strict';

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

// boxesQuery[0].remove();
// boxesGet[0].remove();

// for (let i = 0; i < 5; i++){
//     const div = document.createElement('div');
//     div.classList.add('box');
//     // document.body.append(div);

//     // boxesGet[boxesGet.length] = div; // спроба роботи з живою колекцією обернеться помилкою
// }

// console.log(boxesQuery); // Покаже 3 div.box
// console.log(boxesGet); // Покаже 1 div.box

// console.log(document.body.children);

// querySelector це статична колекція
// getElements це жива колекція
// Різниця між колекціями це те що статична колекція не змінна та має методи для роботи з ними. forEach, keys, item, entries
// Жива колекція має лише length, item. Працювати з ними неможливо, за винятком що потрібно використовувати один прийом
// Прийом полягає в тому, щоб живу колекцію перевести в звичайний масив, але звичайний масив стане тоді статичною колекцією
// В такому випадку цей прийом краще використовувати коли потрібно віслідкувати певні зміни на сайті, а лише потім затвердити результат

// ПОШУК ЕЛЕМЕНТА

// boxesQuery.forEach(box => {
//     if (box.matches('.this')) console.log('this one');
// })

console.log(boxesQuery[0].closest('.wrapp'));
// box.matches(attribute) - дозволяє здійснювати пошук елемента не лише за селектором класу, але й будь яким іншим атрибутом

// .closest(attribute) - шукає найближчого предка по співпадінням. Якщо такого немає - повертає null