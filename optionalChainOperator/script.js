'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);

// if(block) {
//     console.log(block.textContent);
// } дану конструкцію перевірки замінить try .. catch

// Оператор опціонального ланцюга(?.) робить перевірку зліва від себе на наявність властивості. Якщо властивість є, то спрацьовує
// виклик
// ?. хороший для зчитування, але є проблема при запису. Через це якщо об'єкт undefined, то запис в undefined чогось призведе до помилки

// block?.textContent = '123';

const userData = {
    name: 'Max',
    age: null
}

// if(userData && userData.skills && userData.skills.js)
console.log(userData.skills?.js);

userData.hey?.(); // використання ?. в випадку методів перевіряє спочатку метод на те чи існує. Якщо існує то викликає




console.log(block?.textContent);


console.log(1 + 2);