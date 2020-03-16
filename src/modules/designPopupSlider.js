'use strict';

import SliderCarousel from './sliderCarousel';
import Slider from './Slider';

import Tabs from './tabs';

const designPopupSlider = () => {
    const tabs = document.querySelectorAll('.designs-nav__item_popup'),
        container = document.querySelector('.popup-dialog-design'),
        slideCounter = document.querySelector('#popup-designs-counter'),
        total = slideCounter.querySelector('.slider-counter-content__total'),
        current = slideCounter.querySelector('.slider-counter-content__current'),
        tabsSvg = document.querySelectorAll('.designs-nav__item_popup svg');
        let tabSlider;


    const designPopupSlider = new Tabs({
        tabsHeader: '#nav-list-popup-designs',
        tab: '.designs-nav__item_popup',
        slider: '.popup-design-slider',
        content: `.popup-design-text`,
        activeClass: `visible-content-block`
    });

    designPopupSlider.init();

    let slidersDesign = [];
    for (let i = 0; i < tabs.length; i++) {
        slidersDesign[i] = new Slider({

            container: `.popup-dialog-design`,
            slides: `.popup-designs-slider__style${i + 1} .popup-design-slider__style-slide`,
            next: `#popup_design_right`,
            prev: `#popup_design_left`,

            // main: '.popup-design-slider',
            // wrap: `.popup-designs-slider__style${i + 1}`,
            // next: '#popup_design_right',
            // prev: '#popup_design_left',
            // slidesToShow: 1,
            // infinity: true,
        });
        slidersDesign[i].init();
    }

    total.textContent = container.querySelector('.active-slider').children.length;

    const response = () => {
        const windowWidth = document.documentElement.clientWidth;

        if (windowWidth < 1135) {
            tabsSvg.forEach(item => item.removeAttribute('style'));

            //слайдер табов для мобильной версии
            tabSlider = new SliderCarousel({
                main: '.popup-dialog-design .nav',
                wrap: '#nav-list-popup-designs',
                next: '#nav-arrow-popup-designs_right',
                prev: '#nav-arrow-popup-designs_left',
                slidesToShow: 2,
                responsive: [{
                    breakpoint: 576,
                    slideToShow: 1
                }]
            });

            tabSlider.init();
        } else {
            tabsSvg.forEach(item => item.style.left = 0);
            tabSlider = null;
        }
    };

    response();

    container.addEventListener('click', (event) => {
        let { target } = event;

        if (target.closest('.designs-nav__item_popup')) {
            target = target.closest('.designs-nav__item_popup');

            tabs.forEach((item, index) => {
                if (item === target) {
                    const activeSlider = container.querySelector(`.popup-designs-slider__style${index + 1}`);
                    activeSlider.classList.add('active-slider');
                    total.textContent = container.querySelector('.active-slider').children.length;
                    current.textContent = 1;
                    slidersDesign[index].options.position = 0;
                    slidersDesign[index].showSlide();
                    container.querySelector('.active-slider').removeAttribute('style');
                } else {
                    container.querySelector(`.popup-designs-slider__style${index + 1}`).classList.remove('active-slider');
                }
            });
        }

        if (target.closest('.popup-arrow')) {
            tabs.forEach((item, index) => {
                if (item.matches('.active')) {
                    current.textContent = slidersDesign[index].options.position + 1;
                }
            });
        }
    });


};

export default designPopupSlider;