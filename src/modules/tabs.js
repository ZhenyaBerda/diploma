'use strict';

class Tabs {
    constructor({
        tabsHeader,
        tab,
        content
    }) {
        this.tabsHeader = document.querySelector(tabsHeader);
        this.tab = tabsHeader.querySelectorAll(tab);
        this.tabClass = tab;
        this.content = document.querySelectorAll(content);
        this.position = 0;
    }

    init() {
        this.tabsHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest(this.tabClass);

            if (target) {
                this.tab.forEach((item, index) => {
                    if (item === target) {
                        this.position = index;
                        this.toggleTabContent();
                    }
                })
            }

        });
    }

    toggleTabContent() {
        for (let i = 0; i < this.content.length; i++) {
            if (this.position === i) {
                this.tab[i].classList.add('active');
                this.content[i].classList.add('visible-content-block');
            } else {
                this.tab[i].classList.remove('active');
                this.content[i].classList.remove('visible-content-block');
            }
        }
    }


}

export default Tabs;