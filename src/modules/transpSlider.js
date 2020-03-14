'use strict';

import Slider from './slider';

const transpSlider = () => {
    const transpSlider = new Slider({
        container: `.popup-transparency`,
        slides: `.popup-transparency-slider__slide`,
        next: `#transparency_right`,
        prev: `#transparency_left`
    });

    transpSlider.main();
};

export default transpSlider;