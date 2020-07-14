const today = new Date();
const day = today.getDay();
const toggle = document.getElementById("toggle-btn");
let militaryTime = false;

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayOfTheWeekd = (document.getElementById("day").innerHTML =
  weekDays[day]);
const month = (document.getElementById(
  "month"
).innerHTML = today.toLocaleDateString(`default`, { month: "long" }));
const date = (document.getElementById("date").innerHTML = today.getDate());
const year = (document.getElementById("year").innerHTML = today.getFullYear());

function clock() {
  const today = new Date();
  const currentTime = document.getElementById("time");
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  let amPM = hours < 12 ? "am" : "pm";

  if (militaryTime === true) {
    hours = hours > 12 ? hours - 12 : hours;
    toggle.textContent = "Standard";
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  currentTime.innerHTML = `${hours}:${minutes}:${seconds} ${amPM}`;
}

toggle.addEventListener("click", () => {
  militaryTime = !militaryTime;
  toggle.textContent = "Military";
});

setInterval(clock, 1000);
