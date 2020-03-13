'use strict';

const hints = () => {
    const container = document.querySelector('.formula');

    const isVisible = (elem) => {
        const coordElem = elem.getBoundingClientRect();
        if (coordElem.top <= 0) {
            elem.style.bottom = `-${coordElem.height + 20}px`;
        }
    };

    container.addEventListener('mouseover', (event) => {
        const target = event.target;

        if (target.closest('.formula-item__icon')) {

            const item = target.closest('.formula-item'),
                hint = item.querySelector('.formula-item-popup');

            isVisible(hint);

            hint.style.visibility = 'visible';
            hint.style.opacity = 1;

        }


    });

    container.addEventListener('mouseout', (event) => {
        const target = event.target;

        if (target.closest('.formula-item__icon')) {
            //formula-item-popup
            const item = target.closest('.formula-item'),
                hint = item.querySelector('.formula-item-popup');
            hint.removeAttribute('style');
        }
    });

};

export default hints;