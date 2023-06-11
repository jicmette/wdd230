//Last Visit
const mSeconds = 84600000;

let daysToVisit = Date.now();
let lastVisit = Number(localStorage.getItem("dayLastVisit"));

const dayPass = Math.round((daysToVisit - lastVisit) / mSeconds);
document.getElementById("daySince").innerHTML = `Days since last visit: ${dayPass}`;


localStorage.setItem("dayLastVisit", daysToVisit);