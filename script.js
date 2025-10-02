const timeHour = document.getElementById("timeHour");
const timeMinute = document.getElementById("timeMinute");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const homepageTimer = () => {
    const time = new Date();
    timeHour.innerText = time.getHours().toString().padStart(2,"0");
    timeMinute.innerText = time.getMinutes().toString().padStart(2,"0");
    day.textContent = time.getDate().toString().padStart(2,"0");
    month.textContent = time.getMonth().toString().padStart(2,"0");
    year.textContent = time.getFullYear().toString().padStart(4,"0")
}

setInterval(() => {
    homepageTimer()
},1000)
