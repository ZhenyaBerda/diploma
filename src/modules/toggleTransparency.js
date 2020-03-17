'use strict';

import Slider from './slider';

const toggleTransparency = () => {
    const popup = document.querySelector(`.popup-transparency`),
        menuDialog = document.querySelector('.popup-dialog-menu'),
        popupMenu = document.querySelector('.popup-menu'),
        row = document.querySelectorAll('.transparency-item');

    let slide;

    //слайдер для popup окна
    const transpSlider = new Slider({
        container: `.popup-transparency`,
        slides: `.popup-transparency-slider__slide`,
        next: `#transparency_right`,
        prev: `#transparency_left`,
        counter: `.slider-counter-content`
    });
    transpSlider.init();

    //слайдер для мобульной версии
    const transpSliderMobile = new Slider({
        container: `.transparency-slider-wrap`,
        slides: '.transparency-item',
        next: `#transparency-arrow_right`,
        prev: `#transparency-arrow_left`,

    });
    transpSliderMobile.init();

    // проверка ширины экрана
    const checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth;
        if (widthWindow <= 1090) {
            transpSliderMobile.showSlide();
        } else {
            for (let i = 0; i < row.length; i++) {
                row[i].style.display = 'flex';
            }
        }
    };
    checkResponse();
    window.addEventListener('resize', checkResponse);


    document.body.addEventListener('click', (event) => {
        const target = event.target;

        // открываем окно
        if (target.closest('.transparency-item__img')) {
            popup.style.visibility = 'visible';

            if (menuDialog.classList.contains('showHide-menu')) {
                menuDialog.classList.remove('showHide-menu');
                popupMenu.style.visibility = 'hidden';
            }

            for (let i = 0; i < row.length; i++) {
                if (row[i] === target.closest('.transparency-item')) {
                    slide = i;
                }
            }

            transpSlider.options.position = slide;
            transpSlider.showSlide();
            return;
        }

        // закрываем окно
        if (!target.closest(`.popup-dialog-transparency`) || target.closest('.close')) {
            if (popup.style.visibility === 'visible') {
                popup.style.visibility = 'hidden';
            }
        }
    });
};

export default toggleTransparency;