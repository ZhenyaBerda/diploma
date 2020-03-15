'use strict';

import Tabs from './tabs';
import SliderCarousel from './sliderCarousel';

const scheme = () => {
    let tabSlider;
    const tabs = document.querySelectorAll('.scheme-nav__item svg');

    // инициализация табов
    const schemeTabs = new Tabs({
        tabsHeader: '#scheme-list',
        tab: '.scheme-nav__item',
        content: '.scheme-description-block',
        slider: '.scheme-slider'
    });

    schemeTabs.init();

    const response = () => {
        const windowWidth = document.documentElement.clientWidth;

        if (windowWidth < 1135) {
            tabs.forEach(item => item.removeAttribute('style'));

            //слайдер табов для мобильной версии
            tabSlider = new SliderCarousel({
                main: '.scheme .nav',
                wrap: '#scheme-list',
                next: '#nav-arrow-scheme_right',
                prev: '#nav-arrow-scheme_left',
                slidesToShow: 2,
                responsive: [{
                    breakpoint: 576,
                    slideToShow: 1
                }]
            });

            tabSlider.init();
        } else {
            tabs.forEach(item => item.style.left = 0);
            tabSlider = null;
        }
    };

    response();
    window.addEventListener('resize', response);
};

export default scheme;