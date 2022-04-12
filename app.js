

const secondHand = document.querySelector('[data-second-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const hourHand = document.querySelector('[data-hour-hand]');

function setClock() {
    const currentDate = new Date();
    const deg = 6;
    const secondRotate = currentDate.getSeconds() * deg;
    const minuteRotate = currentDate.getMinutes() * deg;
    const hourRotate = currentDate.getHours() * 30;
    setRotate(secondHand,secondRotate);
    setRotate(minuteHand,minuteRotate);
    setRotate(hourHand, hourRotate + minuteRotate/12);
}

function setRotate(element, rotate) {
    const numberDeg = `${rotate}deg`;
    element.style.setProperty('--rotate',numberDeg);
}

// setClock();
setInterval(setClock, 1000);