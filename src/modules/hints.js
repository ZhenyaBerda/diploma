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
            padding-top: 50px;
        }
        .${hint.classList[hint.classList.length - 1]}:before {
        -webkit-transform: rotate(180deg) !important;
        transform: rotate(180deg) !important;
    }`;

        document.head.appendChild(style);
    }



    container.addEventListener('mouseover', (event) => {
        let target = event.target;

        if (target.closest(`.${block}-item__icon`)) {
            target = target.closest(`.${block}-item__icon`);
            target.closest('.row').classList.toggle('active-row');

            const item = target.closest(`.${block}-item`),
                hint = item.querySelector(`.${block}-item-popup`);

            const coordElem = hint.getBoundingClientRect();
            console.log(coordElem);
            console.log(document.documentElement.clientHeight);
            // переворачиваем подсказки
            if (coordElem.top <= 0) {
                hint.style.bottom = `-${coordElem.height + 20}px`;
                addStyle(hint);
            }

            hint.style.visibility = 'visible';
            hint.style.opacity = 1;

        }


    });

    container.addEventListener('mouseout', (event) => {
        const target = event.target;

        if (target.closest(`.${block}-item__icon`)) {
            const item = target.closest(`.${block}-item`),
                hint = item.querySelector(`.${block}-item-popup`);

            target.closest('.row').classList.toggle('active-row');

            hint.removeAttribute('style');
            if (document.head.querySelector('.hint-style')) {
                document.head.querySelector('.hint-style').remove();
            }
        }
    });

};

export default hints;