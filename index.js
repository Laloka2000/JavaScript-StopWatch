const startBtn = document.querySelector('startBtn');
const stopBtn = document.querySelector('stopBtn')
const displayTime = document.querySelector('.time');
let timerInterval;
let startTime;
let isRunning = false;


startBtn.addEventListener("click", () => {
    if (isRunning){
        clearInterval(timerInterval);
        startBtn.textContent = "Start";
        stopBtn.disabled = false;
    } else {
        startTime = Date.now() - (startTime || 0); 
        timerInterval = setInterval(updateTime, 10);
        startBtn.textContent = 'Stop';
        stopBtn.disabled = true;
    }
    isRunning = !isRunning;
});


stopBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    startBtn.textContent = "Start";
    stopBtn.disabled = false;
    isRunning = false;
});

function updateTime(){
    const elapsedTime = Date.now() - startTime;
    const time = new Date(elapsedTime);
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    const milliseconds = time.getMilliseconds().toString().padStart(3, '0');
    displayTime.textContent = `${minutes}:${seconds}:${milliseconds}`;
}
