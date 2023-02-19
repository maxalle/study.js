'use strict';

// filter - приймає колбек функцію з аргументами. Цей метод повинен ПОВЕРТАТИ з колбек функції, які дійсно підходять під певний критерій. 

// const names = ['max', 'popsicle', 'Ksu', 'William'];

// const shortNames = names.filter(name => {
//     return name.length < 5;
// });

// console.log(shortNames);

// map - цей метод дозволяє взяти початковий масив і змінити кожен елемент в ньому. Тоді ми отримаємо новий масив з новими даними

// const answers = ['ivAn', 'mAx', 'ranDy', 'Hello'];

// const result = answers.map(item => item.toLowerCase());

// console.log(result);

// Можна перезаписати масив answers, якщо задати йому оголошення через let, але через імутабельність - це нерекомендовано робити. Тому краще створювати окрему зміну

// every/some
// some - перебирає масив і виводить перше підходяще значення. Якщо передати в колбек функцію умову і вона виконається - то в такому випадку поверне true

const any = [4, 'qqe', 'wqeasea'];

// console.log(any.some(item => typeof(item) === 'number')); // якщо хоч один з елементів масиву число - поверне true

// console.log(any.every(item => typeof(item) === 'number')); // якщо всі елементи масиву числа - поверне true

// reduce - об'єднує весь масив в одне значення. Працює зі строками також

// const arr = [4, 5, 1, 3, 2, 6];

// const result = arr.reduce((sum, current) => sum + current);

// const res = ['apple', 'pear'];

// const res1 = res.reduce((sum, current) => `${sum}, ${current}`);

// console.log(res1);

// Object.entries

const obj = {
    max: 'persone',
    kate: 'persone',
    dog: 'animal',
    cat: 'animal'
}

const arr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(arr);