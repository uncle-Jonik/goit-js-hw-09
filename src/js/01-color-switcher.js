function getRandomHexColor() {
  // рандомайзер кольору
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
stopButton.disabled = true;

let timer = null;

startButton.addEventListener('click', onStartChangeBackgroundColor);
stopButton.addEventListener('click', onStopChangeBackgroundColor);
//
//
//
//функція по зміні кольору
function onStartChangeBackgroundColor() {
  startButton.disabled = true;
  stopButton.disabled = false;

  timer = setInterval(() => {
    const currentColor = getRandomHexColor();
    document.querySelector('body').style.backgroundColor = currentColor;
    document.querySelector('body').style.transition =
      '250ms cubic-bezier(0.4, 0, 0.2, 1)';
  }, 1000);
}
//
//припинення зміни кольору
function onStopChangeBackgroundColor() {
  startButton.disabled = false;
  stopButton.disabled = true;

  clearInterval(timer);
}
