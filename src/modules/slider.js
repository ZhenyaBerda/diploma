'use strict';

class Slider {
    constructor({
        container,
        slides,
        next,
        prev,
        position = 0,
        counter,
        content
    }) {
        this.container = document.querySelector(container);
        this.next = next;
        this.prev = prev;
        this.slides = document.querySelectorAll(slides);
        if (counter) {
            this.counter = this.container.querySelector(counter);
            this.total = this.counter.querySelector('.slider-counter-content__total');
            this.current = this.counter.querySelector('.slider-counter-content__current');
        }
        this.content = this.container.querySelectorAll(content);
        this.options = {
            position,
            countSlides: this.slides.length,
            slideWidth: this.slides[0].offsetWidth,
        };
    }

    init() {
        this.changeConter(this.total, this.options.countSlides);
        this.showSlide();
        this.main();
    }

    main() {
        this.container.addEventListener('click', (event) => {
            const target = event.target;

            this.prevSlide();

            if (target.closest(this.prev)) {
                this.options.position--;
            } else if (target.closest(this.next)) {
                this.options.position++;
            }

            if (this.options.position >= this.options.countSlides) {
                this.options.position = this.options.countSlides - 1;
            }

            if (this.options.position < 0) {
                this.options.position = 0;
            }
            this.changeConter(this.current, this.options.position + 1);
            this.nextSlide();
        });
    }

    showSlide() {
        this.changeConter(this.current, this.options.position + 1);
        for (let i = 0; i < this.options.countSlides; i++) {
            if (i === this.options.position) {
                this.slides[i].style.display = 'flex';
            } else {
                this.slides[i].style.display = 'none';
            }
        }
    }

    changeConter(counter, value) {
        if (!counter) {
            return;
        }
        counter.textContent = value;
    }

    nextSlide() {
        this.slides[this.options.position].style.display = 'flex';
    }

    prevSlide() {
        this.slides[this.options.position].style.display = 'none';
    }

}

export default Slider;