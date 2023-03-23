'use strict';

function* generator(){
    yield 'M';
    yield 'A';
    yield 'X';
}

const str = generator();
console.log(str.next());
console.log(str.next());
console.log(str.next());

// Функції-генератори - це функції, які прикожному наступному виклику, повині повертати послідовні значення.
// синтаксис ФГ function* funcName або function *funcName. Перший варіант вітається краще ніж другий
// Ключове слово для оголошення наступного послідовного результату yield
// Щоб отримати наступний послідовний результат, необхідно використати властивість next
// Результат такої функції - об'єкт який повертає 2 властивості value та done. value - значення ФГ, done - чи завершилась послідовність

function* gen(n){
    for(let i = 0; i < n; i++){
        yield i;
    }
}

const count = gen(5);
console.log(count.next().value);
console.log(count.next().value);
console.log(count.next().value);

// ФГ з циклом працює інакше ніж я думав. Спочатку запускається цикл, виконується крок ітерації, після чого код функції зупиняється
// та чекає наступного викликку і так до кінця
// Якщо потрібно запустити ФГ максимум разів

for ( let k of count(7)){
    console.log(k);
}