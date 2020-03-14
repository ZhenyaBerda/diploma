'use strict';

import SliderCarousel from './SliderCarousel';

const tranSlider = () => {

    const containerRepair = document.getElementById('repair-types'),
        containerSlider = containerRepair.querySelector('.repair-types-slider'),
        navList = containerRepair.querySelector('.nav-list-repair'),  // контейнер для слайдера
        tabs = containerRepair.querySelectorAll('.repair-types-nav__item'), // items
        slideCounter = containerRepair.querySelector('.slider-counter-repair'),
        total = slideCounter.querySelector('.slider-counter-content__total'),
        current = slideCounter.querySelector('.slider-counter-content__current'),
        countSliders = containerSlider.children.length;

    // функция смены активного класса
    const handlerActive = (elem, className) => {
        elem.classList.toggle(className);
    };

    // закрываем все слайдеры кроме первого
    for (let i = 0; i < countSliders; i++) {
        if (i !== 0) {
            containerSlider.children[i].style.display = 'none';
        } else {
            handlerActive(containerSlider.children[i], 'active-slider');
        }
    }
    //общее количество слайдов
    total.textContent = containerSlider.querySelector('.active-slider').children.length;
    // инициалзируем слайдеры с типами ремонта как карусели
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

    const responsiveSlider = () => {
        const wrap = containerRepair.querySelector('.nav-wrap-repair');
        let currentSlide = 0;

        navList.style.transition = 'transform 0.5s';


        wrap.addEventListener('click', (event) => {
            const target = event.target;
            if (target.closest('#nav-arrow-repair-left_base')) {
                currentSlide -= 20;
            } else if (target.closest('#nav-arrow-repair-right_base')) {
                currentSlide += 20;
            }
            if (currentSlide < 0) {
                currentSlide = 0;
            }
            //придумать универсальное значение !!!!!!!!!!!!!!!!!
            if (currentSlide > 60) {
                currentSlide = 60;
            }
            navList.style.transform = `translateX(-${currentSlide}%)`;
        });


    };

    responsiveSlider();
    // перемещаени на нужный слайдер
    const sliderTypes = (index) => {
        const activeSlider = containerSlider.querySelector(`.types-repair${index + 1}`),
            prevSlider = containerSlider.querySelector('.active-slider');

        // меняем позицию на первый слайд
        repairSliders[index].options.position = 0;
        activeSlider.style.transform = `translateX(-${repairSliders[index].options.position * repairSliders[index].options.widthSlide}%)`;
        total.textContent = activeSlider.children.length;

        //закрываем прошлый слайдер и открываем выбранный
        prevSlider.style.display = 'none';
        activeSlider.style.display = 'flex';
        handlerActive(activeSlider, 'active-slider');
        handlerActive(prevSlider, 'active-slider');
    };



    containerRepair.addEventListener('click', (event) => {
        const target = event.target;
        if (target.closest('.repair-types-nav__item')) {
            const active = navList.querySelector('.active');
            if (!target.matches('active')) {
                handlerActive(active, 'active');
            }
            handlerActive(target, 'active');

            // находим индекс выбранного слайдера
            for (let i = 0; i < tabs.length; i++) {
                if (tabs[i] === target) {
                    sliderTypes(i);
                }
            }
        }

        if (target.closest('#repair-types-arrow_right') || target.closest('#repair-types-arrow_left')) {
            // получаем нужный слайдер
            for (let i = 0; i < tabs.length; i++) {
                if (tabs[i].matches('.active')) {
                    console.log(tabs[i]);
                    current.textContent = repairSliders[i].options.position + 1;
                }
            }
        }
    });


};

export default tranSlider;