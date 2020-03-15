'use strict';

import Slider from './slider';

const portfolioPopupSlider = () => {
    const portfolioPopupSlider = new Slider({
        container: `.popup-dialog-portfolio`,
        slides: `.popup-portfolio-slider__slide`,
        next: `#popup_portfolio_right`,
        prev: `#popup_portfolio_left`,
        counter: '#popup-portfolio-counter',
        content: '.popup-portfolio-text'
    });

    // portfolioPopupSlider.init();
};

export default portfolioPopupSlider;