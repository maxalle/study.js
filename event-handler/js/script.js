const    overlay = document.querySelector('.overlay'),
         btn = overlay.querySelector('button');

// btn.onclick = function() {
//     alert('click');
// } Застарівший спосіб. Проблеми такого способу це те що видалити функціонал після цього неможливо
// а всі наступні події перезаписуються
let i = 0;
const deleteElement = (event) => {
    console.log(event.target);
    i++;
    if( i == 2){
        btn.removeEventListener('click', deleteElement);
        overlay.removeEventListener('click', deleteElement);
    }
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

// Третім параметром в EventListener передається опціональне значення яке дозволяє викликати обробник подій раз, або налаштовувати
// більш гибким способом
// {once: true} - параметр який довзоляє виконувати обробник подій лише 1 раз 

// колбек функцію для eventListener краще виносити в окрему змінну, щоб потім можна було видалити її
// це дозволить оптимізувати код. Потрібно саме винести колбек в окрему зміну, бо якщо створити нову, то вони не будуть дорівнювати
// одна одній, так само як з об'єктами. Вони мають посилання

// Видалення EventListener зазвичай приходиться на умови
// Всплитие событий - это поведение джаваскрипта, когда срабатывает обработчик событий сначало на самом нижнем уровне, потом на его родителе
// и поднимается все выше и выше
// Когда происходит вспылтие событий, event.target все равно будет выводить самый нижний елемент
// В случае если заменить event.target на event.currentTarget, тогда поведение измениться на описаное выше
// На практике это мало применимо но необходимо знать о таком методе

// event.preventDefault() - відміняє усі стандарті поведінки браузера відносно елементу, наприклад як виділення тексту
// зміна коліру у посилання чи підсвітка його юрл при наведені. 
// event.preventDefault() - повинен записуватись в самому початку колбек функції обробника подій

// Правильне оформлення обробників подій - через EventListener. Вони не перезаписують об'єкти, кожні наступні
// події додаються в чергу подій і після чого послідно виконуються. На один об'єкт таким методом
// можна накласти декілька обробників подій на один той самий елемент

// В колбек функцію завжди першим параметром передається обробник event(або e), лише після цього
// записуються всі інші параметри через кому

// ******************************Потрібно перепройти тему з callback функціями******************************

// Події миші:
// mouseenter  - подія відбувається при наведені миші на елемент
// click       - подія відбувається при кліку на елемент
// dblclick    - подія відбувається при двойному кліку на елемент
// contextmenu - відбувається при правому кліку
// mousemove   - переміщення курсора в межах певного об'єкту
// mouseover   - курсор миші наведений на теперішній елемент
// mouseup     - відпущено кнопку миші в межах певного елементу
// mousedown   - натиснуто кнопку миші в межах певного елементу
// Всі елементи HTML окрім: APPLET, BASE, BASEFONT, BDO, BR, FONT, FRAME, FRAMESET, HEAD, HTML, IFRAME, ISINDEX, META, PARAM, SCRIPT, STYLE, TITLE

// Події клавіатури:
// keypress - нажата і відпущена клавіша
// keydown  - нажата клавіша на клавіатурі
// keyup    - відпущена клавіша на клавіатурі

// Події на формах:
// focus - Отримання елемента форми, або перехід на його завдяки табуляції(підсвітка певного поля): 	A, AREA, BUTTON, INPUT, LABEL, SELECT, TEXTAREA
// blur - виникає при натисканні вне елементу, відхід від його, перейшли на інше поле. Втрата фокусу даного елементу: 	A, AREA, BUTTON, INPUT, LABEL, SELECT, TEXTAREA
// change - Зміна значень елементів форми. Виникає після втрати елементом фокусу, тобто після події blur: INPUT, SELECT, TEXTAREA
// reset - Зкидання даних форми, поля. Очищення всіх полей: FORM
// select - Обведення тексту мишкою чи клавішами: INPUT, TEXTAREA
// submit - Відправка даних форми

// https://developer.mozilla.org/ru/docs/Web/Events - довідка по подіям
// https://developer.mozilla.org/ru/docs/Web/API/EventTarget/removeEventListener - removeEventListener
// https://developer.mozilla.org/ru/docs/Web/API/Event - об'єкти події 
// https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener - addEventListener
// https://oddler.ru/blog/i63 - Простий список подій