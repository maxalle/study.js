'use strict';

const req = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Preparing the data..');
    
        const product = {
            name: 'TV',
            price: 2000
        } // зазвичай ці дані будуть проходити перевірку на відповідність і на їх основі формуватиметься проміс. Якщо дані пройшли перевірку - resolve, у іншому випадку reject
    
        resolve(product);
    }, 2000);    
});

console.log('Request data..');

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
        }, 2000);
    });
}).then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.damage = '3%';
            resolve(data);
        }, 2000);
    })
}).then(about => {
    about.modify = true;
    return about;
}).then(data => {
    console.log(data);
}).catch(() => {
    console.log('error');
}).finally(() => {
    console.log('finally');
})
// Проміси приймають 2 аргумента і ці аргументи - функції
// resolve - це коли обіцянка виконалась
// reject - обіцянка не виконалась
// finally - виконується в будь-яких умовах, не залежно чи виконана обіцянка чи ні. Параметром приймає колбек функцію
// Проміси мають 2 методи then та catch
// then - відповідає за resolve
// catch - відповідає за reject. У випадку якщо сталась помилка, всі then ігноруються і код переходить до catch
// Для найбільш якісного написання коду catch прописують в самому кінці ланцюжка
// для того щоб передати дані в then потрібно їх деяким чином заретурнить. Тобто в resolve передати data в параметри і в then аргумент
// reject записується в тому випадку коли ми робимо посилання на не існуючий файл, на не існуючий сервер, помилку сервера

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
}

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('ALL');
// });
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('First');
})
// Promise.all необіхдна для того щоб ми запевнились, що всі наші проміси виконались1 
// Promise.all це метод для обробки масива промісів. Необхідно це коли ми одночасно робим декілька запитів до серверів, наприклад з картинками. Сервера по різному відповідають
// І наприклад якщо ми хочемо щоб ці картинки всі використовувались, то в такому випадку нам треба дочекатись виконання всіх промісів щоб ми потім могли
// взаємодіяти з цими картинками

// Promise.race на відміну від promise.All чекає виконання лише самого першого промісу