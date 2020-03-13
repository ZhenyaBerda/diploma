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

    const postData = (body) => {

        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };

    const checkInputs = (form) => {
        const allInputs = form.querySelectorAll('input');

        let check = true;

        allInputs.forEach(input => {
            console.log(input);
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

    const statusMessage = document.createElement('div');

    statusMessage.style.cssText = `color: red; text-align: center;`;

    // отлавливаем нажатие на нужные кнопки
    document.body.addEventListener('submit', (event) => {
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


                // отправляем данные
                postData(body)
                    .then((response) => {
                        if (response.status !== 200) {
                            throw new Error('status network error');
                        }
                        showPopupThank();
                        form.reset();
                    })
                    .catch(statusMessage.textContent = 'Ошибка соединения');

            } else {
                statusMessage.textContent = 'Введите свои данные и согласитесь с политикой конфиденциальности';
                return;
            }
        }

    });

};

export default sendForm;