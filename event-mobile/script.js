'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // touchstart - прикосновение при касании к елементу
    // touchmove - срабатывает при смещении пальцан а елементе
    // touchend - как палец оторвался от елемента срабатывает событие
    // touchenter - когда палец заходит на поле с елементом события
    // touchleave - когда ушел за пределы елемента
    // touchcancel - 

    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        console.log('Start');
    })

    box.addEventListener('touchmove', (e) => {
        console.log('Move');
    })

    box.addEventListener('touchend', (e) => {
        console.log('end');
    })
})