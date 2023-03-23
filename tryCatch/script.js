'use strict';

// try{
//     console.log('Working..');
//     console.log(a);
// } catch(error){
//     console.log(error);
//     console.log(error.name); // Назва помилки ReferenceError
//     console.log(error.message); // повідомлення помилки 'a is not defined'
//     console.log(error.stack); // стек помилки, що сприяло їй 'Reference error: a is not defined. at script.js:5'
// }

try{
    document.querySelector('.active').addEventListener('click', () => {
        console.log('click');
    });
} catch(e) {
    console.log(e);
}

console.log('working')
// конструкція try .. catch дозволяє відловлювати помилки в коді.
// Якщо в блоці коду try виникне будь-яка помилка, код переходить до блоку catch
// Весь код який записаний після конструкції try .. catch, працюватиме далі

// try catch може викликатись на випадок, якщо сайт багатосторінковий, а скрипт 1, то робити перевірку "Якщо на нашій сторінці існують
// такі елементи, то виконується певний функціонал. Якщо немає, то вкидуємо catch і модулі йдуть далі"