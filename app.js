const control = document.querySelector('#control')
const reset = document.querySelector('#reset')
const save = document.querySelector('#save');
const close = document.querySelector('#close');
const title = document.querySelector('#title')
const wrapper = document.querySelector('#wrapper')
const timer = document.querySelector('#timer')
const click = document.querySelector('#click')
const clock = document.querySelector('#clock')
const done = document.querySelector('#done')


let cicles = 0
let timerID = null
let timeLeft = document.querySelector('#pomodoro').value * 60;
secondsConvertor(timeLeft)
                
function secondsConvertor(t){
    let minutes = Math.floor(t / 60);
    let seconds = t % 60;
    timer.innerHTML = minutes.toString().padStart(2, "0") + ':' + seconds.toString().padStart(2, "0");
}

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

function start(){
    if (timeLeft === 0) return;
    click.play()
    timerID = setInterval(() => {
        clock.play()
        timeLeft--;
        secondsConvertor(timeLeft);
        if(timeLeft === 0) {
            done.play()
            cicles++;
            stop();
            changeMode()
        }
    }, 1000);
    buttonInterface();
}

function stop() {
    clock.pause()
    clearInterval(timerID);
    timerID = null;
    buttonInterface();
}

control.addEventListener('click', () => {
        click.play()
    if(timerID === null) {
        start();
        // changeMode()
    } else {
        stop();
        control.innerHTML = "Resume"
        control.classList.add('resume')
    }
});

function changeMode() {
    if(cicles === 0){
        // timeLeft = document.querySelector('#pomodoro').value * 60
        title.innerHTML = 'Stay Focused'
    }
    if(cicles === 1){
        timeLeft = document.querySelector('#short').value * 60
        // secondsConvertor(timeLeft)
        title.innerHTML = 'Have a short break'
    }
    if(cicles === 2){
        timeLeft = document.querySelector('#pomodoro').value * 60
        // secondsConvertor(timeLeft)
        title.innerHTML = 'Stay Focused'
    }
    if(cicles === 3){
        timeLeft = document.querySelector('#short').value * 60
        // secondsConvertor(timeLeft)
        title.innerHTML = 'Have a short break'
    }
    if(cicles === 4){
        timeLeft = document.querySelector('#pomodoro').value * 60
        // secondsConvertor(timeLeft)
        title.innerHTML = 'Stay Focused'
    }
    if(cicles === 5){
        timeLeft = document.querySelector('#long').value * 60
        // secondsConvertor(timeLeft)S
        title.innerHTML ="It's time to long break"
    }
    if(cicles === 6){
        title.innerHTML ="Done!"
        cicles = 0
    }
}

reset.addEventListener('click', () => {
    wrapper.classList.add('none');
    popup.classList.remove('none');
});

close.addEventListener('click', () => {
    wrapper.classList.remove('none');
    popup.classList.add('none');
});

save.addEventListener('click', () => {
    cicles = 0
    click.play()
    wrapper.classList.remove('none');
    popup.classList.add('none');
    timer.innerHTML =  document.querySelector('#pomodoro').value * 60
    secondsConvertor(timer.innerHTML)
    timeLeft = document.querySelector('#long').value * 60
    timeLeft = document.querySelector('#short').value * 60
    timeLeft = document.querySelector('#pomodoro').value * 60
    changeMode()
    stop()
});

