function toggleMenu() {
  document.getElementsByClassName(".navigation").classList.toggle(".show");
}


//Day and date in the header
const today = new Date();
day = today.getDay();

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

