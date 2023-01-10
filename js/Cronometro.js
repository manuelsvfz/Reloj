let playPause = document.getElementById("playPause").lastElementChild;
let reset = document.getElementById("restart");
let Time = document.getElementById("cronometro");
let count = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

const justify = (number, count) => {
    let zero = "0";
    return zero.repeat(count - number.toString().length) + number;
}

const chronometer = () => {
    let espai = 2;
    if (count) {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
        Time.textContent = justify(hours, espai) + ":" + justify(minutes, espai) + ":" + justify(seconds, espai);
    }
    setTimeout(chronometer, 1000);
}

const toggleFunc = () => {
    if (count) {
        count = false;
        playPause.src = "../img/play.png";
    } else {
        count = true;
        playPause.src = "../img/pause.png";
    }
}

chronometer();
playPause.addEventListener("click", toggleFunc);
reset.addEventListener("click", () => {
    count = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    playPause.src = "../img/play.png";
    Time.textContent = "00:00:00";
});
