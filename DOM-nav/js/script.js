// console.log(document.head); Head tag
// console.log(document.body); Body Tag
// console.log(document.documentElement); HTML tag

// console.log(document.body.childNodes);
// console.log(document.querySelector('#current').parentNode.parentNode); // result div.wrapper

console.log(document.querySelector('[data-current="3"]').previousElementSibling);

for (let node of document.body.childNodes){
    if (node.nodeName == '#text' || node.nodeName == '#comment'){
        continue;
    }
    console.log(node);
}

// Трапляються випадки коли необхідно перебрати ноди з псевдомасиву в ручну. В цьому допомагають умови через
// continue та break. continue дозволяє перестрибнути 1 крок, не прериваючи цикл, в той час коли break зупиняє повністю
// для перебору псевдомасивів використовують for ..of. 
// Щоб дізнатись nodeName можна побачити його в консолі нод

// previuousSibling, nextSibling - переміщуєтсья на 1 попередній ДОМ вузол та наступний відповідно. Проблема цих методів
// Що вони переміщуються саме по ДОМ Вузлам. Аналог для переміщення саме по ДОМ елементам являється 
// previousElementSibling, nextElementSibling - ці методи переходять на наступний ДОМ елеммент

// data-атрибути є доволі корисними і зручними для навігації по сторінці через джаваскрипт
// часто використовують data-modal, data-close, data-current. Якщо data-атрибут не містить значення, туда автоматично
// підставляється true

// parentNode - дозволяє подорожувати на 1 вкладеність ДОМ вузла вверх. Можна прописати декілька разів і тим самим підніматись ще вище
// parentElement - дозволяє подорожувати на 1 вкладеність ДОМ елементу

// childNodes - властивість яка дозволяє звертатись до всіх вкладених вузлів цього родителя.childNodes
// document.body.firstChild та lastChild дозволяють викликати перший та останій ДОМ вузол. Є припущення так як це псевдомасив, можна викликати
// за ідентифікатором також
// firstElementChild, lastElementChild - дозволяє звертатись до всіх вкладених елментів цього предка

// DOM елемент це елемент html, тег
// DOM вузол це елемент тексту на сторінці html, навіть перенос тегів, рахується ДОМ вузлом.
// <h1>3</h1> - де h1 це ДОМ елемент, 3 - це ДОМ Вузол