import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputDate = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");
const timer = document.querySelector(".timer");
const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");


let timerId = null;
flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {

        if (selectedDates[0] < Date.now()) {
            startBtn.disabled = true;
            alert("Please choose a date in the future")
        } else {
            startBtn.disabled = false;
        }

    },
});

startBtn.addEventListener("click", countdown);

function countdown() {
    timerId = setInterval(() => {

        const clientDate = new Date(inputDate.value).getTime();

        const diff = clientDate - Date.now();
        const { days, hours, minutes, seconds } = convertMs(diff);
        console.log(diff);
        if (diff < 1000) {
            clearInterval(timerId);

        }
        daysEl.textContent = addPad(days);
        hoursEl.textContent = addPad(hours);
        minutesEl.textContent = addPad(minutes);
        secondsEl.textContent = addPad(seconds);
    }, 1000);
}

function addPad(time) {
    return time.toString().padStart(2, 0);
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}