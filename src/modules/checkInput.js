'use strict';

const checkInput = () => {
    // id="input-phone"

    document.body.addEventListener('keydown', (event) => {

        const target = event.target;

        const mask = '+7 (ddd) ddd-dd-dd';
        if (target.closest('#input-phone')) {

        }

    });

};

export default checkInput;