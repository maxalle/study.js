'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest(); // не актуальний у використані, але може зустрітись у проектах. Самий перший спосіб використання AJAX

    request.open('GET', 'js/current.json'); // open() збирає дані 
    request.setRequestHeader('Content-type', 'application-json; charset=utf-8'); // використовується щоб обозначити, що за дані ми запрошуємо у сервера
    request.send(); // залежить від методу передачі. Якщо GET - то просто запрошуємо дані у сервера. POST - передаємо дані серверу

    request.addEventListener('load', () => {
         if( request.status === 200){
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
         } else {
            input.value = 'Smth wrong';
         }
    })
    // status показує статус запиту. Коди на вікіпедії
    // statusText текстова інформація/описання від серверу
    // response(відповідь) - те що дав бекен. Використовується на клієнті
    // readyState - стейт готовності відповіді від серверу. від 0 до 4
    // loadstart - початок завантаження

    // event.readystatechange - відслідковує статус готовності нашого запиту в даний момент
    // event.load - спрацьовує в тому випадку коли повністю запит завантажився і ми отримали результат
})
// для json файлів - application-json

// send приймає також параметр body - інформація для передачі, але при методі GET, параметр не вказується

// input - подія відбувається тоді, коли щось записується чи видаляється з інпуту

// method - найбільш популярні GET, POST. GET використовується для публічної інформації, такі як запити, налаштування пошуку
// POST шифрується і використовується для публікацій та створені нової інформації
// url - шлях до нашого сервера. Це може буть файлик або щось інше
// async - асинхрон. За замовчуванням true. Виконується не залежно завантажилась сторінка чи ні. Майже ніколи не перемикається в значення false
// шлях має формуватись відносно index.html
// login та pass роблять запит даних для виконання цієї дії, якщо розділені по правам