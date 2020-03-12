'use strict';

const checkInput = () => {
    // id="input-phone"

    document.body.addEventListener('keydown', (event) => {

        const target = event.target;

        const mask = '+7 (ddd) ddd-dd-dd';
        if (target.closest('#input-phone')) {
            if (/[0-9]/.test(event.key)) {

                let curValue = target.value,
                    curLenght = curValue.length;

                if (/[0-9]/.test(event.key)) {

                    if (mask[curLenght] === 'd') {

                        target.value = curValue + event.key;
                    } else {
                        for (let i = curLenght; i < mask.length; i++) {
                            if (mask[i] === 'd') {
                                target.value = curValue + event.key;
                                return;
                            }
                            curValue += mask[i];
                        }
                    }

                }
            } else {
                target.value = target.value.replace();
            }

        }

    });

};

export default checkInput;