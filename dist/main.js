!function(t){var e={};function i(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(s,o,function(e){return t[e]}.bind(null,o));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);var s=()=>{const t=document.querySelector(".header-contacts__arrow"),e=document.querySelector(".header-contacts__phone-number-accord"),i=t.querySelector("img");e.style.top=0,t.addEventListener("click",()=>{const t=(t,s,o)=>{e.style.top=`${t}px`,e.querySelector("a").style.opacity=s,i.style.transform=`rotate(${o}deg)`};"0px"===e.style.top?t(20,1,180):t(0,0,0)})};var o=()=>{document.body.addEventListener("input",t=>{const e=t.target;if(e.closest(".input-phone")){const t="+7 (___) ___ ____";let i=0,s=e.value.replace(/\D/g,""),o=t.replace(/\D/g,"");o.lenght>=s.lenght&&(s=o),e.value=t.replace(/./g,t=>/[_\d]/.test(t)&&i<s.length?s.charAt(i++):i>=s.length?"":t)}});const t=document.createElement("div");t.classList.add("status"),t.style.cssText="color: red; text-align: center;",document.body.addEventListener("submit",e=>{e.preventDefault(),t.textContent="";const i=e.target;if(i.closest("form")){e.preventDefault();const s=i.closest("form");if(s.matches(".feedback__form")?s.insertBefore(t,s.querySelector("button")):s.appendChild(t),!(t=>{const e=t.querySelectorAll("input");let i=!0;return e.forEach(t=>{t.matches(".checkbox__input")&&!t.checked&&(i=!1),t.matches(".checkbox__input")||0!==t.value.length||(i=!1)}),i})(s))return void(t.textContent="Введите свои данные и согласитесь с политикой конфиденциальности");{const e=new FormData(s);let i={};e.forEach((t,e)=>{i[e]=t}),t.textContent="",(t=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}))(i).then(t=>{if(200!==t.status)throw new Error;(()=>{const t=document.querySelector(".popup-thank");t.style.visibility="visible",document.body.addEventListener("click",e=>{const i=e.target;!i.closest(".close")&&i.closest(".popup-thank-bg")||(t.style.visibility="hidden")})})(),s.reset()}).catch(()=>t.textContent="Ошибка отправки данных")}}})};var n=(t,e)=>{const i=document.querySelector(`.popup-${t}`),s=document.querySelector(".popup-dialog-menu"),o=document.querySelector(".popup-menu");document.body.addEventListener("click",n=>{n.preventDefault();const r=n.target;if(i){if(r.closest(e))return i.style.visibility="visible",void(s.classList.contains("showHide-menu")&&(s.classList.remove("showHide-menu"),o.style.visibility="hidden"));r.closest(`.popup-dialog-${t}`)&&!r.closest(".close")||"visible"===i.style.visibility&&(i.style.visibility="hidden")}})};var r=class{constructor({main:t,wrap:e,next:i,prev:s,position:o=0,slidesToShow:n=3,infinity:r=!1,responsive:l=[]}){t&&e||console.warn("slider-carousel: Необходимо ввести 2 свойства(main, wrap)"),this.main=document.querySelector(t),this.wrap=document.querySelector(e),this.next=document.querySelector(i),this.prev=document.querySelector(s),this.slides=document.querySelector(e).children,this.slidesToShow=n,this.options={position:o,infinity:r,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=l}init(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responsInit()}addGloClass(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");for(const t of this.slides)t.classList.add("glo-slider__item")}addStyle(){let t=document.getElementById("sliderCarousel-style");t||(t=document.createElement("style"),t.id="sliderCarousel-style"),t.textContent=`\n        .glo-slider {\n            overflow: hidden;\n        }\n        .glo-slider__wrap {\n           \n            display: flex;\n            transition: transform 0.5s !important;\n            will-change: transform !important;\n        }\n        .glo-slider__item {\n            display: flex !important;\n            align-items: center !important;\n            justify-content: center !important;\n            flex: 0 0 ${this.options.widthSlide}% !important;\n            margin: auto 0 !important; \n        }\n`,document.head.appendChild(t)}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}prevSlider(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}nextSlider(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}addArrow(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);const t=document.createElement("style");t.textContent="\n               .glo-slider__prev,\n        .glo-slider__next {\n            margin: 0 10px;\n            border: 20px solid transparent;\n            background: transparent;\n        }\n        \n        .glo-slider__next{\n            border-left-color: #19b5fe;\n        }\n        .glo-slider__prev {\n            border-right-color: #19b5fe;\n        }\n        .glo-slider__prev:hover,\n        .glo-slider__next:hover,\n        .glo-slider__prev:focus,\n        .glo-slider__next:focus {\n            background: transparent;\n            outline: transparent;\n        }\n        ",document.head.appendChild(t)}responsInit(){const t=this.slidesToShow,e=this.responsive.map(t=>t.breakpoint),i=Math.max(...e),s=()=>{this.options.widthSlide=Math.floor(100/this.slidesToShow),this.options.maxPosition=this.slides.length-this.slidesToShow,this.addStyle()},o=()=>{const o=document.documentElement.clientWidth;if(o<i)for(let t=0;t<e.length;t++)o<e[t]&&(this.slidesToShow=this.responsive[t].slideToShow,s());else this.slidesToShow=t,s()};o(),window.addEventListener("resize",o)}};var l=(t,e)=>{const i=document.querySelector(`#${t}`);i.addEventListener("mouseover",e=>{let i=e.target;if(i.closest(`.${t}-item__icon`)){const e=i.closest(`.${t}-item`),s=e.querySelector(`.${t}-item-popup`),o=s.getBoundingClientRect();i.closest(".row").classList.add("active-row"),o.top<=0&&(s.style.bottom=`-${o.height+20}px`,(t=>{const e=document.createElement("style");e.classList.add("hint-style"),e.textContent=`\n        .active-row {\n            z-index: 999999999;\n        }\n        .${t.classList[t.classList.length-1]} {\n            padding-top: 35px;\n        }\n        .${t.classList[t.classList.length-1]}:before {\n        -webkit-transform: rotate(180deg) !important;\n        transform: rotate(180deg) !important;\n    }`,document.head.appendChild(e)})(s)),e.classList.add("active-item"),s.style.visibility="visible",s.style.opacity=1}}),i.addEventListener("mouseout",e=>{let i=e.target;if(i.closest(`.${t}-item__icon`)){const e=i.closest(`.${t}-item`),s=e.querySelector(`.${t}-item-popup`);e.classList.remove("active-item"),i.closest(".row").classList.remove("active-row"),s.removeAttribute("style"),document.head.querySelector(".hint-style")&&document.head.querySelector(".hint-style").remove()}})};var c=()=>{const t=document.querySelector(".accordion"),e=t=>{t.classList.toggle("msg-active")};t.addEventListener("click",i=>{const s=i.target;if(s.closest(".title_block")){const i=t.querySelector(".msg-active");console.log(i),i&&!s.matches(".msg-active")&&e(i),e(s)}})};var a=()=>{const t=document.getElementById("repair-types"),e=t.querySelector(".repair-types-slider"),i=t.querySelector(".nav-list-repair"),s=t.querySelectorAll(".repair-types-nav__item"),o=t.querySelector(".slider-counter-repair"),n=o.querySelector(".slider-counter-content__total"),l=o.querySelector(".slider-counter-content__current"),c=e.children.length,a=(t,e)=>{t.classList.toggle(e)};for(let t=0;t<c;t++)0!==t?e.children[t].style.display="none":a(e.children[t],"active-slider");n.textContent=e.querySelector(".active-slider").children.length;let d=[];for(let t=0;t<c;t++)d[t]=new r({main:".repair-types-slider",wrap:`.types-repair${t+1}`,next:"#repair-types-arrow_right",prev:"#repair-types-arrow_left",slidesToShow:1,infinity:!0}),d[t].init();(()=>{const e=t.querySelector(".nav-wrap-repair");let s=0;i.style.transition="transform 0.5s",e.addEventListener("click",t=>{const e=t.target;e.closest("#nav-arrow-repair-left_base")?s-=20:e.closest("#nav-arrow-repair-right_base")&&(s+=20),s<0&&(s=0),s>60&&(s=60),i.style.transform=`translateX(-${s}%)`})})();const p=t=>{const i=e.querySelector(`.types-repair${t+1}`),s=e.querySelector(".active-slider");d[t].options.position=0,i.style.transform=`translateX(-${d[t].options.position*d[t].options.widthSlide}%)`,n.textContent=i.children.length,l.textContent=1,s.style.display="none",i.style.display="flex",a(i,"active-slider"),a(s,"active-slider")};t.addEventListener("click",t=>{const e=t.target;if(e.closest(".repair-types-nav__item")){const t=i.querySelector(".active");e.matches("active")||a(t,"active"),a(e,"active");for(let t=0;t<s.length;t++)s[t]===e&&p(t)}if(e.closest("#repair-types-arrow_right")||e.closest("#repair-types-arrow_left"))for(let t=0;t<s.length;t++)s[t].matches(".active")&&(l.textContent=d[t].options.position+1)})};var d=class{constructor({container:t,slides:e,next:i,prev:s,position:o=0,counter:n,content:r}){this.container=document.querySelector(t),this.next=i,this.prev=s,this.slides=document.querySelectorAll(e),this.counter=this.container.querySelector(n),this.total=this.counter.querySelector(".slider-counter-content__total"),this.current=this.counter.querySelector(".slider-counter-content__current"),this.content=this.container.querySelectorAll(r),this.options={position:o,countSlides:this.slides.length,slideWidth:this.slides[0].offsetWidth}}init(){this.total.textContent=this.options.countSlides,this.current.textContent=this.options.position+1;for(let t=0;t<this.options.countSlides;t++)this.slides[t].style.display=0===t?"block":"none";this.main()}main(){this.container.addEventListener("click",t=>{const e=t.target;this.prevSlide(),e.closest(this.prev)?this.options.position--:e.closest(this.next)&&this.options.position++,this.options.position>=this.options.countSlides&&(this.options.position=this.options.countSlides-1),this.options.position<0&&(this.options.position=0),this.current.textContent=this.options.position+1,this.nextSlide()})}nextSlide(){this.slides[this.options.position].style.display="block"}prevSlide(){this.slides[this.options.position].style.display="none"}};var p=()=>{new d({container:".popup-transparency",slides:".popup-transparency-slider__slide",next:"#transparency_right",prev:"#transparency_left",counter:".slider-counter-content"}).init(),n("transparency",".transparency-item__img")};(()=>{const t=document.querySelector(".popup-menu"),e=document.querySelector(".popup-dialog-menu"),i=()=>{e.classList.toggle("showHide-menu")};document.body.addEventListener("click",s=>{const o=s.target;if(o.closest(".menu__icon"))return t.style.visibility="visible",void i();if((!o.closest(".popup-dialog-menu")&&e.classList.contains("showHide-menu")||o.closest(".close-menu"))&&(t.style.visibility="hidden",i()),o.closest(".popup-menu-nav__item")){s.preventDefault(),t.style.visibility="hidden",i();const e=o.getAttribute("href");document.querySelector(`${e}`).scrollIntoView({behavior:"smooth",block:"start"})}else o.closest(".button-footer")&&(s.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))})})(),s(),o(),n("portfolio",".portfolio-slider__slide-frame"),n("repair-types","#link-repair"),n("consultation",".consultation-button"),n("design",".link-list-designs"),n("privacy",".link-privacy"),l("formula"),l("problems"),a(),p(),c(),new r({main:".partner-wrapper",wrap:".partners-slider",next:"#partners-arrow_right",prev:"#partners-arrow_left",slidesToShow:3,infinity:!0,responsive:[{breakpoint:768,slideToShow:2},{breakpoint:575,slideToShow:1}]}).init()}]);