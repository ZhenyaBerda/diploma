'use strict';

import Slider from './slider';

const reviewSlider = () => {

    const reviewSlider = new Slider({
        container: `#reviews`,
        slides: `.reviews-slider__slide`,
        next: `#reviews-arrow_right`,
        prev: `#reviews-arrow_left`,
    });
    reviewSlider.init();

};

export default reviewSlider;