'use strict';

const toggleMenu = () => {
    // получаем элементы
    const popupMenu = document.querySelector('.popup-menu'),
        menuDialog = document.querySelector('.popup-dialog-menu');

    const handlerMenu = () => {
        menuDialog.classList.toggle('showHide-menu');
    };

    document.body.addEventListener('click', (event) => {
        const target = event.target;

        // если нажали на бургер => открываем меню
        if (target.closest('.menu__icon')) {
            popupMenu.style.visibility = 'visible';
            handlerMenu();
            return;

        }

        // нажали вне меню || на крестик => закрываем меню
        if (!target.closest('.popup-dialog-menu') && menuDialog.classList.contains('showHide-menu') ||
            target.closest('.close-menu')) {
            popupMenu.style.visibility = 'hidden';
            handlerMenu();
        }
    });
};

export default toggleMenu;