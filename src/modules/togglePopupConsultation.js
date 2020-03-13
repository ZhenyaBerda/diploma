'use strict';
//consultation button
const togglePopupConsultation = () => {
    const popupConsultation = document.querySelector('.popup-consultation');

    document.body.addEventListener('click', (event) => {
        const target = event.target;

        if (target.closest('.consultation-button')) {
         
            const form = popupConsultation.querySelector('form');
            if (form.querySelector('.status')) {
                form.removeChild(form.querySelector('.status'));
            }
            popupConsultation.style.visibility = 'visible';
            return;
        }

        // закрываем окно
        if (!target.closest('.feedback-wrap') || target.closest('.close')) {
            popupConsultation.style.visibility = 'hidden';
        }
    });


};

export default togglePopupConsultation;