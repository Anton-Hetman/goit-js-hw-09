const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let randomColor = getRandomHexColor();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
stopBtn.disabled = true;
startBtn.addEventListener('click', () => {
  randomColor = setInterval(() => {
    let randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
  }, 1000);
  stopBtn.disabled = false;
  startBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
  clearInterval(randomColor);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});
