'use strict';

const parsone = {
    name: 'Alex',
    tel: '+380545345353',
    parents: {
        mommy: 'Kate',
        daddy: 'Max'
    }
}

const clone = JSON.parse(JSON.stringify(parsone)); // JSON дозволяє створювати глибокі клони об'єктів через такий простий запис
clone.parents.mommy = 'Nate';
clone.parents.daddy = 'Moxi';
console.log(parsone);
console.log(clone);

// JSON зручніший за XML, так як читається легше і важить меньше
// JSON - JavaScript Object Notation - текстовий формат обміну даними. Використовується не лише для обміну, але й для зберігання таблиць
// баз даних. Може використовуватись будь-якими базами даних
// JSON parse - парсить формат JSON і перетворює його в звичайний об'єкт
// Головне правило JSON всі кавичкі мають бути подвійними ""
// JSON stringify - метод який перетворює об'єкт в формат JSON
