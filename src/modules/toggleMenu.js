'use strict';

const toggleMenu = () => {
    // получаем элементы
    const popupMenu = document.querySelector('.popup-menu'),
        menu = document.querySelector('.popup-dialog-menu');



    document.body.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;

        if (target.closest('.menu')) {
            popupMenu.style.visibility = 'visible';

            //popupMenu.classList.add('activeMenu');
            menu.classList.add('showMenu');
        }
    });
};

export default toggleMenu;