'use strict';

const togglePopupRepair = () => {
    const popupRepair = document.querySelector('.popup-repair-types'),
        menuDialog = document.querySelector('.popup-dialog-menu'),
        popupMenu = document.querySelector('.popup-menu');

    document.body.addEventListener('click', (event) => {
        const target = event.target;

        //если мы нажали нужную ссылку => открываем модальное окно
        if (target.closest('#link-repair')) {
            popupRepair.style.visibility = 'visible';

            if (menuDialog.classList.contains('showHide-menu')) {
                menuDialog.classList.remove('showHide-menu');
                popupMenu.style.visibility = 'hidden';

            }
        }

        if (target.closest('.close')) {
            popupRepair.style.visibility = 'hidden';
        }
    });
};

export default togglePopupRepair;