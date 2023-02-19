const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

btns[0].addEventListener('click', () => {
    if(!btns[1].classList.contains('red')){
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
})

wrapper.addEventListener('click', function(event){
    if(event.target && event.target.classList.contains('blue')){ // event.target задається в цьому випадку, так як тег br і йому схожі
        console.log('hello'); // не мають обробника подій і їх неможливо клікнути. Щоб не було помилок і все було правильно
    }
})

// Делегирование событий - смысл этого в том чтобы дочерним элементам добавлять обработчик событий, который будет проверять
// на какой элемент было осуществленно действие
// Делегування подій використовується для елементів які створюються динамічно також
// У випадку коли елементи створюються динамічно через js, перебір їх не дозволяє застосувати обробника подій


// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item[0]); // blue
// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if(btns[1].classList.contains('red')){
//     console.log('yup'); 
// }

// classList.length - довзоляє дізнатись кількість класів у об'єкта
// classList.item(id) - повертає клас за порядковим номером
// classList.add - додає клас
// classList.remove - прибирає клас
// classList.toggle - довзоляє вмикати та вимикати класи
// classList.contains - повертає true якщо є клас на елементі та false якщо клас відсутній