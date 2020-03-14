'use strict';

import toggleMenu from './modules/toggleMenu';
import togglePhones from './modules/togglePhones';
import sendForm from './modules/sendForm';
import togglePopup from './modules/togglePopup';
import SliderCarousel from './modules/SliderCarousel';
import hints from './modules/hints';
import accordion from './modules/accordion';
import tranSlider from './modules/tranSlider';
import transpSlider from './modules/transpSlider';


// меню бургер
toggleMenu();
// реализация открытия второго номера
togglePhones();

//проверка вводимых значений и отправка данных (в процессе)
sendForm();
// открытие popup-окон
togglePopup('portfolio', '.portfolio-slider__slide-frame');
togglePopup('repair-types', '#link-repair');
togglePopup('consultation', '.consultation-button');
togglePopup('transparency', '.transparency-item__img');
togglePopup('design', '.link-list-designs');
togglePopup('privacy', '.link-privacy');

// показ подсказок
hints('formula');
hints('problems');
// виды ремонта
tranSlider();
transpSlider();

//аккордеон
accordion();




const partnerSlider = new SliderCarousel({
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

partnerSlider.init();

