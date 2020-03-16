'use strict';

import Tabs from './tabs';
import SliderCarousel from './sliderCarousel';
import Slider from './Slider';
import SliderPagination from './sliderPagination';

const design = () => {
    let tabSlider;
    const tabsSvg = document.querySelectorAll('.designs-nav__item svg'),
        container = document.getElementById('designs-list'),
        tabs = container.querySelectorAll('.designs-nav__item');


    // инициализация табов
    const designTabs = new Tabs({
        tabsHeader: '#designs-list',
        tab: '.designs-nav__item',
        slider: '.designs-slider',
        content: `.preview-block`,
        activeClass: 'visible'
    });

    let slidersDesign = [];

    for (let i = 0; i < tabs.length; i++) {
        slidersDesign[i] = new SliderPagination({
            container: `#designs`,
            slides: `.designs-slider__style${i + 1} .designs-slider__style-slide`,
            prev: '#design_left',
            next: '#design_right',
            pagination: `.designs-slider__style${i + 1}-preview .preview-block__item`,
            classPag: 'preview_active',
            inner: '.preview-block__item-inner',
            counter: `#designs-counter`,
        });

        slidersDesign[i].init();
    }

    slidersDesign[0].counterTotal();


    designTabs.init();

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
                    slidersDesign[index].position = 0;
                    slidersDesign[index].counterTotal();
                    slidersDesign[index].showSlide();

                }
            });
        }

    });

    response();
    window.addEventListener('resize', response);
};

export default design;