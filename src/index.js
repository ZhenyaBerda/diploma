'use strict';

import toggleMenu from './modules/toggleMenu';
import togglePhones from './modules/togglePhones';
import togglePopupRepair from './modules/togglePopupRepair';
import sendForm from './modules/sendForm';
import togglePopupPrivacy from './modules/togglePopupPrivacy';
import SliderCarousel from './modules/SliderCarousel';
import hints from './modules/hints';

// меню бургер
toggleMenu();
// реализация открытия второго номера
togglePhones();
// окрытие модального окна 'popup-repair-types'
togglePopupRepair();
//проверка вводимых значений и отправка данных (в процессе)
sendForm();
// открытие окна с политикой
togglePopupPrivacy();
// показ подсказок
hints();

// слайдер-карусель


const carousel = new SliderCarousel({
    main: '.partner-wrapper',
    wrap: '.partners-slider',
    next: '#partners-arrow_right',
    prev: '#partners-arrow_left',
    slidesToShow: 3,
    infinity: true,
    responsive: [
        {
            breakpoint: 768,
            slideToShow: 2
        },
        {
            breakpoint: 575,
            slideToShow: 1
        }
    ],
});

carousel.init();
