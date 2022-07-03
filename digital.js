const $ = document.querySelector.bind(document);

const hourElement = $('.digital__number--hour');
const minuteElement = $('.digital__number--minute');
const secondElement = $('.digital__number--second');
const digitalApp = {
    currentHour: null,
    currentMinute: null,
    currentSecond: null,
    getTime: function() {
        const date = new Date();
        [this.currentHour, this.currentMinute, this.currentSecond] = [date.getHours(), date.getMinutes(), date.getSeconds()];
        this.currentHour = this.currentHour < 10 ? '0' + this.currentHour : this.currentHour;
        this.currentMinute = this.currentMinute < 10 ? '0' + this.currentMinute : this.currentMinute;
        this.currentSecond = this.currentSecond < 10 ? '0' + this.currentSecond : this.currentSecond;
    },
    setTime: function() {
        hourElement.innerText = this.currentHour;
        minuteElement.innerText = this.currentMinute;
        secondElement.innerText = this.currentSecond;
    },
    start: function() {
        const _this = this;
        setInterval(function() {
            _this.getTime();
            _this.setTime();
        })
    }
}

export {digitalApp};