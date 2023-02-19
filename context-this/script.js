'use strict';

// function showThis(a, b){
//     console.log(this);
//     function sum(){
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a: 15,
//     b: 10,
//     sum: function(){
//         // console.log(this); // те саме що console.log(obj);
//         function shout(){
//             console.log(this); // В такому випадку контекст this втрачається, бо ця функція являється функцією методу, тобто не належить об'єктові
//         }
//         shout();
//     }
// }
// obj.sum();

function sayName(surname){
    console.log(this);
    console.log(this.name + ` ${surname}`);
}

const userKate = {
    name: 'Kate'
}

sayName.call(userKate, 'Tkachuk'); // метод виклику функції з прив'язкою контексту this до об'єкту. Додаткові параметри або параметри функції записуються через кому
sayName.apply(userKate, ['Tkachuk']); // альтернативний метод, приймає в параметри масив даних

function count(num){
    return this*num;
}

const double = count.bind(2); //замість this буде підставлятись 2
console.log(double(3)); // double це нова функція, в якої жостко прив'язаний контекст до 2
// bind створює нову функцію і під неї підв'язує контекст

// 1) коли викликається this без строгого режиму, така функція повертає глобальний контекст виклику window
// Якщо увімкнений строгий режим, то this поверне undefined
// Неважливо скільки разів вкладена функція, якщо викликається її контекст this, то поверне undefined в строгому режимі
// 2) Контекст виклику в методі об'єкта завжди повертає цей самий об'єкт
// 3) this в конструкторах та класах - це новий екземпляр об'єкта
// const userMax = new user('Max', 24);
// userMax це вже об'єкт, new user('Max', 24) - це екземпляр об'єкта, де параметри являються властивостями для конструктора
// 4) Ручна прив'язка this це call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', function(){ // стрілочну функцію слід використовувати в тому випадку, якщо не буде портеби звертатись до контексту this
    console.log(this); // Контекстом виклику буде сам елемент, але не завжди
    this.style.backgroundColor = 'red'; // в усіх інших ситуаціях this == event.target
})

const obj = {
    num: 5,
    sayNumber: function(){
        const say = () => {
            console.log(this.num);
        }

        say();
    }
}

obj.sayNumber();

// стрілочна функція не має свого контексту this. Вона бере його від свого предка. Методи об'єкта, які мають стрілочну фунцію
// передають їй в контекст виклику свій об'єкт

const calc = a => a * 2; // скорочений запис стрілочної функції. якщо функція в 1 строчку, то return підставляється автоматично
// для передачі більше ніж одного параметру, необіхдно використовувати дужки (a, b)