'use strict';

// const num = new Number(3);
// console.log(num);

// const num1 = new Function(3); // якщо така функція буде мати в собі методи та властивості, то тоді вона створить новий об'єкт
// console.log(num1); 

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello, ${this.name}`);
    }
}

User.prototype.exit = function(){ // Через prototype функції-конструктори можуть редагуватись в цілях модифікації, на випадок
    console.log(`Exit: ${this.name}`); // якщо ми це не можемо зробити, або заборонено
}

const Max = new User('Max', 1);
const Alex = new User('Alex', 2);

console.log(Max);
console.log(Alex);

// В ES6 з'явились класи. Це синтаксичний цукор і вони приходять на заміну функціям конструкторам після ES5