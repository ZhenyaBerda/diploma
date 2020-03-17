'use strict';

import SliderCarousel from './sliderCarousel';
import Slider from './Slider';
import togglePopup from './togglePopup';

const portfolioSlider = () => {
    const portfolio = document.getElementById('portfolio'),
        sliderDekstop = document.querySelector('.portfolio-slider'),
        sliderMobile = document.querySelector('.portfolio-slider-mobile'),
        counter = document.querySelector('#portfolio-counter'),
        total = counter.querySelector('.slider-counter-content__total'),
        current = counter.querySelector('.slider-counter-content__current');

    const mobileLeft = document.getElementById('portfolio-arrow-mobile_left'),
        mobileRight = document.getElementById('portfolio-arrow-mobile_right'),
        dekstopLeft = document.getElementById('portfolio-arrow_left'),
        dekstopRight = document.getElementById('portfolio-arrow_right');

    let slides,
        currentCount = 0,
        positionSlider = 0,
        framesLength = 0,
        startPosition = 0,
        sliderDekstopVisible = true;

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
        main: '.small-wrapper__portfolio-mobile',
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

    const dekstopSlider = () => {
        sliderDekstopVisible = true;
        const slider = document.querySelector(`.portfolio-slider`);
        slider.removeAttribute('style');

        const widthWindow = document.documentElement.clientWidth;
        if (widthWindow >= 1025) {
            startPosition = 2;
        } else if (widthWindow < 1025 && widthWindow > 900) {
            startPosition = 1;
        } else {
            startPosition = 0;
        }

        mobileRight.style.display = 'none';
        mobileLeft.style.display = 'none';
        dekstopLeft.style.display = 'none';
        dekstopRight.style.display = 'flex';


    };

    const mobileSlider = () => {
        sliderDekstopVisible = false;
        const slider = document.querySelector(`.portfolio-slider-mobile`);
        slider.removeAttribute('style');
        startPosition = 0;

        mobileRight.style.display = 'flex';
        mobileLeft.style.display = 'none';
        dekstopRight.style.display = 'none';
        dekstopLeft.style.display = 'none';

        current.textContent = startPosition + 1;
        total.textContent = slides.length;
    };

    // показываем нужный слайдер
    const changeSlider = () => {
        const widthWindow = document.documentElement.clientWidth;
        if (widthWindow <= 750) {
            slides = document.querySelectorAll('.portfolio-slider-mobile .portfolio-slider__slide-frame');

            sliderDekstop.style.display = 'none';
            sliderMobile.style.display = 'flex';
            wrapper.style.display = 'none';

            mobileSlider();


        } else {
            slides = document.querySelectorAll('.portfolio-slider .portfolio-slider__slide');
            sliderDekstop.style.display = 'flex';
            sliderMobile.style.display = 'none';
            wrapper.style.display = 'flex';

            dekstopSlider();
        }
        positionSlider = startPosition;
        framesLength = slides.length;
    };

    changeSlider();
    window.addEventListener('resize', changeSlider);
    // и включаем слайдеры
    portfolioSliderDekstop.init();
    portfolioSliderMobile.init();
    portfolioPopupSlider.init();
    togglePopup('portfolio', '.portfolio-slider__slide-frame');


    const handlerDisplay = (elem, display) => {
        if (sliderDekstopVisible) {
            elem[0].style.display = display;
        } else {
            elem[1].style.display = display;
        }

    };

    portfolio.addEventListener('click', (event) => {
        let target = event.target;

        if (target.closest('.portfolio-slider__slide-frame')) {
            target = target.closest('.portfolio-slider__slide-frame');
            let frames;
            if (sliderDekstopVisible) {
                frames = document.querySelectorAll('.portfolio-slider .portfolio-slider__slide-frame');
            } else {
                frames = document.querySelectorAll('.portfolio-slider-mobile .portfolio-slider__slide-frame');
            }

            // находим нажатый элемент
            for (let i = 0; i < frames.length; i++) {
                if (target === frames[i]) {
                    currentCount = i;
                }
            }
            portfolioPopupSlider.options.position = currentCount;
            portfolioPopupSlider.showSlide();

        }

        if (target.closest('.portfolio_arrows')) {
            let elem;
            if (target.closest('#portfolio-arrow-mobile_right') ||
                target.closest('#portfolio-arrow_right')) {
                positionSlider++;
                if (positionSlider >= framesLength - 1) {
                    positionSlider = framesLength - 1;

                    elem = [dekstopRight, mobileRight];
                    handlerDisplay(elem, 'none');
                }
                elem = [dekstopLeft, mobileLeft];
                handlerDisplay(elem, 'flex');
                current.textContent = `${positionSlider + 1}`;
            }

            if (target.closest('#portfolio-arrow-mobile_left') ||
                target.closest('#portfolio-arrow_left')) {
                positionSlider--;

                if (positionSlider <= startPosition) {
                    positionSlider = startPosition;

                    elem = [dekstopLeft, mobileLeft];
                    handlerDisplay(elem, 'none');
                }

                elem = [dekstopRight, mobileRight];
                handlerDisplay(elem, 'flex');
                current.textContent = `${positionSlider + 1}`;
            }

        }

    });




};

export default portfolioSlider;