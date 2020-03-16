'use strict';

class Tabs {
    constructor({
        tabsHeader,
        tab,
        content,
        slider,
        activeClass
    }) {
        this.tabsHeader = document.querySelector(tabsHeader);
        this.tab = this.tabsHeader.querySelectorAll(tab);
        this.tabClass = tab;
        if (content) {
            this.content = document.querySelectorAll(content);
        }
        this.slider = document.querySelector(slider).children;

        this.position = 0;
        this.activeClass = activeClass;

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
                });
            }

        });
    }

    toggleTabContent() {
        for (let i = 0; i < this.tab.length; i++) {
            if (this.position === i) {
                this.tab[i].classList.add('active');
                if (this.content) {
                    this.content[i].classList.add(this.activeClass);
                    // this.content[i].style.display = 'block';
                }
                this.slider[i].classList.add('active-slider');
                this.slider[i].style.display = 'block';

            } else {
                this.tab[i].classList.remove('active');
                if (this.content) {
                    this.content[i].classList.remove(this.activeClass);
                    // this.content[i].style.display = 'none';

                }
                this.slider[i].classList.remove('active-slider');
                this.slider[i].style.display = 'none';


            }
        }
    }


}

export default Tabs;