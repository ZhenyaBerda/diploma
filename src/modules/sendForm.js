'use strict';

const sendForm = () => {
    // id="input-phone"

    document.body.addEventListener('input', (event) => {

        const target = event.target;

        const mask = '+7 (ddd) ddd-dd-dd';
        if (target.closest('.input-phone')) {

        }

    });

};

export default sendForm;