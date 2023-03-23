'use strict';

// set - особливий вид колекції де кожен елемент масива може повторюватись лише 1 раз. Масив де кожне значення зустрічається лише 1 раз

const arr = ['Max', 'Kate', 'Yasha'];

const set = new Set(arr);

set.add('Ivan');
set.add('Max'); // при повторному використані set.add з однаковими значеннями, нічого не відбуватиметься
// SET працює швидше і оптимізованіше ніж звичайний масив з прописаним до його функціоналом як сет

console.log(set);

// set.delete(value);
// set.has(value);
// set.clear();
set.size;

// SET підтримує for .. of

// for (let value of set) console.log(value);

set.forEach((value, valueAgain, set) => {
    console.log(value, valueAgain);
})
// valueAgain зроблено для сумісності з map

console.log(set.values());
console.log(set.keys()); // зроблено для сумісності з map
console.log(set.entries()); // також

function unique(arr){
    // return new Set(arr);
    return Array.from(new Set(arr)); // Класика яка зустрічатиметься всюди. Дозволяє формувати звичайний масив з колекції сет
}