'use strict';
//link-privacy

const togglePopupPrivacy = () => {
    const popupPrivacy = document.querySelector('.popup-privacy');

    document.body.addEventListener('click', (event) => {
        const target = event.target;
        
        // открываем окно
        if (target.closest('.link-privacy')) {
            popupPrivacy.style.visibility = 'visible';
            return;
        }

        // закрываем окно
        if (!target.closest('.popup-dialog-privacy') || target.closest('.close')) {
            popupPrivacy.style.visibility = 'hidden';
        }
    });
};

export default togglePopupPrivacy;