!function(t){var e={};function o(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(i,s,function(e){return t[e]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dist",o(o.s=0)}([function(t,e,o){"use strict";o.r(e);var i=()=>{const t=document.querySelector(".header-contacts__arrow"),e=document.querySelector(".header-contacts__phone-number-accord"),o=t.querySelector("img");e.style.top=0,t.addEventListener("click",()=>{const t=(t,i,s)=>{e.style.top=`${t}px`,e.querySelector("a").style.opacity=i,o.style.transform=`rotate(${s}deg)`};"0px"===e.style.top?t(20,1,180):t(0,0,0)})};var s=()=>{const t=document.querySelector(".popup-repair-types"),e=document.querySelector(".popup-dialog-menu"),o=document.querySelector(".popup-menu");document.body.addEventListener("click",i=>{const s=i.target;if(s.closest("#link-repair"))return t.style.visibility="visible",void(e.classList.contains("showHide-menu")&&(e.classList.remove("showHide-menu"),o.style.visibility="hidden"));!s.closest(".close")&&s.closest(".popup-dialog-repair-types")||(t.style.visibility="hidden")})};var n=()=>{document.body.addEventListener("input",t=>{const e=t.target;if(e.closest(".input-phone")){const t="+7 (___) ___ ____";let o=0,i=e.value.replace(/\D/g,""),s=t.replace(/\D/g,"");s.lenght>=i.lenght&&(i=s),e.value=t.replace(/./g,t=>/[_\d]/.test(t)&&o<i.length?i.charAt(o++):o>=i.length?"":t)}});const t=document.createElement("div");t.classList.add("status"),t.style.cssText="color: red; text-align: center;",document.body.addEventListener("submit",e=>{e.preventDefault(),t.textContent="";const o=e.target;if(o.closest("form")){e.preventDefault();const i=o.closest("form");if(i.matches(".feedback__form")?i.insertBefore(t,i.querySelector("button")):i.appendChild(t),!(t=>{const e=t.querySelectorAll("input");let o=!0;return e.forEach(t=>{t.matches(".checkbox__input")&&!t.checked&&(o=!1),t.matches(".checkbox__input")||0!==t.value.length||(o=!1)}),o})(i))return void(t.textContent="Введите свои данные и согласитесь с политикой конфиденциальности");{const e=new FormData(i);let o={};e.forEach((t,e)=>{o[e]=t}),t.textContent="",(t=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}))(o).then(t=>{if(200!==t.status)throw new Error;(()=>{const t=document.querySelector(".popup-thank");t.style.visibility="visible",document.body.addEventListener("click",e=>{const o=e.target;!o.closest(".close")&&o.closest(".popup-thank-bg")||(t.style.visibility="hidden")})})(),i.reset()}).catch(()=>t.textContent="Ошибка отправки данных")}}})};var r=()=>{const t=document.querySelector(".popup-privacy");document.body.addEventListener("click",e=>{const o=e.target;o.closest(".link-privacy")?t.style.visibility="visible":o.closest(".popup-dialog-privacy")&&!o.closest(".close")||(t.style.visibility="hidden")})};var l=()=>{const t=document.querySelector(".popup-consultation");document.body.addEventListener("click",e=>{const o=e.target;if(o.closest(".consultation-button")){const e=t.querySelector("form");return e.querySelector(".status")&&e.removeChild(e.querySelector(".status")),void(t.style.visibility="visible")}o.closest(".feedback-wrap")&&!o.closest(".close")||(t.style.visibility="hidden")})};var c=class{constructor({main:t,wrap:e,next:o,prev:i,position:s=0,slidesToShow:n=3,infinity:r=!1,responsive:l=[]}){t&&e||console.warn("slider-carousel: Необходимо ввести 2 свойства(main, wrap)"),this.main=document.querySelector(t),this.wrap=document.querySelector(e),this.next=document.querySelector(o),this.prev=document.querySelector(i),this.slides=document.querySelector(e).children,this.slidesToShow=n,this.options={position:s,infinity:r,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=l}init(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responsInit()}addGloClass(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");for(const t of this.slides)t.classList.add("glo-slider__item")}addStyle(){let t=document.getElementById("sliderCarousel-style");t||(t=document.createElement("style"),t.id="sliderCarousel-style"),t.textContent=`\n        .glo-slider {\n            overflow: hidden  !important;\n        }\n        .glo-slider__wrap {\n            display: flex !important;\n            transition: transform 0.5s !important;\n            will-change: transform !important;\n        }\n        .glo-slider__item {\n            display: flex !important;\n            align-items: center;\n            justify-content: center;\n            flex: 0 0 ${this.options.widthSlide}% !important;\n            margin: auto 0 !important; \n        }\n`,document.head.appendChild(t)}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}prevSlider(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}nextSlider(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}addArrow(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);const t=document.createElement("style");t.textContent="\n               .glo-slider__prev,\n        .glo-slider__next {\n            margin: 0 10px;\n            border: 20px solid transparent;\n            background: transparent;\n        }\n        \n        .glo-slider__next{\n            border-left-color: #19b5fe;\n        }\n        .glo-slider__prev {\n            border-right-color: #19b5fe;\n        }\n        .glo-slider__prev:hover,\n        .glo-slider__next:hover,\n        .glo-slider__prev:focus,\n        .glo-slider__next:focus {\n            background: transparent;\n            outline: transparent;\n        }\n        ",document.head.appendChild(t)}responsInit(){const t=this.slidesToShow,e=this.responsive.map(t=>t.breakpoint),o=Math.max(...e),i=()=>{this.options.widthSlide=Math.floor(100/this.slidesToShow),this.options.maxPosition=this.slides.length-this.slidesToShow,this.addStyle()},s=()=>{const s=document.documentElement.clientWidth;if(s<o)for(let t=0;t<e.length;t++)s<e[t]&&(this.slidesToShow=this.responsive[t].slideToShow,i());else this.slidesToShow=t,i()};s(),window.addEventListener("resize",s)}};var a=(t,e)=>{const o=document.querySelector(`#${t}`);o.addEventListener("mouseover",e=>{let o=e.target;if(o.closest(`.${t}-item__icon`)){const e=o.closest(`.${t}-item`),i=e.querySelector(`.${t}-item-popup`),s=i.getBoundingClientRect();o.closest(".row").classList.add("active-row"),s.top<=0&&(i.style.bottom=`-${s.height+20}px`,(t=>{const e=document.createElement("style");e.classList.add("hint-style"),e.textContent=`\n        .active-row {\n            z-index: 999999999;\n        }\n        .${t.classList[t.classList.length-1]} {\n            padding-top: 35px;\n        }\n        .${t.classList[t.classList.length-1]}:before {\n        -webkit-transform: rotate(180deg) !important;\n        transform: rotate(180deg) !important;\n    }`,document.head.appendChild(e)})(i)),e.classList.add("active-item"),i.style.visibility="visible",i.style.opacity=1}}),o.addEventListener("mouseout",e=>{let o=e.target;if(o.closest(`.${t}-item__icon`)){const e=o.closest(`.${t}-item`),i=e.querySelector(`.${t}-item-popup`);e.classList.remove("active-item"),o.closest(".row").classList.remove("active-row"),i.removeAttribute("style"),document.head.querySelector(".hint-style")&&document.head.querySelector(".hint-style").remove()}})};var d=()=>{const t=document.querySelector(".accordion");t.addEventListener("click",t=>{const e=t.target;e.closest(".title_block")&&e.classList.toggle("msg-active")})};(()=>{const t=document.querySelector(".popup-menu"),e=document.querySelector(".popup-dialog-menu"),o=()=>{e.classList.toggle("showHide-menu")};document.body.addEventListener("click",i=>{const s=i.target;if(s.closest(".menu__icon"))return t.style.visibility="visible",void o();if((!s.closest(".popup-dialog-menu")&&e.classList.contains("showHide-menu")||s.closest(".close-menu"))&&(t.style.visibility="hidden",o()),s.closest(".popup-menu-nav__item")){i.preventDefault(),t.style.visibility="hidden",o();const e=s.getAttribute("href");document.querySelector(`${e}`).scrollIntoView({behavior:"smooth",block:"start"})}else s.closest(".button-footer")&&(i.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))})})(),i(),s(),n(),r(),a("formula"),a("problems"),l(),d(),new c({main:".partner-wrapper",wrap:".partners-slider",next:"#partners-arrow_right",prev:"#partners-arrow_left",slidesToShow:3,infinity:!0,responsive:[{breakpoint:768,slideToShow:2},{breakpoint:575,slideToShow:1}]}).init()}]);