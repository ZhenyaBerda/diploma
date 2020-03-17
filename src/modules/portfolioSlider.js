'use strict';

import SliderCarousel from './sliderCarousel';
import Slider from './Slider';
import togglePopup from './togglePopup';

const portfolioSlider = () => {
    const portfolio = document.getElementById('portfolio'),
        sliderDekstop = document.querySelector('.portfolio-slider'),
        sliderMobile = document.querySelector('.portfolio-slider-mobile'),
        counter = document.querySelector('#portfolio-counter');
    let frames, currentCount = 0;

    //в разметке добавлен новый div, который обернул слайдер для его нормального отбражения
    //добавляем стили
    const wrapper = document.querySelector('.small-wrapper__portfolio');
    wrapper.style.cssText = `border-radius: 20px; margin: auto;`;

    // объявляем слайдеры
    const portfolioSliderDekstop = new SliderCarousel({
        main: '.small-wrapper__portfolio',
        wrap: '.portfolio-slider',
        next: '#portfolio-arrow_right',
        prev: '#portfolio-arrow_left',
        slidesToShow: 3,
        infinity: false,
        responsive: [
            {
                breakpoint: 1025,
                slideToShow: 2
            },
            {
                breakpoint: 901,
                slideToShow: 1
            }
        ],

    });

    // мобильная версия
    const portfolioSliderMobile = new SliderCarousel({
        main: '.portfolio-slider-wrap',
        wrap: '.portfolio-slider-mobile',
        next: '#portfolio-arrow-mobile_right',
        prev: '#portfolio-arrow-mobile_left',
        slidesToShow: 1
    });

    const portfolioPopupSlider = new Slider({
        container: `.popup-dialog-portfolio`,
        slides: `.popup-portfolio-slider__slide`,
        next: `#popup_portfolio_right`,
        prev: `#popup_portfolio_left`,
        counter: '#popup-portfolio-counter',
        content: '.popup-portfolio-text'
    });

    portfolioPopupSlider.init();

    // показываем нужный слайдер
    const changeSlider = () => {
        const widthWindow = document.documentElement.clientWidth;
        if (widthWindow <= 768) {
            frames = document.querySelectorAll('.portfolio-slider-mobile .portfolio-slider__slide-frame');
            sliderDekstop.style.display = 'none';
            sliderMobile.style.display = 'flex';
            wrapper.style.display = 'none';

            //переключаем кнопки
            document.getElementById('portfolio-arrow-mobile_right').style.display = 'flex';
            document.getElementById('portfolio-arrow-mobile_left').style.display = 'flex';
            document.getElementById('portfolio-arrow_right').style.display = 'none';
            document.getElementById('portfolio-arrow_left').style.display = 'none';

        } else {
            frames = document.querySelectorAll('.portfolio-slider .portfolio-slider__slide-frame');
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


    portfolio.addEventListener('click', (event) => {
        let target = event.target;

        if (target.closest('.portfolio-slider__slide-frame')) {
            target = target.closest('.portfolio-slider__slide-frame');
            // находим нажатый элемент
            for (let i = 0; i < frames.length; i++) {
                if (target === frames[i]) {
                    currentCount = i;
                }
            }
            portfolioPopupSlider.options.position = currentCount;
            portfolioPopupSlider.showSlide();
            console.log(portfolioPopupSlider.content)
            togglePopup('portfolio', '.portfolio-slider__slide-frame');
        }

        if (target) {

        }

    });




};

export default portfolioSlider;