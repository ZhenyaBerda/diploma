'use strict';

import maskPhone from './maskPhone';

const sendForm = () => {

    const countInputsPhones = document.querySelectorAll('.input-phone').length;
    for (let i = 0; i < countInputsPhones; i++) {
        maskPhone(`#feedback-input${i + 1}`);
    }

    const checkInputs = (form) => {
        const allInputs = form.querySelectorAll('input');

        let check = true;

        allInputs.forEach(input => {
            if (input.matches('.checkbox__input') && !input.checked) {
                check = false;
            }

            if (!input.matches('.checkbox__input') && input.value.length === 0) {
                check = false;
            }
        });
        return check;
    };

    //открываем popup-thank
    const showPopupThank = () => {
        const popupThank = document.querySelector('.popup-thank');
        popupThank.style.visibility = 'visible';

        document.body.addEventListener('click', (event) => {
            const target = event.target;

            //закрываем окно
            if (target.closest('.close') || !target.closest('.popup-thank-bg')) {
                popupThank.style.visibility = 'hidden';
            }

        });
    };

    const postData = (body) => {

        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };

    const statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    statusMessage.style.cssText = `color: red; text-align: center;`;

    // отлавливаем нажатие на нужные кнопки
    document.body.addEventListener('submit', (event) => {
        event.preventDefault();
        statusMessage.textContent = '';
        const target = event.target;


        if (target.closest('form')) {
            event.preventDefault();

            const form = target.closest('form');

            // для каждого вида формы вставляем текст в свое место, чтобы красивее было
            if (form.matches('.feedback__form')) {
                form.insertBefore(statusMessage, form.querySelector('button'));
            } else {
                form.appendChild(statusMessage);
            }

            if (checkInputs(form)) {
                const formData = new FormData(form);

                let body = {};

                formData.forEach((val, key) => {
                    body[key] = val;
                });


                statusMessage.textContent = '';
                // отправляем данные
                postData(body)
                    .then((response) => {

                        if (response.status === 200) {
                            showPopupThank();
                            form.reset();
                        } else {
                            throw new Error();
                        }
                    })
                    .catch(() => statusMessage.textContent = 'Ошибка отправки данных');

            } else {
                statusMessage.textContent = 'Введите свои данные и согласитесь с политикой конфиденциальности';
                return;
            }
        }

    });

};

export default sendForm;