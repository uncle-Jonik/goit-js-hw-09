import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

// посилання на елементи
const refs = {
  input: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  dataDays: document.querySelector('span[data-days]'),
  dataHours: document.querySelector('span[data-hours]'),
  dataMinutes: document.querySelector('span[data-minutes]'),
  dataSeconds: document.querySelector('span[data-seconds]'),
};
let timerId = null;
let startTime = null;
let selectedTime = null;

refs.startBtn.addEventListener('click', handleStartBtnClick);
refs.startBtn.setAttribute('disabled', 'disabled');

function handleStartBtnClick() {
  timerId = setInterval(() => {
    startTime = Date.now();
    const currentTime = selectedTime - startTime;
    const time = convertMs(currentTime);
    console.log(time);
    updateTime(time);
    if (currentTime < 1000) {
      clearInterval(timerId);
    }
  }, 1000);
}
// ms в об'єкт
function convertMs(time) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(time / day));
  const hours = pad(Math.floor((time % day) / hour));
  const minutes = pad(Math.floor(((time % day) % hour) / minute));
  const seconds = pad(Math.floor((((time % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
// запуск функції
flatpickr('input#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedTime = selectedDates[0];

    if (selectedTime > Date.now()) {
      refs.startBtn.removeAttribute('disabled');
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
      refs.startBtn.setAttribute('disabled', 'disabled');
    }
  },
});
// рефракторинг виводу
function updateTime({ days, hours, minutes, seconds }) {
  refs.dataDays.textContent = days;
  refs.dataHours.textContent = hours;
  refs.dataMinutes.textContent = minutes;
  refs.dataSeconds.textContent = seconds;
}

function pad(value) {
  return String(value).padStart(2, '0');
}
