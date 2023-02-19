'use strict';

// Інкапсуляція через функції 

// function User(name, age){
//     this.name = name;
//     let userAge = age; // Створює зміну, яку неможливо отримати поза цим оточенням.

//     this.sayHi = function (){
//         console.log(`Hi, by ${this.name}, i'm ${userAge}`);
//     }

//     this.getAge = function(){
//         return userAge;
//     } 

//     this.setAge = function(age){
//         if(typeof(age) === 'number' && age > 0 && age < 110){
//             userAge = age;
//         } else {
//             console.log('error');
//         }
//     }
// }

// const max = new User('Max', 21);

// console.log(max.name);
// max.name = 'kate';
// console.log(max.getAge());
// max.age = 22;
// console.log(max);
// max.sayHi();

// Інкапсуляція через класи

class User{
    constructor(name, age){
        this.name = name;
        this._age = age; // Такий синтаксис говорить про те, що зміна робиться приватною і не має змінюватись ніяким способом, окрім через геттер і сеттер
    }

    #surname = 'Novikov'; // Створює приватну властивість класу. Ззовні неможливо отримати до неї доступ без аксесорів

    get age(){
        return this._age;
    }

    set age(age){
        if(typeof(age) === 'number' && age > 0 && age < 110){
            this._age = age;
        } else {
            console.log('error');
        }
    }
    sayHi(){
        console.log(`${this.name} ${this.#surname} and ${this._age}`);
    }

    get surname(){
        return this.#surname;
    }

    set surname(surname){
        this.#surname = surname;
    }
}

const max = new User('Max', '21');

console.log(max.name);
console.log(max.age);
max.age = 20;
console.log(max.surname); 
max.surname = 'Tkachuk';
max.sayHi();