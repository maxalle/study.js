'use strict';


const box = document.querySelector('.box');
const btn = document.querySelector('button');
// const width = box.clientWidth;
// const heigth = box.clientHeight; // дозволяє на основі цих параметрів визначати ширину екрану девайса і збільшувати контент якщо є місце
// const width = box.offsetWidth;
// const height = box.offsetWidth;
const width = box.scrollWidth;
const height = box.scrollHeight;
console.log(width, height);

btn.addEventListener('click', () => {
    // box.style.overflow = 'visible';
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
})

console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box);// дозволяє переглянути стилі Computed(які застосовані на елементі)
console.log(style);

// window.scrollBy(0, 400) - переміщує користувача під точки де він знаходиться зараз, на 400 пікселів вниз
// window.scrollTo(0, 400) - переміщує користувача на 400 пікселів вверх від положення де він знаходиться зараз

// В ДЖС немає можливості працювати з псевдоелементами, але стилі їх отримати можна через Computed
// інлайн стилі завжди перебивають computed стилі

// завдяки scrollTop можна зробити стрілочку, яка повертає на самий верх сторінки

// clientWidth/Height дозволяє подивитись висоту і ширину елемента без врахування скролу
// offsetWidth/Height дозволяє подивитись висоту і ширину елемента включачи скрол у його розмір
// scrollTop та scrollLeft допоможуть в реалізації прогресу прогортаної частині сторінки чи тексту
// scrollTop та scrollLeft можуть бути модифіковані навідміну від client та offset

// Координати розраховуються від лівого верхнього кутка
// DOM Rect - right це відстань від лівої сторони екрану до правої сторони елементу
// bottom розраховується від верхньої межі елементу до нижньої межі елементу