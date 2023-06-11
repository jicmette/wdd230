const hamburger = document.querySelector('#hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
  navigation.classList.toggle('responsive')
});

const today = new Date();
day = today.getDay();


//Meeting reminder
let meet;

if (day == 1 || day == 2){
  meet = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
} 

else if (day == 3){
  meet = "💼 Todays is our meeting, we wait for you at 7:00 p.m. Don't forget it!" 
}

else if (day == 0 || day == 5 || day == 6)
{
  meet ="☀️ It is weekend, enjoy it!";
}

else {
  meet = "🧑‍💼We work for you. Stay connected for more updates!";
}

document.querySelector("#meet").innerText = meet;

//Current date on the header
let currentDay;

switch (day) {
  case 0:
    currentDay = "Sunday";
    break;
  case 1:
    currentDay = "Monday";
    break;
  case 2:
    currentDay = "Tuesday";
    break;
  case 3:
    currentDay = "Wednesday";
    break;
  case 4:
    currentDay = "Thursday";
    break;
  case 5:
    currentDay = "Friday";
    break;
  case 6:
    currentDay = "Saturday";
    break;
}

const date = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

document.getElementById("currentDate").textContent = `${currentDay} - ${date.format()}`;

//Current Year on footer
const year = new Date().getFullYear();
document.querySelector(".currentYear").innerText = year;

//Last Modified
let update = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modification: ${update}`;

//Last Visit
const mSeconds = 84600000;

let daysToVisit = Date.now();
let lastVisit = Number(localStorage.getItem("dayLastVisit"));

const dayPass = Math.round((daysToVisit - lastVisit) / mSeconds);
document.getElementById("daySince").innerHTML = `Days since last visit: ${dayPass}`;


localStorage.setItem("dayLastVisit", daysToVisit);