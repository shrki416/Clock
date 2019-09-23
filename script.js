const today = new Date();
const day = today.getDay();
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfTheWeekd = document.getElementById("day").innerHTML = weekDays[day];
const month = document.getElementById("month").innerHTML = today.toLocaleDateString(`default`, { month: 'long' });
const date = document.getElementById("date").innerHTML = today.getDate();
const year = document.getElementById("year").innerHTML = today.getFullYear();

function clock() {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    // let am_pm = hours >= 12 ? 'pm' : 'am'; hours = hours % 12;
    // hours = hours ? hours : 12;
    // minutes = minutes < 10 ? '0' + minutes : minutes;

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById('hr').innerHTML = hours;
    document.getElementById('min').innerHTML = minutes;
    document.getElementById('sec').innerHTML = seconds;
}

setInterval(clock, 100);

let am_pm = today.toLocaleTimeString(); // local time in am/pm format
console.log(am_pm);
