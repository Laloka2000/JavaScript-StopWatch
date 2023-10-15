const timeContainer = document.getElementById("timeContainer");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const stopButton = document.getElementById("stopButton");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startButton.addEventListener("click", () =>{
    
});

pauseButton.addEventListener("click", () =>{
    if(paused){
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 75);
    }
});
stopButton.addEventListener("click", () =>{});

function updateTime(){
    elapsedTime = Date.now() - startTime;
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / 1000 * 60) % 60);
    hrs = Math.floor((elapsedTime / 1000 * 60 * 60) % 60);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    function pad(unit){
        return(("0") + unit).length > 2 ? unit : "0" + unit;
    }
}
