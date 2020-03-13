'use strict';

const hints = (block, rotate) => {
    const container = document.querySelector(`#${block}`);

    const addStyle = (hint) => {
        const style = document.createElement('style');
        style.classList.add('hint-style');
        style.textContent = `
        .active-row {
            z-index: 999999999;
        }
        .${hint.classList[hint.classList.length - 1]} {
            padding-top: 35px;
        }
        .${hint.classList[hint.classList.length - 1]}:before {
        -webkit-transform: rotate(180deg) !important;
        transform: rotate(180deg) !important;
    }`;

        document.head.appendChild(style);
    };



    container.addEventListener('mouseover', (event) => {
        let target = event.target;

        if (target.closest(`.${block}-item__icon`)) {
            const item = target.closest(`.${block}-item`),
                hint = item.querySelector(`.${block}-item-popup`);

            const coordElem = hint.getBoundingClientRect();
            target.closest('.row').classList.add('active-row');
            // переворачиваем подсказки
            if (coordElem.top <= 0) {
                hint.style.bottom = `-${coordElem.height + 20}px`;
                addStyle(hint);
            }

            item.classList.add('active-item');
            hint.style.visibility = 'visible'; 
            hint.style.opacity = 1;
        }

    });

    container.addEventListener('mouseout', (event) => {
        let target = event.target;

        if (target.closest(`.${block}-item__icon`)) {
            const item = target.closest(`.${block}-item`),
                hint = item.querySelector(`.${block}-item-popup`);

            item.classList.remove('active-item');
            target.closest('.row').classList.remove('active-row');

            hint.removeAttribute('style');
            if (document.head.querySelector('.hint-style')) {
                document.head.querySelector('.hint-style').remove();
            }
        }

    });

};

export default hints;