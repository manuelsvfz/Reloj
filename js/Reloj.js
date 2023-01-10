let container = document.getElementById("reloj");

const justify = (number, count) => {
    let zero = "0";
    return zero.repeat(count - number.toString().length) + number;
}

const updateTime = () => {
    let count = 2;
    let date = new Date();
    let hours = justify(date.getHours(), count);
    let minutes = justify(date.getMinutes(), count);
    let seconds = justify(date.getSeconds(), count);
    reloj.textContent = `${hours}:${minutes}:${seconds}`;
}

updateTime();
setInterval(updateTime, 1000);