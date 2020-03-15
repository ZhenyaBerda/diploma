'use strict';

import Tabs from './tabs';
import SliderCarousel from './SliderCarousel';
import Slider from './slider';

const repairTypesSlider = () => {
    const tabsSvg = document.querySelectorAll('.repair-types-nav__item svg');


    const containerRepair = document.getElementById('repair-types'),
        containerSlider = containerRepair.querySelector('.repair-types-slider'),
        tabs = containerRepair.querySelectorAll('.repair-types-nav__item'), // items
        slideCounter = containerRepair.querySelector('.slider-counter-repair'),
        total = slideCounter.querySelector('.slider-counter-content__total'),
        current = slideCounter.querySelector('.slider-counter-content__current'),
        countSliders = containerSlider.children.length;

    let tabSlider;

    // инициализация табов
    const repairTabs = new Tabs({
        tabsHeader: '.nav-list-repair',
        tab: '.repair-types-nav__item',
        slider: '.repair-types-slider',
    });

    repairTabs.init();


    let repairSliders = [];

    for (let i = 0; i < countSliders; i++) {
        repairSliders[i] = new SliderCarousel({
            main: '.repair-types-slider',
            wrap: `.types-repair${i + 1}`,
            next: '#repair-types-arrow_right',
            prev: '#repair-types-arrow_left',
            slidesToShow: 1,
            infinity: true,
        });

        repairSliders[i].init();
    }

    total.textContent = containerSlider.querySelector('.active-slider').children.length;

    containerRepair.addEventListener('click', (event) => {
        let target = event.target;
        

        if (target.closest('.repair-types-nav__item')) {
            target = target.closest('.repair-types-nav__item');
            // находим нажатый tab
            tabs.forEach((item, index) => {
                if (item === target) {
                    const activeSlider = containerSlider.querySelector(`.types-repair${index + 1}`);
                    activeSlider.classList.add('active-slider');
                    total.textContent = containerSlider.querySelector('.active-slider').children.length;
                    current.textContent = 1;
                    repairSliders[index].options.position = 0;
                    containerSlider.querySelector('.active-slider').removeAttribute('style');
                    
                } else {
                    containerSlider.querySelector(`.types-repair${index + 1}`).classList.remove('active-slider');
                }
            });
        }

        // изменяем счетчик активного слайда
        if (target.closest('.slider-arrow')) {
            tabs.forEach((item, index) => {
                if (item.matches('.active')){
                    current.textContent = repairSliders[index].options.position + 1;
                }
            });
        }
    });

    const response = () => {
        const windowWidth = document.documentElement.clientWidth;

        if (windowWidth < 1025) {
            tabsSvg.forEach(item => item.removeAttribute('style'));

            //слайдер табов для мобильной версии
            tabSlider = new SliderCarousel({
                main: '.repair-types nav',
                wrap: '.nav-list-repair',
                next: '#nav-arrow-repair-right_base',
                prev: '#nav-arrow-repair-left_base',
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
    window.addEventListener('resize', response);
};

export default repairTypesSlider;