!function(){"use strict";const t=(t,i)=>{let s;return function(){const e=this,n=arguments;clearTimeout(s),s=setTimeout((()=>t.apply(e,n)),i)}},i={init(){this.SCREEN_BOUNDARY=768,this.HAMBURGER_ACTIVE_CLASS="header__hamburger--active",this.NAV_ACTIVE_CLASS="active",this.cacheDOM()},cacheDOM(){this.hamburger=document.getElementById("hamburger"),this.nav=document.querySelector(".header nav"),this.bindEvents()},bindEvents(){this.hamburger.addEventListener("click",(()=>{this.toggleMenu()})),window.addEventListener("resize",t((()=>{const{innerWidth:t}=window;t>=this.SCREEN_BOUNDARY&&(this.nav.classList.remove(this.NAV_ACTIVE_CLASS),this.hamburger.classList.remove(this.HAMBURGER_ACTIVE_CLASS))}),300))},toggleMenu(){this.nav.classList.contains(this.NAV_ACTIVE_CLASS)?(this.nav.classList.remove(this.NAV_ACTIVE_CLASS),this.hamburger.classList.remove(this.HAMBURGER_ACTIVE_CLASS)):(this.nav.classList.add(this.NAV_ACTIVE_CLASS),this.hamburger.classList.add(this.HAMBURGER_ACTIVE_CLASS))}};({init(){console.log("app init"),i.init()}}).init(),console.log("index")}();