'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        })
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) => {
                if( target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })

    hideTabContent();
    showTabContent(); // В ES6 з'явилась можливість назначати параметри для аргументів за замовчуванням, просто присвоївши їм значення. Це дозволяє викликати функцію без аргументів

    //timer
    const deadline = '2023-06-13'; // в майбутньому може статись ситуація прив'язки дати до адміністративної панелі і там буде інпут з таймом дати і він буде повертати такого типу строку

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date());  // методи parse прописуються для того щоб код був ідентичний і легше читався

              if( t <= 0){
                days = 0;
                hours = 0;
                minutes = 0;
                seconds = 0;
              } else {
                days = Math.floor(t / (1000 * 60 * 60 * 24)),
                hours = Math.floor((t / (1000 * 60 * 60) % 24)),
                minutes = Math.floor((t / 1000 / 60) % 60), 
                seconds = Math.floor((t / 1000) % 60);
              }

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    }

    function getZero(num){
        if (num >= 0 && num < 10){
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock(); // викликається для того щоб ініціалізувати дату до timeInterval, щоб уникнути мерехтіння дати під час перезавантаження
        
        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    // Modal

    // const modal = document.querySelectorAll('[data-modal]'),
    //       close = document.querySelector('[data-close]');

    // modal.forEach(item => {
    //     item.addEventListener('click', () => {
    //         document.querySelector('.modal').style.display = 'block';
    //     })
    // })

    // close.addEventListener('click', () => {
    //     document.querySelector('.modal').style.display = 'none';
    // })

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');

    function closeModal(){
        modal.classList.add('hide');
        modal.classList.remove('show');
        // modal.classList.toggle('show');
        document.body.style.overflow = '';
    }

    function openModal(){
        modal.classList.add('show');
        modal.classList.remove('hide');
        // modal.classList.toggle('show'); // альтернативна реалізація через тогл класів
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal)
    });
    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if(e.target === modal){
            closeModal();
        }
    })

    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape' && modal.classList.contains('show')){
            closeModal();
        }
    })

    // const modalTimerId = setTimeout(openModal, 5000);

    function showModalByScroll(){
        if( window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1){
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll); // Інода трапляється баг, коли модальне вікно не відображається. Тому загальну висоту документа необхідно відняти 1 піксель

    // Classes

        class MenuCard {
            constructor(img, alt, subtitle, descr, price, parentSelector, ...classes) {
                this.img = img;
                this.alt = alt;
                this.subtitle = subtitle;
                this.descr = descr;
                this.price = price;
                this.parent = document.querySelector(parentSelector);
                this.classes = classes; // параметр за замовчуванням прописати через оператор АБО не вийде, так як рест оператор працює з масивами
                this.transfer = 41; // в майбутньому можна зробити щоб динамічно приходив через НБУ
                this.changeToUAH();
            }

            changeToUAH() {
                this.price = this.price * this.transfer;
            }

            render() {
                const element = document.createElement('div');
                this.element = 'menu__item';
                if (this.classes.length === 0){
                    element.classList.add(this.element);
                } else {
                    this.classes.forEach(className => element.classList.add(className));
                }
                element.innerHTML = `
                        <img src=${this.img} alt=${this.alt}>
                        <h3 class="menu__item-subtitle">${this.subtitle}</h3>
                        <div class="menu__item-descr">${this.descr}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                        </div>`;
                this.parent.append(element);
            }
        }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню “Фитнес”',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
        
    ).render(); // альтернативний синтаксис, при якому посилання на об'єкт не зберігаються і це допомагає зберегти пам'ять

    new MenuCard(
        "img/tabs/elite.jpg",
        'elite',
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        13,
        '.menu .container',
        
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        'post',
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ',
        11,
        '.menu .container',
        
    ).render();
});