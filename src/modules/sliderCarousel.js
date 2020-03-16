'use strict';

class SliderCarousel {
    constructor({
        main,
        wrap,
        next,
        prev,
        position = 0,
        slidesToShow = 1,
        infinity = false,
        responsive = [],
        loop = false,
        activeClass,
    }) {
        if (!main || !wrap) {
            console.warn('slider-carousel: Необходимо ввести 2 свойства(main, wrap)');
        }
        this.main = document.querySelector(main);
        this.mainName = main;
        this.wrap = document.querySelector(wrap);
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slides = document.querySelector(wrap).children;
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            activeSlide: 1,
            infinity,
            loop,
            activeClass,
            widthSlide: Math.floor(100 / this.slidesToShow),
            maxPosition: this.slides.length - this.slidesToShow,
        };
        this.responsive = responsive;

    }

    init() {

        this.addGloClass();


        this.addStyle();
        if (this.responsive) {
            this.responsInit();
        }
        if (this.options.loop) {
            this.removeClass();
            if (this.slidesToShow === 1) {
                this.options.activeSlide = 0;
            } else {
                this.insertItem(this.slides[this.slides.length - 1], this.slides[0]);
            }

            this.handlerClass(this.slides[this.options.activeSlide]);

        }





        if (this.prev && this.next) {
            this.controlSlider();
        }
    }

    addGloClass() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');

        for (const item of this.slides) {
            item.classList.add('glo-slider__item');
        }
    }

    addStyle() {
        let style = document.getElementById(`sliderCarousel-style__${this.mainName}`);
        if (!style) {
            style = document.createElement('style');
            style.id = `sliderCarousel-style__${this.mainName.slice(1)}`;
        }

        style.textContent = `
        ${this.mainName} .glo-slider__item {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            flex: 0 0 ${this.options.widthSlide}% !important;
            margin: auto 0 !important; 
        }
`;

        console.log(this.wrap, this.options.widthSlide);
        document.head.appendChild(style);
    }

    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider() {
        if (this.options.infinity || this.options.position > 0) {
            --this.options.position;
            if (this.options.position < 0 && !this.options.loop) {
                this.options.position = this.options.maxPosition;
            }

            this.options.positionLoop--;

            // вычисляем перемещение
            if (this.options.loop) {
                this.handlerClass(this.slides[this.options.activeSlide]);
                this.insertItem(this.slides[this.slides.length - 1], this.slides[0]);

                this.handlerClass(this.slides[this.options.activeSlide]);

            } else {
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            }
        }
    }

    nextSlider() {
        if (this.options.infinity || this.options.position < this.options.maxPosition) {
            ++this.options.position;

            this.options.positionLoop++;
            if (this.options.position > this.options.maxPosition && !this.options.loop) {
                this.options.position = 0;
            }

            if (this.options.loop) {
                this.handlerClass(this.slides[this.options.activeSlide]);
                this.insertItem(this.slides[0], null);

                this.handlerClass(this.slides[this.options.activeSlide]);
            } else {
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            }

        }
    }

    responsInit() {
        const slidesToShowDefault = this.slidesToShow,
            allResponse = this.responsive.map(item => item.breakpoint),
            maxResponse = Math.max(...allResponse);

        const changeSlide = () => {

            if (this.loop) {
                if (this.slidesToShow === 1) {
                    this.options.activeSlide = 0;
                } else {
                    this.options.activeSlide = 1;
                }

                this.removeClass();
                this.handlerClass(this.options.activeSlide);
            }
            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
            this.options.maxPosition = this.slides.length - this.slidesToShow;
            this.addStyle();
        };


        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;

            if (widthWindow < maxResponse) {
                for (let i = 0; i < allResponse.length; i++) {
                    if (widthWindow < allResponse[i]) {
                        this.slidesToShow = this.responsive[i].slideToShow;
                        changeSlide();
                    }
                }
            } else {
                this.slidesToShow = slidesToShowDefault;
                changeSlide();
            }
        };

        checkResponse();
        window.addEventListener('resize', checkResponse);
    }

    handlerClass(elem) {
        if (this.options.activeClass) {
            elem.classList.toggle(this.options.activeClass);
        }
    }

    removeClass() {
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].classList.remove(this.options.addGloClass);
        }
    }

    insertItem(insert, before) {
        this.wrap.insertBefore(insert, before);
    }
}

export default SliderCarousel;