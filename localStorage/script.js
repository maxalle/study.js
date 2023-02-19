'use strict';

// localStorage.setItem('key', 'value'); // команда для запису даних в localStorage
// localStorage.getItem('key'); // команда для отримання даних localStorage
// localStorage.removeItem('key'); // команда для того щоб прибрати пару ключ-значення localStorage
// localStorage.clear(); // команда щоб очистити localStorage

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

      if(localStorage.getItem('isChecked')){
        checkbox.checked = true;
      }

if (localStorage.getItem('bg') === 'changed'){
    // localStorage.removeItem('bg');
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () =>{
    if (localStorage.getItem('bg') === 'changed'){
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});
