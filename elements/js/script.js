'use strict';

const    box = document.getElementById('box'),
         btns = document.getElementsByTagName('button'),
         circles = document.getElementsByClassName('circle'),
         hearts = document.querySelectorAll('.heart'),
         oneHeart = document.querySelector('.heart'),
         wrapper = document.querySelector('.wrapper');
box.style.backgroundColor = 'blue';
btns[1].style.borderRadius = '100%';

const div = document.createElement('div');
div.classList.add('black');

wrapper.append(div);
// hearts[0].before(div);
// hearts[0].after(div);

// circles[0].remove();
// hearts[0].replaceWith(circles[0]);

// Застарівші методи для того щоб вставляти елементи appendChild(), elem.insertBefore(what, whereBefore), wrapper.removeChild(hearts[1])
// wrapper.replaceChild(circles[0], hearts[0]);

// div.innerHTML = '<h1>hello world</h1>';
// div.textContent = 'hello';

// innerHTML та textContent - відрізняються тим що innerHTML вставляє елементи ХТМЛ і використовується лише для редагування
// через адміністратора. textContent отримується від користувача в целях безпеки, щоб неможливо було вставити src з посиланнями
// на інший сайт з сторонім скриптом або недозволяти вставляти ХТМЛ теги щоб не зламалась сторінка

div.insertAdjacentHTML("beforebegin", "<h2>hello</h2>")