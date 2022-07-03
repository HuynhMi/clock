/*
    1. handle the click event
    2. loop the millionsecond to 99 and
    3. increase the second and 
    4. increase the minutes
*/
const $ = document.querySelector.bind(document);

const minuteElement = $('.counter__number--minute');
const secondElement = $('.counter__number--second');
const millionSecondElement = $('.counter__number--milionsecond');
const btnStart = $('.counter__btn--start');
const btnEnd = $('.counter__btn--end');
const btnReset = $('.counter__btn--reset');

const counterApp = {
    millonSecond: 0,
    second: 0,
    minute: 0,
    handleEvents: function() {
        const _this = this;
        let int;
        btnStart.onclick = function() {
            int = setInterval(function() {
                _this.increaseMilionSecond();
                millionSecondElement.innerText = _this.millonSecond < 10 ? `0${_this.millonSecond}` : _this.millonSecond;
                if (_this.millonSecond == 100) {
                    _this.millonSecond = 0;
                    _this.increaseSecond();
                    secondElement.innerText = _this.second < 10 ? `0${_this.second}` : _this.second;
                    if (_this.second == 100) {
                        _this.second = 0;
                        _this.increaseMinute();
                        minuteElement.innerText = _this.minute < 10 ? `0${_this.minute}` : _this.minute;
                        if (_this.minute == 100) {
                            clearInterval(int);
                        }
                    };
                }
            }, 100);

        }

        btnEnd.onclick = function() {
            clearInterval(int)
        }

        btnReset.onclick = function() {
            clearInterval(int);
            _this.clean();
        }
    },
    increaseMilionSecond: function() {
        if (this.millonSecond < 100) {
            this.millonSecond ++;
        }
    },
    increaseSecond: function() {
        if (this.second < 100) {
            this.second ++;
        }
    },
    increaseMinute: function() {
        if (this.minute < 100) {
            this.minute ++;
        }
    },
    clean: function() {
        this.second = 0;
        secondElement.innerText = '00';
        this.millonSecond = 0;
        millionSecondElement.innerText = '00';
        this.minute = 0;
        minuteElement.innerText = '00';
    },
    start: function() {
        this.handleEvents();
    }
}

export {counterApp};