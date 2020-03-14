'use strict';

class Slider {
    constructor({
        container,
        slides,
        next,
        prev,
        position = 0,
    }) {
        this.container = document.querySelector(container);
        this.next = next;
        this.prev = prev;
        this.slides = document.querySelectorAll(slides);
        this.options = {
            position,
            countSlides: this.slides.length,
            slideWidth: this.slides[0].offsetWidth,

        };
    }

    init() {
        for (let i = 0; i < this.options.countSlides; i++) {
            if (i === 1) {
                this.slides[i].style.display = 'block';
            } else {
                this.slides[i].style.display = 'none';
            }
        }
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

            this.nextSlide();
        });
    }

    nextSlide() {
        this.slides[this.options.position].style.display = 'block';
    }

    prevSlide() {
        this.slides[this.options.position].style.display = 'none';
    }


}

export default Slider;