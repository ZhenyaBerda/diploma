'use strict';

// slider
const slider = () => {
    const slide = document.querySelectorAll('.reviews-slider__slide'),
        slider = document.querySelector('.reviews-slider-wrap');

    let currentSlide = 0,
        interval;

    /*
const addDots = () => {
    const dotsConteiner = document.querySelector('.portfolio-dots');

    for (let i = 0; i < slide.length; i++) {
        const li = document.createElement('li');
        li.classList.add('dot');

        if (i === 0) {
            li.classList.add('dot-active');
        }
        dotsConteiner.appendChild(li);
    }
};

addDots();*/
    const dot = document.querySelectorAll('.dot-reviews');

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;

        if (!target.matches('.portfolio-btn, .dot-reviews')) {
            return;
        }

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');

        if (target.matches('#reviews-arrow_right')) {
            currentSlide++;
        } else if (target.matches('#reviews-arrow_left')) {
            currentSlide--;
        } else if (target.matches('.dot-reviews')) {
            dot.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }

        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');

    });

    slider.addEventListener('mouseover', (event) => {
        if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
            stopSlide();
        }
    });

    slider.addEventListener('mouseout', (event) => {
        if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
            startSlide(1500);
        }
    });


    startSlide(1500);

};

export default slider;