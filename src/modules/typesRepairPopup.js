'use strict';

import togglePopup from './togglePopup';

const typesRepairPopup = () => {
    const navList = document.querySelector('.nav-list-popup-repair'),
        tableWrap = document.querySelector('.popup-repair-types-content-table'),
        navItems = navList.querySelectorAll('.popup-repair-types-nav__item'),
        table = tableWrap.querySelectorAll('.popup-repair-types-content-table__list'),
        rows = tableWrap.querySelectorAll('.mobile-row'),
        title = document.querySelector('.popup-repair-types-content__head-title'),
        date = document.querySelector('.popup-repair-types-content__head-date'),
        dbData = require('../../db/db.json');

    let newNav = [], newTables = [];

    //очищаем окно
    navItems.forEach(item => item.remove());
    rows.forEach(item => item.remove());
    table.forEach(item => item.remove());



    date.textContent = dbData[0].date;

    /*
    название работы .repair-types-name
    цена repair-types-value
    ед измерения repair-types-value 
    */

    // добавление информации 
    for (let i = 1; i < dbData.length; i++) {

        const navClone = navItems[1].cloneNode(true),
            tableCLone = table[0].cloneNode(),
            tbody = document.createElement('tbody');

        navClone.textContent = dbData[i].title;
        newNav.push(navClone);

        for (let item of dbData[i].priceList) {
            const row = rows[1].cloneNode(true);
            row.querySelector('.repair-types-name').textContent = item.typeService;
            row.querySelectorAll('.repair-types-value')[0].textContent = item.units;
            row.querySelectorAll('.repair-types-value')[1].textContent = item.cost;

            tbody.appendChild(row);
        }

        if (i === 1) {
            navClone.classList.add('active');
            tableCLone.style.display = 'block';
        } else {
            tableCLone.style.display = 'none';
        }

        navList.appendChild(navClone);
        tableCLone.appendChild(tbody);
        newTables.push(tableCLone);
        tableWrap.appendChild(tableCLone);
    }

    title.textContent = newNav[0].textContent;

    navList.addEventListener('click', (event) => {
        const target = event.target;

        if (target.closest('.popup-repair-types-nav__item')) {
            newNav.forEach((item, index) => {
                if (target === item) {
                    item.classList.add('active');
                    title.textContent = item.textContent;
                    newTables[index].style.display = 'block';
                } else {
                    item.classList.remove('active');
                    newTables[index].style.display = 'none';
                }
            })
        }
    });



};

export default typesRepairPopup;