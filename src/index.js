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
import partnerSlider from './modules/partnerSlider';
import scheme from './modules/scheme';
import design from './modules/design';
import typesRepairPopup from './modules/typesRepairPopup';
import designPopupSlider from './modules/designPopupSlider';


// меню бургер
toggleMenu();
// реализация открытия второго номера
togglePhones();
//проверка вводимых значений и отправка данных (в процессе)
sendForm();
// открытие popup-окон

togglePopup('consultation', '.consultation-button');
togglePopup('design', '.link-list-designs');
togglePopup('privacy', '.link-privacy');

togglePopup('repair-types', '#link-repair');
typesRepairPopup();
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

partnerSlider();

scheme();
design();
designPopupSlider();


