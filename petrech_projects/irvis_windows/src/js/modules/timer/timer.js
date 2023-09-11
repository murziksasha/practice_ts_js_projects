export function timer(num, mainSelector) {
    const deadline = num;
    function getTimeRemaining(endtime) {
        const [day, month, year] = endtime.split('-');
        const dateString = `${year} ${month} ${day}`;
        const currentDate = new Date();
        const currentTimestamp = currentDate.getTime();
        const t = Date.parse(dateString) - currentTimestamp;
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        const hours = Math.floor((t / (1000 * 60 * 60) % 24));
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const seconds = Math.floor((t / 1000) % 60);
        return {
            total: t,
            days,
            hours,
            minutes,
            seconds
        };
    }
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000);
        updateClock();
        function updateClock() {
            const t = getTimeRemaining(endtime);
            if (!t.total || t.total <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(timeInterval);
            }
            else {
                days.textContent = ifLessTen(t.days);
                hours.textContent = ifLessTen(t.hours);
                minutes.textContent = ifLessTen(t.minutes);
                seconds.textContent = ifLessTen(t.seconds);
            }
            function ifLessTen(t) {
                return t < 10 ? (0 + t.toString()) : t.toString();
            }
        }
    }
    setClock(mainSelector, deadline);
}
//# sourceMappingURL=timer.js.map