const time = document.querySelector(".time")
const title = document.querySelector('.title')
const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const resumeBtn = document.querySelector('.resume')
const focusTime = document.querySelector('.focus-time')
const shortBreakTime = document.querySelector('.short-break-time')
const longBreakTime = document.querySelector('.long-break-time')

let timeLeft = focusTime.value * 60; /// left time is seconds
let cicles = 0;
let timerID = null;


// convert timeLeft to minutes
const secondsConvertor = () => {
    minutes = Math.floor(timeLeft / 60);
    seconds = timeLeft % 60;
    time.innerHTML = `${(minutes).toString().padStart(2, "0")}:${(seconds).toString().padStart(2, "0")}`;
}

secondsConvertor() 

// change mode when timeLeft is 0
const changeMode = () => {
    
    const Mode = [
        pomodoro = {
            time: focusTime.value * 60,
            title: 'Stay Focused'
        }, 
        
        shortBreak = {
            time: shortBreakTime.value * 60,
            title: 'Short break'
        },
        
        longBreak = {
            time: longBreakTime.value * 60,
            title: 'Long break'
        }
    ]

    if (cicles === 0) {
        title.innerHTML = pomodoro.title
        timeLeft = pomodoro.time
    } else if (cicles === 1) {
        title.innerHTML = shortBreak.title
        timeLeft = shortBreak.time
    } else if (cicles === 2) {
        title.innerHTML = pomodoro.title
        timeLeft = pomodoro.time
    } else if (cicles === 3) {
        title.innerHTML = shortBreak.title
        timeLeft = shortBreak.time
    } else if (cicles === 4) {
        title.innerHTML = pomodoro.title
        timeLeft = pomodoro.time
    } else if (cicles === 5) {
        title.innerHTML = longBreak.title
        timeLeft = longBreak.time
        cicles = -1
        pause()
    }

    secondsConvertor()
}

changeMode()

// update interface of buttons
const changeButtonStyle = () => {
    if(timerID === null) {
        startBtn.classList.add('start')
        startBtn.classList.remove('pause')
        startBtn.innerHTML = 'Start'
    } else {
        startBtn.classList.add('pause')
        startBtn.classList.remove('start')
        startBtn.innerHTML = 'Pause'
    }
}


const showSettings = () => {
    document.querySelector('.wrapper').classList.toggle('none')
    document.querySelector('.settings-wrapper').classList.toggle('none')
}


const saveSettings = () => {
    document.querySelector('.wrapper').classList.toggle('none')
    document.querySelector('.settings-wrapper').classList.toggle('none')
    pause()
    changeMode()
}

startBtn.addEventListener('click', ()=> {
    if (timerID === null) {
        start()
    } else {
        pause()
        startBtn.innerHTML = 'Resume'
    }
})

const start = () => {
    if (timeLeft === 0) return

    timerID = setInterval(() => {
        timeLeft--;
        secondsConvertor()
        
        if (timeLeft === 0) {
            cicles++
            pause()
            changeButtonStyle()
            changeMode()
        }
        
    }, 1000)
    
    changeButtonStyle()
} 

const pause = () => {
    clearInterval(timerID)
    timerID = null;
    changeButtonStyle()
}
