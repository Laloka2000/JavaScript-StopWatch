const startButton = document.querySelector(".startBtn");
const stopButton = document.querySelector(".stopBtn");
const timeDisplay = document.querySelector(".time");
let timerInterval;
let startTime;
let isRunning = false;



startButton.addEventListener("click", () => {
  if (isRunning) {
    // Stop the timer
    clearInterval(timerInterval);
    startButton.textContent = "Start";
    stopButton.disabled = false;
  } else {
    // Start the timer
    startTime = Date.now() - (startTime || 0); // Resume from where it left off
    timerInterval = setInterval(updateTime, 10);
    startButton.textContent = "Stop";
    stopButton.disabled = true;
  }
  isRunning = !isRunning;
});


stopButton.addEventListener("click", () => {
  // Stop the timer
  clearInterval(timerInterval);
  startButton.textContent = "Start";
  stopButton.disabled = false;
  isRunning = false;
});


function updateTime() {
  const currentTime = Date.now() - startTime;
  const minutes = Math.floor(currentTime / 60000);
  const seconds = Math.floor((currentTime % 60000) / 1000);
  const milliseconds = currentTime % 1000;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}:${String(milliseconds).padStart(3, "0")}`;
  timeDisplay.textContent = formattedTime;
}
