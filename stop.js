
const display = document.getElementById("display");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
        }
    }

function stop() {
    if(isRunning){
    clearInterval(timer);
    }  

function reset() {
    stopStopwatch();
    seconds = 0;
    updateDisplay();
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    
    let hours = Math.floor(elapsedTime/ (1000 * 60 * 60)).toString().padStart(2, '0');
    let mins = Math.floor((elapsedTime/1000 * 60 ) % 60).toString().padStart(2, '0');
    let secs = Math.floor(elapsedTime/1000  % 60).toString().padStart(2, '0');
    let millisecs = Math.floor(elapsedTime/1000  % 10).toString().padStart(2, '0');
    display.textContent = `${hours}:${mins}:${secs}:${millisecs}`;
}

document.getElementById("start").addEventListener("click", startStopwatch);
document.getElementById("stop").addEventListener("click", stopStopwatch);
document.getElementById("reset").addEventListener("click", resetStopwatch);

updateDisplay();
