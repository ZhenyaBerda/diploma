'use strict';

import SliderCarousel from './SliderCarousel';

const transpSlider = () => {
    const transpSlider = new SliderCarousel({
        main: '.popup-transparency-slider-wrap',
        wrap: '.popup-transparency-slider',
        next: '.popup-arrow_transparency_right',
        prev: '.popup-arrow_transparency_left',
        slidesToShow: 1,
    });

    transpSlider.init();
    
};

export default transpSlider;