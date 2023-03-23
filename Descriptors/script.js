'use strict';

// Приховані атрибути. Їх ще називають флагами
// Існує 3 флаги:
// - writable. Якщо в позиції тру, то властивість можна змінити. Якщо фолс то лише для читання
// - enumerable. Якщо в позиції тру, то властивість буде перечислятись в циклі. Якщо ні то цикли будуть його ігнорувати
// - configurable. Якщо в позиції тру, то властивість можна буде змінити
// За замовчуванням стоять в позиції тру

const user = {
    name: 'Max',
    surname: 'Smith',
    birthday: '13/06/2001',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.name}`);
    }
}
Object.defineProperty(user, 'birthday', {writable: false});

Object.defineProperty(user, 'showMyPublicData', {enumerable: false});
console.log(Object.getOwnPropertyDescriptor(user, 'name')); // команда щоб оглянути дескриптори властивості
// першим параметром приймає об'єкт, другим - назву властивості

Object.defineProperties(user, {
    name: {writable: false},
    surname: {enumerable: false},
    showMyPublicData: {writable: false}
})
// defineProperties приймає 2 значення. 1 - об'єкт, 

// Object.defineProperty(user, 'gender', {value: 'male'});
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));
// user.name = 'Yasha'; // error
// Object.defineProperty приймає 3 значення. 1 - об'єкт. 2 - властивість. 3 - флаг, або список флагів в об'єкті
// defineProperty може створювати нові властивості, притому якщо не встановлювати флаги, то вони автоматично будуть false

// Object.is перевіряє чи два об'єкти є різними, ігноруючи систему посилань об'єктів