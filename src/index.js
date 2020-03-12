'use strict';

import toggleMenu from './modules/toggleMenu';
import togglePhones from './modules/togglePhones';
import togglePopupRepair from './modules/togglePopupRepair';
import checkInput from './modules/checkInput';
import SliderCarousel from './modules/SliderCarousel';

// меню бургер
toggleMenu();
// реализация открытия второго номера
togglePhones();
// окрытие модального окна 'popup-repair-types'
togglePopupRepair();
//проверка вводимых значений (еще не сделано :с)
checkInput();

// слайдер-карусель


const carousel = new SliderCarousel({
    main: '.partner-wrapper',
    wrap: '.partners-slider',
    next: '#partners-arrow_right',
    prev: '#partners-arrow_left',
    slidesToShow: 3,
    infinity: true,
    responsive: [{
        breakpoint: 1024,
        slideToShow: 3
    },
    {
        breakpoint: 768,
        slideToShow: 2
    },
    {
        breakpoint: 576,
        slideToShow: 1
    }
    ],
});

carousel.init();
