const btn = document.querySelector('.btn');
let   timer, // Змінна повина бути оголошена в цьому місці, так як обробник подій створює локальну область бачення і clearInterval
      i = 0; // Дозволить відслідковувати скільки разів повторилась асинхрона функція setInterval
let   pos = 0; 

// function myAnimation(){
//     const elem = document.querySelector('.box');
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame(){
//         if(pos === 300){
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }

function myAnimation(){
    pos++;
    elem.style.top = pos + 'px';
    elem.style.left = pos + 'px';
    
    if(pos < 300){
        requestAnimationFrame(myAnimation);
    }
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));
// btn.addEventListener('click', () => {
//     // const timer = setTimeout(test, 2000, 'hello');
//     timer = setInterval(logger, 2000, 'hello');
// });
 
// function logger() {
//     console.log("text");
//     if(i === 3){
//         clearInterval(timer);
//     }
//     i++;
// };

// let id = setTimeout(function log() {
//     console.log('Hellooo');
//     id = setTimeout(log, 500);
// }, 500); // чекає пів секунди після чого запускає log

// setTimeout відноситься до асинхроних функцій і повині записуватись в зміну, щоб була можливість їх зупинити

// setTimeout - дозволяє встановити таймер, при якому через певний час програватиметься певний код
// Першим параметром після функції приймає кількість мілісекунд. Наступними параметрами йдуть аргументи функції
// Також може приймати замість внутрішньої функції інші функції як змінні
// function expression повинна знаходитись перед об'явою setTimeout якщо є потреба в її

// clearInterval - зупиняє таймер та інтервал через змінну

// ******РІЗНИЦЯ МІЖ РЕКУРСИВНИМ setInterval та setTimeout******
// Якщо setInterval матите затримку в 500мс, а функція яку він викликає відпрацьовує за 3 секунди
// то він не стане чекати затримку, а порахує час виконання функції як затримку
// В такому випадку краще використовувати рекурсивний setTimeout через відсутність такої проблеми
// Це може призвести до дуже поганої оптимізації
// setTimeout завжди буде чекати відведений час на функцію та на таймаут