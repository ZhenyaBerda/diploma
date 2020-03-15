'use strict';

import Tabs from './tabs';
import SliderCarousel from './sliderCarousel';
import Slider from './Slider';

const design = () => {
    let tabSlider;
    const tabsSvg = document.querySelectorAll('.designs-nav__item svg'),
        container = document.getElementById('designs-list'),
        tabs = container.querySelectorAll('.designs-nav__item'),
        counter = document.getElementById('designs-counter'),
        current = counter.querySelector('.slider-counter-content__current'),
        total = counter.querySelector('.slider-counter-content__total');

    // инициализация табов
    const designTabs = new Tabs({
        tabsHeader: '#designs-list',
        tab: '.designs-nav__item',
        slider: '.designs-slider'
    });

/*
    const designSlider = new Slider({
        container: `.designs-slider`,
        slides: `.popup-portfolio-slider__slide`,
        next: `#popup_portfolio_right`,
        prev: `#popup_portfolio_left`,
        counter: '#popup-portfolio-counter',
        content: '.popup-portfolio-text'
    });
*/

    designTabs.init();
    total.textContent = tabs.length;
    const response = () => {
        const windowWidth = document.documentElement.clientWidth;

        if (windowWidth < 1135) {
            tabsSvg.forEach(item => item.removeAttribute('style'));

            //слайдер табов для мобильной версии
            tabSlider = new SliderCarousel({
                main: '.designs .nav',
                wrap: '#designs-list',
                next: '#nav-arrow-designs_right',
                prev: '#nav-arrow-designs_left',
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

    //отлавливаем нажатие на табы, чтобы менять счетчик
    container.addEventListener('click', (event) => {
        const target = event.target;

        if (target.closest('.designs-nav__item')) {

            tabs.forEach((item, index) => {
                if (item.matches('.active')) {
                    current.textContent = index + 1;
                }
            })
        }
    });

    response();
    window.addEventListener('resize', response);
};

export default design;