!function(t){var e={};function i(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(s,o,function(e){return t[e]}.bind(null,o));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);var s=()=>{const t=document.querySelector(".header-contacts__arrow"),e=document.querySelector(".header-contacts__phone-number-accord"),i=t.querySelector("img");e.style.top=0,t.addEventListener("click",()=>{const t=(t,s,o)=>{e.style.top=`${t}px`,e.querySelector("a").style.opacity=s,i.style.transform=`rotate(${o}deg)`};"0px"===e.style.top?t(20,1,180):t(0,0,0)})};var o=function(t,e="+7 (___) ___-__-__"){const i=document.querySelector(t);function s(t){const i=t.keyCode,s=e,o=s.replace(/\D/g,""),n=this.value.replace(/\D/g,"");console.log(s);let l=0,r=s.replace(/[_\d]/g,(function(t){return l<n.length?n.charAt(l++)||o.charAt(l):t}));l=r.indexOf("_"),-1!=l&&(r=r.slice(0,l));let a=s.substr(0,this.value.length).replace(/_+/g,(function(t){return"\\d{1,"+t.length+"}"})).replace(/[+()]/g,"\\$&");a=new RegExp("^"+a+"$"),(!a.test(this.value)||this.value.length<5||i>47&&i<58)&&(this.value=r),"blur"==t.type&&this.value.length<5&&(this.value="")}i.addEventListener("input",s),i.addEventListener("focus",s),i.addEventListener("blur",s)};var n=()=>{const t=document.querySelectorAll(".input-phone").length;for(let e=0;e<t;e++)o(`#feedback-input${e+1}`);const e=document.createElement("div");e.classList.add("status"),e.style.cssText="color: red; text-align: center;",document.body.addEventListener("submit",t=>{t.preventDefault(),e.textContent="";const i=t.target;if(i.closest("form")){t.preventDefault();const s=i.closest("form");if(s.matches(".feedback__form")?s.insertBefore(e,s.querySelector("button")):s.appendChild(e),!(t=>{const e=t.querySelectorAll("input");let i=!0;return e.forEach(t=>{t.matches(".checkbox__input")&&!t.checked&&(i=!1),t.matches(".checkbox__input")||0!==t.value.length||(i=!1)}),i})(s))return void(e.textContent="Введите свои данные и согласитесь с политикой конфиденциальности");{const t=new FormData(s);let i={};t.forEach((t,e)=>{i[e]=t}),e.textContent="",(t=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}))(i).then(t=>{if(200!==t.status)throw new Error;(()=>{const t=document.querySelector(".popup-thank");t.style.visibility="visible",document.body.addEventListener("click",e=>{const i=e.target;!i.closest(".close")&&i.closest(".popup-thank-bg")||(t.style.visibility="hidden")})})(),s.reset()}).catch(()=>e.textContent="Ошибка отправки данных")}}})};var l=(t,e)=>{const i=document.querySelector(`.popup-${t}`),s=document.querySelector(".popup-dialog-menu"),o=document.querySelector(".popup-menu");document.body.addEventListener("click",n=>{n.preventDefault();const l=n.target;if(i){if(l.closest(e))return i.style.visibility="visible",void(s.classList.contains("showHide-menu")&&(s.classList.remove("showHide-menu"),o.style.visibility="hidden"));l.closest(`.popup-dialog-${t}`)&&!l.closest(".close")||"visible"===i.style.visibility&&(i.style.visibility="hidden")}})};var r=class{constructor({main:t,wrap:e,next:i,prev:s,position:o=0,slidesToShow:n=1,infinity:l=!1,responsive:r=[],loop:a=!1,activeClass:d}){t&&e||console.warn("slider-carousel: Необходимо ввести 2 свойства(main, wrap)"),this.main=document.querySelector(t),this.wrap=document.querySelector(e),this.next=document.querySelector(i),this.prev=document.querySelector(s),this.slides=document.querySelector(e).children,this.slidesToShow=n,this.options={position:o,activeSlide:1,infinity:l,loop:a,activeClass:d,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=r}init(){this.addGloClass(),this.addStyle(),this.responsive&&this.responsInit(),this.options.loop&&(this.removeClass(),1===this.slidesToShow?this.options.activeSlide=0:this.insertItem(this.slides[this.slides.length-1],this.slides[0]),this.handlerClass(this.slides[this.options.activeSlide])),this.prev&&this.next&&this.controlSlider()}addGloClass(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");for(const t of this.slides)t.classList.add("glo-slider__item")}addStyle(){let t=document.getElementById("sliderCarousel-style");t||(t=document.createElement("style"),t.id="sliderCarousel-style"),t.textContent=`\n        .glo-slider {\n            overflow: hidden;\n        }\n        .glo-slider__wrap {\n         \n            display: flex;\n            transition: transform 0.5s !important;\n            will-change: transform !important;\n        }\n        .glo-slider__item {\n            display: flex !important;\n            align-items: center !important;\n            justify-content: center !important;\n            flex: 0 0 ${this.options.widthSlide}% !important;\n            margin: auto 0 !important; \n        }\n`,document.head.appendChild(t)}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}prevSlider(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&!this.options.loop&&(this.options.position=this.options.maxPosition),this.options.positionLoop--,this.options.loop?(this.handlerClass(this.slides[this.options.activeSlide]),this.insertItem(this.slides[this.slides.length-1],this.slides[0]),this.handlerClass(this.slides[this.options.activeSlide])):this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}nextSlider(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.positionLoop++,this.options.position>this.options.maxPosition&&!this.options.loop&&(this.options.position=0),this.options.loop?(this.handlerClass(this.slides[this.options.activeSlide]),this.insertItem(this.slides[0],null),this.handlerClass(this.slides[this.options.activeSlide])):this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}responsInit(){const t=this.slidesToShow,e=this.responsive.map(t=>t.breakpoint),i=Math.max(...e),s=()=>{this.loop&&(1===this.slidesToShow?this.options.activeSlide=0:this.options.activeSlide=1,this.removeClass(),this.handlerClass(this.options.activeSlide)),this.options.widthSlide=Math.floor(100/this.slidesToShow),this.options.maxPosition=this.slides.length-this.slidesToShow,this.addStyle()},o=()=>{const o=document.documentElement.clientWidth;if(o<i)for(let t=0;t<e.length;t++)o<e[t]&&(this.slidesToShow=this.responsive[t].slideToShow,s());else this.slidesToShow=t,s()};o(),window.addEventListener("resize",o)}handlerClass(t){this.options.activeClass&&t.classList.toggle(this.options.activeClass)}removeClass(){for(let t=0;t<this.slides.length;t++)this.slides[t].classList.remove(this.options.addGloClass)}insertItem(t,e){this.wrap.insertBefore(t,e)}};var a=class{constructor({container:t,slides:e,next:i,prev:s,position:o=0,counter:n,content:l}){this.container=document.querySelector(t),this.next=i,this.prev=s,this.slides=document.querySelectorAll(e),n&&(this.counter=this.container.querySelector(n),this.total=this.counter.querySelector(".slider-counter-content__total"),this.current=this.counter.querySelector(".slider-counter-content__current")),this.content=this.container.querySelectorAll(l),this.options={position:o,countSlides:this.slides.length,slideWidth:this.slides[0].offsetWidth}}init(){this.changeConter(this.total,this.options.countSlides),this.showSlide(),this.main()}main(){this.container.addEventListener("click",t=>{const e=t.target;this.prevSlide(),e.closest(this.prev)?this.options.position--:e.closest(this.next)&&this.options.position++,this.options.position>=this.options.countSlides&&(this.options.position=this.options.countSlides-1),this.options.position<0&&(this.options.position=0),this.changeConter(this.current,this.options.position+1),this.nextSlide()})}showSlide(){this.changeConter(this.current,this.options.position+1);for(let t=0;t<this.options.countSlides;t++)t===this.options.position?this.slides[t].style.display="flex":this.slides[t].style.display="none"}changeConter(t,e){t&&(t.textContent=e)}nextSlide(){this.slides[this.options.position].style.display="flex"}prevSlide(){this.slides[this.options.position].style.display="none"}};var d=t=>{const e=document.querySelector(`#${t}`);let i;const s=()=>{e.addEventListener("mouseover",e=>{let i=e.target;if(i.closest(`.${t}-item__icon`)){const e=i.closest(`.${t}-item`),s=e.querySelector(`.${t}-item-popup`),o=s.getBoundingClientRect();i.closest(".row").classList.add("active-row"),o.top<=0&&(s.style.bottom=`-${o.height+20}px`,(t=>{const e=document.createElement("style");e.classList.add("hint-style"),e.textContent=`\n        .active-row {\n            z-index: 999999999;\n        }\n        .${t.classList[t.classList.length-1]} {\n            padding-top: 35px;\n        }\n        .${t.classList[t.classList.length-1]}:before {\n        -webkit-transform: rotate(180deg) !important;\n        transform: rotate(180deg) !important;\n    }`,document.head.appendChild(e)})(s)),e.classList.add("active-item"),s.style.visibility="visible",s.style.opacity=1}}),e.addEventListener("mouseout",e=>{let i=e.target;if(i.closest(`.${t}-item__icon`)){const e=i.closest(`.${t}-item`),s=e.querySelector(`.${t}-item-popup`);e.classList.remove("active-item"),i.closest(".row").classList.remove("active-row"),s.removeAttribute("style"),document.head.querySelector(".hint-style")&&document.head.querySelector(".hint-style").remove()}})},o=()=>{document.querySelectorAll(`.${t}-item`);document.documentElement.clientWidth<=1024?(()=>{const e=document.querySelector(`.${t}-slider`);let s,o=1;"formula"===t?(s=250,o=3):(s=500,o=1),e.style.cssText=`padding-bottom: ${s}px`,i=new r({main:`.${t}-slider-wrap`,wrap:`.${t}-slider`,next:`#${t}-arrow_right`,prev:`#${t}-arrow_left`,slidesToShow:o,infinity:!0,loop:!0,activeClass:"active-item",responsive:[{breakpoint:768,slideToShow:1}]}),i.init()})():(s(),i=null)};o(),window.addEventListener("resize",o)};var p=()=>{const t=document.querySelector(".accordion"),e=t=>{t.classList.toggle("msg-active")};t.addEventListener("click",i=>{const s=i.target;if(s.closest(".title_block")){const i=t.querySelector(".msg-active");console.log(i),i&&!s.matches(".msg-active")&&e(i),e(s)}})};var c=()=>{const t=document.getElementById("repair-types"),e=t.querySelector(".repair-types-slider"),i=t.querySelector(".nav-list-repair"),s=t.querySelectorAll(".repair-types-nav__item"),o=t.querySelector(".slider-counter-repair"),n=o.querySelector(".slider-counter-content__total"),l=o.querySelector(".slider-counter-content__current"),a=e.children.length,d=(t,e)=>{t.classList.toggle(e)};for(let t=0;t<a;t++)0!==t?e.children[t].style.display="none":d(e.children[t],"active-slider");n.textContent=e.querySelector(".active-slider").children.length;let p=[];for(let t=0;t<a;t++)p[t]=new r({main:".repair-types-slider",wrap:`.types-repair${t+1}`,next:"#repair-types-arrow_right",prev:"#repair-types-arrow_left",slidesToShow:1,infinity:!0}),p[t].init();(()=>{const e=t.querySelector(".nav-wrap-repair");let s=0;i.style.transition="transform 0.5s",e.addEventListener("click",t=>{const e=t.target;e.closest("#nav-arrow-repair-left_base")?s-=20:e.closest("#nav-arrow-repair-right_base")&&(s+=20),s<0&&(s=0),s>60&&(s=60),i.style.transform=`translateX(-${s}%)`})})();const c=t=>{const i=e.querySelector(`.types-repair${t+1}`),s=e.querySelector(".active-slider");p[t].options.position=0,i.style.transform=`translateX(-${p[t].options.position*p[t].options.widthSlide}%)`,n.textContent=i.children.length,l.textContent=1,s.style.display="none",i.style.display="flex",d(i,"active-slider"),d(s,"active-slider")};t.addEventListener("click",t=>{const e=t.target;if(e.closest(".repair-types-nav__item")){const t=i.querySelector(".active");e.matches("active")||d(t,"active"),d(e,"active");for(let t=0;t<s.length;t++)s[t]===e&&c(t)}if(e.closest("#repair-types-arrow_right")||e.closest("#repair-types-arrow_left"))for(let t=0;t<s.length;t++)s[t].matches(".active")&&(l.textContent=p[t].options.position+1)})};var h=()=>{const t=document.querySelector(".popup-transparency"),e=document.querySelector(".popup-dialog-menu"),i=document.querySelector(".popup-menu"),s=document.querySelectorAll(".transparency-item");let o;const n=new a({container:".popup-transparency",slides:".popup-transparency-slider__slide",next:"#transparency_right",prev:"#transparency_left",counter:".slider-counter-content"});n.init();const l=new a({container:".transparency-slider-wrap",slides:".transparency-item",next:"#transparency-arrow_right",prev:"#transparency-arrow_left"});l.init();const r=()=>{if(document.documentElement.clientWidth<=1090)l.showSlide();else for(let t=0;t<s.length;t++)s[t].style.display="flex"};r(),window.addEventListener("resize",r),document.body.addEventListener("click",l=>{l.preventDefault();const r=l.target;if(r.closest(".transparency-item__img")){t.style.visibility="visible",e.classList.contains("showHide-menu")&&(e.classList.remove("showHide-menu"),i.style.visibility="hidden");for(let t=0;t<s.length;t++)s[t]===r.closest(".transparency-item")&&(o=t);return n.options.position=o,void n.showSlide()}r.closest(".popup-dialog-transparency")&&!r.closest(".close")||"visible"===t.style.visibility&&(t.style.visibility="hidden")})};var u=()=>{new a({container:"#reviews",slides:".reviews-slider__slide",next:"#reviews-arrow_right",prev:"#reviews-arrow_left"}).init()};var m=class{constructor({main:t,wrap:e,next:i,prev:s,position:o=0,slidesToShow:n=1,infinity:l=!1,responsive:r=[],loop:a=!1,activeClass:d}){t&&e||console.warn("slider-carousel: Необходимо ввести 2 свойства(main, wrap)"),this.main=document.querySelector(t),this.wrap=document.querySelector(e),this.next=document.querySelector(i),this.prev=document.querySelector(s),this.slides=document.querySelector(e).children,this.slidesToShow=n,this.options={position:o,activeSlide:1,infinity:l,loop:a,activeClass:d,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=r}init(){this.addGloClass(),this.addStyle(),this.responsive&&this.responsInit(),this.options.loop&&(this.removeClass(),1===this.slidesToShow?this.options.activeSlide=0:this.insertItem(this.slides[this.slides.length-1],this.slides[0]),this.handlerClass(this.slides[this.options.activeSlide])),this.prev&&this.next&&this.controlSlider()}addGloClass(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");for(const t of this.slides)t.classList.add("glo-slider__item")}addStyle(){let t=document.getElementById("sliderCarousel-style");t||(t=document.createElement("style"),t.id="sliderCarousel-style"),t.textContent=`\n        .glo-slider {\n            overflow: hidden;\n        }\n        .glo-slider__wrap {\n         \n            display: flex;\n            transition: transform 0.5s !important;\n            will-change: transform !important;\n        }\n        .glo-slider__item {\n            display: flex !important;\n            align-items: center !important;\n            justify-content: center !important;\n            flex: 0 0 ${this.options.widthSlide}% !important;\n            margin: auto 0 !important; \n        }\n`,document.head.appendChild(t)}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}prevSlider(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&!this.options.loop&&(this.options.position=this.options.maxPosition),this.options.positionLoop--,this.options.loop?(this.handlerClass(this.slides[this.options.activeSlide]),this.insertItem(this.slides[this.slides.length-1],this.slides[0]),this.handlerClass(this.slides[this.options.activeSlide])):this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}nextSlider(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.positionLoop++,this.options.position>this.options.maxPosition&&!this.options.loop&&(this.options.position=0),this.options.loop?(this.handlerClass(this.slides[this.options.activeSlide]),this.insertItem(this.slides[0],null),this.handlerClass(this.slides[this.options.activeSlide])):this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}responsInit(){const t=this.slidesToShow,e=this.responsive.map(t=>t.breakpoint),i=Math.max(...e),s=()=>{this.loop&&(1===this.slidesToShow?this.options.activeSlide=0:this.options.activeSlide=1,this.removeClass(),this.handlerClass(this.options.activeSlide)),this.options.widthSlide=Math.floor(100/this.slidesToShow),this.options.maxPosition=this.slides.length-this.slidesToShow,this.addStyle()},o=()=>{const o=document.documentElement.clientWidth;if(o<i)for(let t=0;t<e.length;t++)o<e[t]&&(this.slidesToShow=this.responsive[t].slideToShow,s());else this.slidesToShow=t,s()};o(),window.addEventListener("resize",o)}handlerClass(t){this.options.activeClass&&t.classList.toggle(this.options.activeClass)}removeClass(){for(let t=0;t<this.slides.length;t++)this.slides[t].classList.remove(this.options.addGloClass)}insertItem(t,e){this.wrap.insertBefore(t,e)}};var y=class{constructor({container:t,slides:e,next:i,prev:s,position:o=0,counter:n,content:l}){this.container=document.querySelector(t),this.next=i,this.prev=s,this.slides=document.querySelectorAll(e),n&&(this.counter=this.container.querySelector(n),this.total=this.counter.querySelector(".slider-counter-content__total"),this.current=this.counter.querySelector(".slider-counter-content__current")),this.content=this.container.querySelectorAll(l),this.options={position:o,countSlides:this.slides.length,slideWidth:this.slides[0].offsetWidth}}init(){this.changeConter(this.total,this.options.countSlides),this.showSlide(),this.main()}main(){this.container.addEventListener("click",t=>{const e=t.target;this.prevSlide(),e.closest(this.prev)?this.options.position--:e.closest(this.next)&&this.options.position++,this.options.position>=this.options.countSlides&&(this.options.position=this.options.countSlides-1),this.options.position<0&&(this.options.position=0),this.changeConter(this.current,this.options.position+1),this.nextSlide()})}showSlide(){this.changeConter(this.current,this.options.position+1);for(let t=0;t<this.options.countSlides;t++)t===this.options.position?this.slides[t].style.display="flex":this.slides[t].style.display="none"}changeConter(t,e){t&&(t.textContent=e)}nextSlide(){this.slides[this.options.position].style.display="flex"}prevSlide(){this.slides[this.options.position].style.display="none"}};var v=()=>{const t=document.querySelector(".portfolio-slider"),e=document.querySelector(".portfolio-slider-mobile"),i=new m({main:".portfolio-slider-wrap",wrap:".portfolio-slider",next:"#portfolio-arrow_right",prev:"#portfolio-arrow_left",slidesToShow:3,infinity:!1,responsive:[{breakpoint:1024,slideToShow:2},{breakpoint:768,slideToShow:1}]}),s=new y({container:"#portfolio",slides:".portfolio-slider-mobile .portfolio-slider__slide-frame",next:"#portfolio-arrow-mobile_right",prev:"#portfolio-arrow-mobile_left",counter:"#portfolio-counter"}),o=()=>{document.documentElement.clientWidth<=768?(t.style.display="none",e.style.display="flex",document.getElementById("portfolio-arrow-mobile_right").style.display="flex",document.getElementById("portfolio-arrow-mobile_left").style.display="flex",document.getElementById("portfolio-arrow_right").style.display="none",document.getElementById("portfolio-arrow_left").style.display="none"):(t.style.display="flex",e.style.display="none",document.getElementById("portfolio-arrow-mobile_right").style.display="none",document.getElementById("portfolio-arrow-mobile_left").style.display="none",document.getElementById("portfolio-arrow_right").style.display="flex",document.getElementById("portfolio-arrow_left").style.display="flex")};o(),window.addEventListener("resize",o),i.init(),s.init()};var f=()=>{new a({container:".popup-dialog-portfolio",slides:".popup-portfolio-slider__slide",next:"#popup_portfolio_right",prev:"#popup_portfolio_left",counter:"#popup-portfolio-counter",content:".popup-portfolio-text"}).init()};var S=()=>{new r({main:".partner-wrapper",wrap:".partners-slider",next:"#partners-arrow_right",prev:"#partners-arrow_left",slidesToShow:3,infinity:!0,responsive:[{breakpoint:768,slideToShow:2},{breakpoint:575,slideToShow:1}]}).init()};(()=>{const t=document.querySelector(".popup-menu"),e=document.querySelector(".popup-dialog-menu"),i=()=>{e.classList.toggle("showHide-menu")};document.body.addEventListener("click",s=>{const o=s.target;if(o.closest(".menu__icon"))return t.style.visibility="visible",void i();if((!o.closest(".popup-dialog-menu")&&e.classList.contains("showHide-menu")||o.closest(".close-menu"))&&(t.style.visibility="hidden",i()),o.closest(".popup-menu-nav__item")){s.preventDefault(),t.style.visibility="hidden",i();const e=o.getAttribute("href");document.querySelector(`${e}`).scrollIntoView({behavior:"smooth",block:"start"})}else o.closest(".button-footer")&&(s.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))})})(),s(),n(),l("portfolio",".portfolio-slider__slide-frame"),l("repair-types","#link-repair"),l("consultation",".consultation-button"),l("design",".link-list-designs"),l("privacy",".link-privacy"),d("formula"),d("problems"),c(),h(),u(),p(),v(),f(),S()}]);