'use strict';

import toggleMenu from './modules/toggleMenu';
import togglePhones from './modules/togglePhones';
import sendForm from './modules/sendForm';
import togglePopup from './modules/togglePopup';
import hints from './modules/hints';
import accordion from './modules/accordion';
import repairTypesSlider from './modules/repairTypesSlider';
import toggleTransparency from './modules/toggleTransparency';
import reviewSlider from './modules/reviewSlider';
import portfolioSlider from './modules/portfolioSlider'; 
import portfolioPopupSlider from './modules/portfolioPopupSlider';
import partnerSlider from './modules/partnerSlider';
import scheme from './modules/scheme';


// меню бургер
toggleMenu();
// реализация открытия второго номера
togglePhones();
//проверка вводимых значений и отправка данных (в процессе)
sendForm();
// открытие popup-окон
togglePopup('repair-types', '#link-repair');
togglePopup('consultation', '.consultation-button');
togglePopup('design', '.link-list-designs');
togglePopup('privacy', '.link-privacy');

// показ подсказок
hints('formula');
hints('problems');
// виды ремонта
repairTypesSlider();
// документы
toggleTransparency();
// слайдер отзывов
reviewSlider();
//аккордеон
accordion();
// слайдер портфолио
portfolioSlider();

portfolioPopupSlider();

partnerSlider();

scheme();




