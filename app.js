

const secondHand = document.querySelector('[data-second-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const hourHand = document.querySelector('[data-hour-hand]');

//Way 1
// function setClock() {
//     const currentDate = new Date();
//     const deg = 6;
//     const secondRotate = currentDate.getSeconds() * deg;
//     const minuteRotate = currentDate.getMinutes() * deg;
//     const hourRotate = currentDate.getHours() * 30;
//     setRotate(secondHand,secondRotate);
//     setRotate(minuteHand,minuteRotate);
//     setRotate(hourHand, hourRotate + minuteRotate/12);
// }

// function setRotate(element, rotate) {
//     const numberDeg = `${rotate}deg`;
//     element.style.setProperty('--rotate',numberDeg);
// }


// way 2
function setClock() {
    const currentDate = new Date();
    const secondRotate = currentDate.getSeconds()/60;
    const minuteRotate = currentDate.getMinutes()/60;
    const hourRotate = (minuteRotate + currentDate.getHours())/12;
    setRotate(secondHand, secondRotate);
    setRotate(minuteHand, minuteRotate);
    setRotate(hourHand, hourRotate);
}

function setRotate(element, rotate) {
    let deg = rotate * 360;
    deg = `${deg}deg`;
    console.log(deg);
    element.style.setProperty('--rotate', deg);
}
setClock();
setInterval(setClock, 1000);