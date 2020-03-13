'use strict';

const accordion = () => {
    const accordion = document.querySelector('.accordion');

    const handlerContent = (elem) => {
        elem.classList.toggle('msg-active');
    };


    accordion.addEventListener('click', (event) => {
        const target = event.target;

        if (target.closest('.title_block')) {
            handlerContent(target);
        }
    });

};

export default accordion;