'use strict';

const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button');

// document.getElementByTagName, ById, ByClassName це все застарівші методи
// для сучасного використання краще юзати querySelector та querySelectorAll
// перевага їх в тому що вони мають метод forEach(); що дозволяє робити виборку
// з отриманої колекції елементів
// Для отримання класу чи інших елементів в querySelector необхідно вказувати
// їх css селектор: #, ., ::, та інші
// !ATTENTION отримання декількох елементів та навіть одного елементу через getElement та querySelector
// Перетворює всі вхідні дані в HTML Collection
// Array.from() дозволяє з легкістю конвертувати псевдомасиви які утворюються в наслідку
// HTML колекцій