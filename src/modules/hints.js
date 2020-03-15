'use strict';

import SliderCarousel from "./SliderCarousel";
import Slider from './slider';

const hints = (block) => {
    const container = document.querySelector(`#${block}`);
    let slider;

    const responsive = () => {
        //пришлоась ручками менять стили в верстке, чтобы нормально отображались элементы
        const item = document.querySelector(`.${block}-slider`);
        let padding, slideToShow = 1, respon;
        if (block === 'formula') {
            padding = 250;
            slideToShow = 3;

        } else {
            padding = 500;
            slideToShow = 1;

        }
        item.style.cssText = `padding-bottom: ${padding}px`;

        slider = new SliderCarousel({
            main: `.${block}-slider-wrap`,
            wrap: `.${block}-slider`,
            next: `#${block}-arrow_right`,
            prev: `#${block}-arrow_left`,
            slidesToShow: slideToShow,
            infinity: true,
            loop: true,
            activeClass: 'active-item',
            responsive: [
                {
                    breakpoint: 768,
                    slideToShow: 1
                }
            ],
        });
        slider.init();
    };

    const desktop = () => {
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
    const checkResponse = () => {
        const items = document.querySelectorAll(`.${block}-item`);

        const widthWindow = document.documentElement.clientWidth;
        if (widthWindow <= 1024) {
            responsive();
        } else {
            desktop();
            slider = null;
        }
    };

    checkResponse();
    window.addEventListener('resize', checkResponse);
};

export default hints;