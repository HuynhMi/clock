const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnNavOpen = $('.nav__btn--open');
const navElement = $('.nav');
const navListElement = $('.nav__list');
const linkElements = $$('.nav__link');
const containerElement = $('.container');
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
    console.log(scrollY);
    if (scrollY > 400) {
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

const numberElements = $$('.number');
const analogApp = {
    displayNumbers: function() {
        let rotate = 0;
        numberElements.forEach(function(element) {
            rotate += 30;
            element.style.transform = `rotate(${rotate}deg)`;
        })
    },
    start: function() {
        this.displayNumbers();
    }
}

analogApp.start();