function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");

let started = false;

startBtn.addEventListener('click', function () {
    started = true;
    if (started) {
        changeColor();
    }
})

function changeColor() {
    if (started) {
        setTimeout(function () {
            document.body.style.backgroundColor = getRandomHexColor();
            changeColor();
        }, 1000);
    }
}
    
stopBtn.addEventListener('click', function () {
    started = false;
})
