'use strict';

const user = {
    name: 'Max',
    surname: 'Smith',
    birthday: '13/06/2001',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.name}`);
    }
}

for (let key in user){
    console.log(user[key]);
}

const arr = ['b', 'a', 'c'];
Array.prototype.someMethod = function(){};

for (let key in arr){
    console.log(arr[key]);
}

for (let key of arr){
    console.log(key);
}

// строки та масиви являються ітеруємими об'єктами, в той час коли звичайний об'єкт не ітеруємий
// Це можна перевірити завдяки команді 
// console.dir(arr);
// >Array
//  Symbol(Symbol.iterrator): f values() - означає що даний об'єкт являється ітеруємим
// До них відносять масиви, строки, типізовані масиви, map, set та DOM-колекції як NodeList та HTMLCollection
// Строго відповідає перебору. Так як воно було записано в оригіналі, так воно і буде виконуватись
// Ітеруємі об'єкти це об'єкти які можна перебрати, містять в собі Symbol.iterator
// Symbol.iterator це метод який повертає метод з методом next()

// for (let key in 'string'){
//     console.log('string'[key]);
// }

// for .. in перебирає не обов'язково по порядку. Його не рекомендовано використовувати з масивами і строковими типами даних

// for .. of проходиться по перебираємим значенням масива. Являється ітеруємим


const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHi: function(){
        console.log('hi');
    }
}

salaries[Symbol.iterator] = function() {
    return {
        current: this.john,
        last: this.ann,

        next(){
            if(this.current < this.last){
                this.current = this.current + 500;
                return {done: false, value: this.current}
            } else {
                return {done:true}
            }
        }
    }
}