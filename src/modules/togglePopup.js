'use strict';

const togglePopup = (popupClass, linkClass) => {
    const popup = document.querySelector(`.popup-${popupClass}`),
        menuDialog = document.querySelector('.popup-dialog-menu'),
        popupMenu = document.querySelector('.popup-menu');;

    document.body.addEventListener('click', (event) => {

        const target = event.target;

        // открываем окно
        if (popup) {
            if (target.closest(linkClass)) {
                popup.style.visibility = 'visible';

                if (menuDialog.classList.contains('showHide-menu')) {
                    menuDialog.classList.remove('showHide-menu');
                    popupMenu.style.visibility = 'hidden';
                }
                return;
            }

            // закрываем окно
            if (!target.closest(`.popup-dialog-${popupClass}`) || target.closest('.close')) {
                if (popup.style.visibility === 'visible') {
                    popup.style.visibility = 'hidden';
                }
            }
        }
    });
};

export default togglePopup;