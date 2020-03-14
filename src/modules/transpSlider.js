'use strict';

import Slider from './slider';
import togglePopup from './togglePopup';

const transpSlider = () => {

    const transpSlider = new Slider({
        container: `.popup-transparency`,
        slides: `.popup-transparency-slider__slide`,
        next: `#transparency_right`,
        prev: `#transparency_left`,
        counter: `.slider-counter-content`
    });

    transpSlider.init();
    togglePopup('transparency', '.transparency-item__img');

};

export default transpSlider;