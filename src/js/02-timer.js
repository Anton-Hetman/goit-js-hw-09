import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dataInput = document.querySelector('#datetime-picker');
const dataInputBtn = document.querySelector('button[data-start]');

const timerDataDays = document.querySelector('span[data-days]');
const timerDataHours = document.querySelector('span[data-hours]');
const timerDataMinutes = document.querySelector('span[data-minutes]');
const timerDataSeconds = document.querySelector('span[data-seconds]');

const startTimer = dataInputBtn.addEventListener('click', timer);
dataInputBtn.disabled = true;

let newDate;
let selectedDate;

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    newDate = new Date().getTime();
    selectedDate = selectedDates[0].getTime();
    if (selectedDate < newDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      dataInputBtn.disabled = false;
      dataInput.disabled = false;
    }
  },
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function timer(timerId) {
  timerId = setInterval(() => {
    const differenceOfTime = selectedDate - new Date().getTime();
    const { days, hours, minutes, seconds } = convertMs(differenceOfTime);
    timerDataDays.textContent = days;
    timerDataHours.textContent = hours;
    timerDataMinutes.textContent = minutes;
    timerDataSeconds.textContent = seconds;
    if (differenceOfTime < 1000) {
      timerId = clearInterval();
      dataInput.disabled = false;
    }
  }, 1000);
  dataInput.disabled = true;
  dataInputBtn.disabled = true;
}
