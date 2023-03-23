'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    // elem.style.height = `${h || 200}px`; // проблема оператора || це те що він 0 сприймає як значення false
    // в цій ситуації може передаватись значення 0 і тоді результат буде не той якій очікувався

    // в такому випадку приходить на порятунок оператор ??(нульового злиття)
    // nullish видає за false лише null та undefined

    // nullish видає помилку при використані разом з &&. Це зроблено для уникнення незрозумілих ситуацій
    elem.style.width = `${w ?? 200}px`;
}

changeParams(box, newHeight, newWidth);