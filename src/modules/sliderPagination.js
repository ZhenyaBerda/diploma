'use strict';

class sliderPagination {
    constructor ({
        container,
        slides,
        pagination,
        classPag
    }) {
        this.container = document.querySelector(container);
        this.slides = document.querySelectorAll(slides);
        this.pagination = document.querySelectorAll(pagination);
        this.classPag = classPag;
        this.position = 0;
    }

    init() {
        
    }

}

export default sliderPagination;