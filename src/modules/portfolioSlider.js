'use strict';

import SliderCarousel from './sliderCarousel';
import Slider from './Slider';

const portfolioSlider = () => {
    const sliderDekstop = document.querySelector('.portfolio-slider'),
        sliderMobile = document.querySelector('.portfolio-slider-mobile');

    // объявляем слайдеры
    const portfolioSliderDekstop = new SliderCarousel({
        main: '.portfolio-slider-wrap',
        wrap: '.portfolio-slider',
        next: '#portfolio-arrow_right',
        prev: '#portfolio-arrow_left',
        slidesToShow: 3,
        infinity: false,
        responsive: [
            {
                breakpoint: 1024,
                slideToShow: 2
            },
            {
                breakpoint: 768,
                slideToShow: 1
            }
        ],

    });



    const portfolioSliderMobile = new Slider({
        container: `#portfolio`,
        slides: `.portfolio-slider-mobile .portfolio-slider__slide-frame`,
        next: `#portfolio-arrow-mobile_right`,
        prev: `#portfolio-arrow-mobile_left`,
        counter: '#portfolio-counter'
    });

    // показываем нужный слайдер
    const changeSlider = () => {
        const widthWindow = document.documentElement.clientWidth;
        if (widthWindow <= 768) {
            sliderDekstop.style.display = 'none';
            sliderMobile.style.display = 'flex';

            //переключаем кнопки
            document.getElementById('portfolio-arrow-mobile_right').style.display = 'flex';
            document.getElementById('portfolio-arrow-mobile_left').style.display = 'flex';
            document.getElementById('portfolio-arrow_right').style.display = 'none';
            document.getElementById('portfolio-arrow_left').style.display = 'none';

        } else {
            sliderDekstop.style.display = 'flex';
            sliderMobile.style.display = 'none';

            //переключаем кнопки
            document.getElementById('portfolio-arrow-mobile_right').style.display = 'none';
            document.getElementById('portfolio-arrow-mobile_left').style.display = 'none';
            document.getElementById('portfolio-arrow_right').style.display = 'flex';
            document.getElementById('portfolio-arrow_left').style.display = 'flex';
        }

    };

    changeSlider();
    window.addEventListener('resize', changeSlider);
    // и включаем слайдеры
    portfolioSliderDekstop.init();
    portfolioSliderMobile.init();

};

export default portfolioSlider;