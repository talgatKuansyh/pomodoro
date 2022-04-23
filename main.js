const timer = document.querySelector('timer')
const startTimer = document.querySelector('#start')
const stopTimer = document.querySelector('#stop')
const resetTimer = document.querySelector('#reset')

let timerMinutes = document.querySelector('#minutes')

let timerSeconds = document.querySelector('#seconds')

let secondsCounter = 60;
let minutesCounter = 25;

let timerID;

startTimer.onclick = function() {
    timerID = setInterval(function(){
        secondsCounter--;
        timerSeconds.innerText = secondsCounter;
        timerMinutes.innerText = minutesCounter;
    
    
        if(secondsCounter < 10){
            timerSeconds.innerText = `0${secondsCounter}`
        }

        if(secondsCounter < 1){
            minutesCounter--;
            secondsCounter = 60
        }
    }, 1000)
}

stopTimer.onclick = function() {
    clearInterval(timerID);
}

resetTimer.onclick = function() {
    secondsCounter = 60;

    timerSeconds.innerText = '00';
    timerMinutes.innerText = minutesCounter

    clearInterval(timerID)
}
