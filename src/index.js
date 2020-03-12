'use strict';

import toggleMenu from './modules/toggleMenu';
import togglePhones from './modules/togglePhones';
import togglePopupRepair from './modules/togglePopupRepair';
import checkInput from './modules/checkInput';

// меню бургер
toggleMenu();
// реализация открытия второго номера
togglePhones();
// окрытие модального окна 'popup-repair-types'
togglePopupRepair();
//проверка вводимых значений (еще не сделано :с)
checkInput();