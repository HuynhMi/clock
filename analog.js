const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const numberElements = $$('.number');
const hourHandElement = $('.hand__wrap--hour');
const minuteHandElement = $('.hand__wrap--minute');
const secondHandElement = $('.hand__wrap--second');

const analogApp = {
    hourDeg: 0,
    minuteDeg: 0,
    secondDeg: 0,
    displayNumbers: function() {
        let rotate = 0;
        numberElements.forEach(function(element) {
            rotate += 30;
            element.style.transform = `rotate(${rotate}deg)`;
        })
    },
    getDeg: function() {
        const date = new Date();
        const [currentHour, currentMinute, currentSecond] = [date.getHours(), date.getMinutes(), date.getSeconds()];
        this.hourDeg = currentHour*(360/12) + currentMinute*(30/60) +'deg';
        this.minuteDeg = currentMinute*(360/60) + 'deg';
        this.secondDeg = currentSecond*(360/60) + 'deg';
    },
    setDeg: function() {
        hourHandElement.style.transform = `rotate(${this.hourDeg})`;
        minuteHandElement.style.transform = `rotate(${this.minuteDeg})`;
        secondHandElement.style.transform = `rotate(${this.secondDeg})`;
    },
    start: function() {
        const _this = this;
        _this.displayNumbers();
        setInterval(function() {
            _this.getDeg();
            _this.setDeg();
        }, 500)
    }
}

export {analogApp};