'use strict';

class sliderPagination {
    constructor({
        container,
        slides,
        next,
        prev,
        pagination,
        inner,
        classPag,
        counter
    }) {
        this.container = document.querySelector(container);
        this.slides = document.querySelectorAll(slides);
        this.next = next;
        this.prev = prev;
        this.pagination = document.querySelectorAll(pagination);
        this.paginationClass = pagination;
        this.classPag = classPag;
        this.inner = inner;
        this.position = 0;
        this.counter = document.querySelector(counter);
    }

    init() {
        this.counterTotal();
        this.counterCurrent();
        this.showSlide();
        this.main();
    }

    showSlide() {
        this.counterCurrent();

        for (let i = 0; i < this.pagination.length; i++) {

            if (this.position === i) {
                this.pagination[i].querySelector(this.inner).classList.add(this.classPag);
                this.slides[i].style.display = 'block';
            } else {
                this.pagination[i].querySelector(this.inner).classList.remove(this.classPag);
                this.slides[i].style.display = 'none';
            }
        }
    }

    counterTotal() {
        const total = this.counter.querySelector('.slider-counter-content__total');
        total.textContent = this.slides.length;
    }

    counterCurrent() {
        const current = this.counter.querySelector('.slider-counter-content__current');
        current.textContent = this.position + 1;
    }

    main() {
        this.container.addEventListener('click', (event) => {
            let target = event.target;

            if (target.closest(this.paginationClass)) {
                target = target.closest(this.paginationClass);
                this.pagination.forEach((item, index) => {
                    if (item === target) {
                        this.position = index;
                        return;
                    }
                });
                this.showSlide();
            }

            if (target.closest(this.prev)) {
                this.position--;
                if (this.position < 0) {
                    this.position = this.slides.length - 1;
                }
                this.showSlide();
            }

            if (target.closest(this.next)) {
                this.position++;
                if (this.position > this.slides.length - 1) {
                    this.position = 0;
                }
                this.showSlide();
            }

        });
    }

}

export default sliderPagination;