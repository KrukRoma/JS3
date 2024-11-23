const Time = {
    hours: 0,
    minutes: 0,
    seconds: 0,

    initializeCurrentTime() {
        const now = new Date();
        this.hours = now.getHours();
        this.minutes = now.getMinutes();
        this.seconds = now.getSeconds();
    },

    displayTime() {
        const format = (value) => String(value).padStart(2, '0');
        return `${format(this.hours)}:${format(this.minutes)}:${format(this.seconds)}`;
    },

    addSecond() {
        this.seconds++;
        if (this.seconds >= 60) {
            this.seconds = 0;
            this.minutes++;
        }
        if (this.minutes >= 60) {
            this.minutes = 0;
            this.hours++;
        }
        if (this.hours >= 24) {
            this.hours = 0;
        }
    },

    subtractSecond() {
        this.seconds--;
        if (this.seconds < 0) {
            this.seconds = 59;
            this.minutes--;
        }
        if (this.minutes < 0) {
            this.minutes = 59;
            this.hours--;
        }
        if (this.hours < 0) {
            this.hours = 23;
        }
    },

    showTimes() {
        document.write(`Current time: ${this.displayTime()}<br>`);
        this.addSecond();
        document.write(`Time + 1 second: ${this.displayTime()}<br>`);
        this.subtractSecond();
        this.subtractSecond();
        document.write(`Time - 1 second: ${this.displayTime()}<br>`);
    }
};

Time.initializeCurrentTime();
Time.showTimes();
