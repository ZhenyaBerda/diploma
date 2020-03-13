'use strict';

const sendForm = () => {

    // маска для ввеода телефона (не доделанная)
    document.body.addEventListener('input', (event) => {
        const target = event.target;

        if (target.closest('.input-phone')) {
            const mask = '+7 (___) ___ ____';


            let i = 0,
                value = target.value.replace(/\D/g, ""),
                inputMask = mask.replace(/\D/g, "");

            if (inputMask.lenght >= value.lenght) {
                value = inputMask;
            }

            target.value = mask.replace(/./g, (a) => {
                if (/[_\d]/.test(a) && i < value.length) {
                    return value.charAt(i++);
                } else if (i >= value.length) {
                    return "";
                } else {
                    return a;
                }
            });

        }
    });

    

};

export default sendForm;