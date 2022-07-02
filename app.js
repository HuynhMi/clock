/*
1. css for numbers
2. css for hand
3.setTimeout để đồng hồ chạy
*/
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const numberElements = $$('.number');
const hourHandElement = $('#hand-hour');
const minuteHandElement = $('#hand-minute');
const secondHandElement = $('#hand-second');

displayNumbers= function() {
    let deg = 0;
    numberElements.forEach(function(element) {
        element.style.transform = `rotate(${deg}deg)`
        deg += 30;
    })
},

displayNumbers();

function handleTimer() {
    const date = new Date();
    let [hours, minutes, second] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    let hourDegs = hours*(360/12) + minutes*1/2;
    hourHandElement.style.transform = `rotate(${hourDegs}deg)`;
    let minutesDeg = minutes*(360/60);
    minuteHandElement.style.transform = `rotate(${minutesDeg}deg)`;
    let secondsDeg = second*(360/60) + 6;
    secondHandElement.style.transform = `rotate(${secondsDeg}deg)`;
};

function getRotate() {

}
setInterval(function() {
    handleTimer()
}, 500);