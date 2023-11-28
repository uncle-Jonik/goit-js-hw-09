const flatpickr = require('flatpickr');
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
//
//
const refs = {
  input: document.querySelector('input#datetime-picker'),
  startButton: document.querySelector('button[data-start]'),
  dataDays: document.querySelector('span[data-days]'),
  dataHours: document.querySelector('span[data-hours]'),
  dataMinutes: document.querySelector('span[data-minutes]'),
  dataSeconds: document.querySelector('span[data-seconds]'),
};
strBtn = refs.startButton;
strBtn.disabled = true;
//

//
//
//
function pad(value) {
  return String(value).padStart(2, '0');
}
//
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
//
//
//
//
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // Чи вірно введений час?
    function correctlyEnteredTime() {
      if (new Date() >= selectedDates[0]) {
        return alert('Please choose a date in the future');
      }
      strBtn.disabled = false;
    }
    correctlyEnteredTime();
    //
    //
    strBtn.addEventListener('click', () => {
      strBtn.disabled = true;
      setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = selectedDates[0] - currentTime;
        //
        const { days, hours, minutes, seconds } = convertMs(deltaTime);
        refs.dataDays.textContent = days;
        refs.dataHours.textContent = hours;
        refs.dataMinutes.textContent = minutes;
        refs.dataSeconds.textContent = seconds;
      }, 1000);
    });
  },
};
//
//
flatpickr(refs.input, options);
