'use strict';



const togglePhones = () => {
    const contactsArrow = document.querySelector('.header-contacts__arrow'),
        phoneAccord = document.querySelector('.header-contacts__phone-number-accord'),
        arrowImg = contactsArrow.querySelector('img');

    phoneAccord.style.top = 0;

    contactsArrow.addEventListener('click', () => {

        //доп функция для установки настроек
        const setPref = (top, opacity, transform) => {
            phoneAccord.style.top = `${top}px`;
            phoneAccord.querySelector('a').style.opacity = opacity;
            arrowImg.style.transform = `rotate(${transform}deg)`;
        };

        if (phoneAccord.style.top === '0px') {
            // выдвигаем второй номер
            setPref(20, 1, 180);
        } else {
            // убираем второй номер
            setPref(0, 0, 0);
        }
    });

};

export default togglePhones;