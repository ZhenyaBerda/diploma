!function(t){var e={};function i(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(o,s,function(e){return t[e]}.bind(null,s));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);var o=()=>{const t=document.querySelector(".header-contacts__arrow"),e=document.querySelector(".header-contacts__phone-number-accord"),i=t.querySelector("img");e.style.top=0,t.addEventListener("click",()=>{const t=(t,o,s)=>{e.style.top=`${t}px`,e.querySelector("a").style.opacity=o,i.style.transform=`rotate(${s}deg)`};"0px"===e.style.top?t(20,1,180):t(0,0,0)})};var s=()=>{const t=document.querySelector(".popup-repair-types"),e=document.querySelector(".popup-dialog-menu"),i=document.querySelector(".popup-menu");document.body.addEventListener("click",o=>{const s=o.target;if(s.closest("#link-repair"))return t.style.visibility="visible",void(e.classList.contains("showHide-menu")&&(e.classList.remove("showHide-menu"),i.style.visibility="hidden"));!s.closest(".close")&&s.closest(".popup-dialog-repair-types")||(t.style.visibility="hidden")})};var n=()=>{document.body.addEventListener("input",t=>{t.target.closest(".input-phone")})};var r=()=>{const t=document.querySelector(".popup-privacy");document.body.addEventListener("click",e=>{const i=e.target;console.log(i),i.closest(".link-privacy")?t.style.visibility="visible":i.closest(".popup-dialog-privacy")&&!i.closest(".close")||(t.style.visibility="hidden")})};var l=class{constructor({main:t,wrap:e,next:i,prev:o,position:s=0,slidesToShow:n=3,infinity:r=!1,responsive:l=[]}){t&&e||console.warn("slider-carousel: Необходимо ввести 2 свойства(main, wrap)"),this.main=document.querySelector(t),this.wrap=document.querySelector(e),this.next=document.querySelector(i),this.prev=document.querySelector(o),this.slides=document.querySelector(e).children,this.slidesToShow=n,this.options={position:s,infinity:r,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=l}init(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responsInit()}addGloClass(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");for(const t of this.slides)t.classList.add("glo-slider__item")}addStyle(){let t=document.getElementById("sliderCarousel-style");t||(t=document.createElement("style"),t.id="sliderCarousel-style"),t.textContent=`\n        .glo-slider {\n            overflow: hidden  !important;\n        }\n        .glo-slider__wrap {\n            display: flex !important;\n            transition: transform 0.5s !important;\n            will-change: transform !important;\n        }\n        .glo-slider__item {\n            display: flex !important;\n            align-items: center;\n            justify-content: center;\n            flex: 0 0 ${this.options.widthSlide}% !important;\n            margin: auto 0 !important; \n        }\n`,document.head.appendChild(t)}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}prevSlider(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}nextSlider(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}addArrow(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);const t=document.createElement("style");t.textContent="\n               .glo-slider__prev,\n        .glo-slider__next {\n            margin: 0 10px;\n            border: 20px solid transparent;\n            background: transparent;\n        }\n        \n        .glo-slider__next{\n            border-left-color: #19b5fe;\n        }\n        .glo-slider__prev {\n            border-right-color: #19b5fe;\n        }\n        .glo-slider__prev:hover,\n        .glo-slider__next:hover,\n        .glo-slider__prev:focus,\n        .glo-slider__next:focus {\n            background: transparent;\n            outline: transparent;\n        }\n        ",document.head.appendChild(t)}responsInit(){const t=this.slidesToShow,e=this.responsive.map(t=>t.breakpoint),i=Math.max(...e),o=()=>{this.options.widthSlide=Math.floor(100/this.slidesToShow),this.options.maxPosition=this.slides.length-this.slidesToShow,this.addStyle()},s=()=>{const s=document.documentElement.clientWidth;if(s<i)for(let t=0;t<e.length;t++)s<e[t]&&(this.slidesToShow=this.responsive[t].slideToShow,o());else this.slidesToShow=t,o()};s(),window.addEventListener("resize",s)}};(()=>{const t=document.querySelector(".popup-menu"),e=document.querySelector(".popup-dialog-menu"),i=()=>{e.classList.toggle("showHide-menu")};document.body.addEventListener("click",o=>{const s=o.target;if(s.closest(".menu__icon"))return t.style.visibility="visible",void i();if((!s.closest(".popup-dialog-menu")&&e.classList.contains("showHide-menu")||s.closest(".close-menu"))&&(t.style.visibility="hidden",i()),s.closest(".popup-menu-nav__item")){o.preventDefault(),t.style.visibility="hidden",i();const e=s.getAttribute("href");document.querySelector(`${e}`).scrollIntoView({behavior:"smooth",block:"start"})}else s.closest(".button-footer")&&(o.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))})})(),o(),s(),n(),r(),new l({main:".partner-wrapper",wrap:".partners-slider",next:"#partners-arrow_right",prev:"#partners-arrow_left",slidesToShow:3,infinity:!0,responsive:[{breakpoint:768,slideToShow:2},{breakpoint:575,slideToShow:1}]}).init()}]);