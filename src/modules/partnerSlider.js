'use strict';

import SliderCarousel from './SliderCarousel';

const partnerSlider = () => {
    const partnerSlider = new SliderCarousel({
        main: '.partner-wrapper',
        wrap: '.partners-slider',
        next: '#partners-arrow_right',
        prev: '#partners-arrow_left',
        slidesToShow: 3,
        infinity: true,
        responsive: [
            {
                breakpoint: 768,
                slideToShow: 2
            },
            {
                breakpoint: 575,
                slideToShow: 1
            }
        ],
    });

    partnerSlider.init();
};

export default partnerSlider;