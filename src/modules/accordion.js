'use strict';

const accordion = () => {
    const accordion = document.querySelector('.accordion');

    const handlerContent = (elem) => {
        elem.classList.toggle('msg-active');
    };


    accordion.addEventListener('click', (event) => {

        const target = event.target;

        if (target.closest('.title_block')) {
            const openBlock = accordion.querySelector('.msg-active');
            if (openBlock && !target.matches('.msg-active')) {
                handlerContent(openBlock);
            }
            handlerContent(target);
        }
    });

};

export default accordion;