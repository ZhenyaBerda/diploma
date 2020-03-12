'use strict';

const checkInput = () => {
    // id="input-phone"
  //  const regExp = /^\+?[78]([-()]*\d){10}&/;

    document.body.addEventListener('input', (event) => {
        const target = event.target;

        if (target.closest('#input-phone')) {
            target.value = target.value.replace(/^[^+]{1}[^\d]/g, '');
        }
    })

};

export default checkInput;