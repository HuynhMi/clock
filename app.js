import { analogApp } from "./analog.js";
import { digitalApp } from "./digital.js";
import { counterApp } from "./counter.js";

const $ = document.querySelector.bind(document);

const btnNavOpen = $('.nav__btn--open');
const navListElement = $('.nav__list');
const btnToTop = $('.btn-go-to-top');

btnNavOpen.onclick = function() {
    const heightNavList = Array.from(navListElement.children).reduce(function(total, element) {
        return total + element.clientHeight;
    },0);
    const spanElement = this.firstElementChild;
    if (spanElement.innerText === 'menu') {
        navListElement.style.height = heightNavList + 'px';
        spanElement.innerText = 'close';
    } else {
        navListElement.style.height = 0 + 'px';
        spanElement.innerText = 'menu';
    }
}

window.onscroll = function() {
    const scrollY = window.scrollY;
    if (scrollY > 200) {
        btnToTop.classList.add('show');
    } else {
        btnToTop.classList.remove('show');
    }
}

btnToTop.onclick = function() {
    window.scrollTo({
        left: 0,
        top: 0
    })
}

digitalApp.start();
analogApp.start();
counterApp.start();