const time = document.querySelector('#time')
const control = document.querySelector('#control')
const reset = document.querySelector('#reset')

let timeLeft = 600;
let timerID = 1;

start();
stop();
secondsConvertor(timeLeft);


function buttonInterface() {
    if(timerID === null){
        control.innerHTML = 'Start';
        control.classList.remove('stop')
        control.classList.add('start')
    } else {
        control.innerHTML = 'Pause'
        control.classList.remove('start')
        control.classList.add('stop')
    }
}

function secondsConvertor(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    time.innerText = minutes.toString().padStart(2, "0") + ':' + seconds.toString().padStart(2, "0");
}


function start() { 

    if (timeLeft === 0) return;

    timerID = setInterval(() => {
        timeLeft--;
        secondsConvertor();

        if(timeLeft === 0) {
            stop();
        }
    }, 1000);

    buttonInterface();

}

function stop() {
    clearInterval(timerID);

    timerID = null;

    buttonInterface();
}

control.addEventListener('click', () => {
    if(timerID === null) {
        start();
    } else {
        stop();
        control.innerHTML = "Resume"
        control.classList.add('resume')
    }
});

reset.addEventListener('click', () => {
    const timeInput = prompt('Number of minutes:');

    if(timeInput <= 60) {
        stop();
        timeLeft = timeInput * 60;
        secondsConvertor();
        control.innerHTML.classList.add('start')
    }
});