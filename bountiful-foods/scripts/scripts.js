// Current Year on footer
const year = new Date().getFullYear();
document.querySelector(".currentYear").innerText = year;

//Hamburguer Nav
const hamburger = document.querySelector("#hamburger");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("responsive");
});

//Carousel Fresh Page
const carousel = document.querySelector(".carousel");
firstImg = carousel.querySelectorAll("img")[0];
const arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;

const showHideIcons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14;
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60);
  });
});

const autoSlide = () => {
  console.log(positionDiff);
};

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
  autoSlide();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);

//JSON for select fruits in Fresh Page
// const fruits = "https://brotherblazzard.github.io/canvas-content/fruit.json";

// async function getFruitsData() {
//   const response = await fetch(fruits);
//   const data = await response.json();
//   console.table(data);
// }

// for (let name in fruits) {
//     html += "<option value=" + name + ">" +fruits[name] + "</option>"
// }

// document.getElementById("fruit").innerHTML = f

// getFruitsData();

// let dropdown = document.getElementById("#fruits");
// dropdown.length = 0;

// let defaultOption = document.createElement("option");
// defaultOption.text = "Choose a Fruit";

// dropdown.add(defaultOption);
// dropdown.selectedIndex = 0;

// const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

// fetch(url)
//   .then(function (response) {
//     if (response.status !== 200) {
//       console.warn(
//         "Looks like there was a problem. Status Code: " + response.status
//       );
//       return;
//     }

//     // Examine the text in the response
//     response.json().then(function (data) {
//       let option;

//       for (let i = 0; i < data.length; i++) {
//         option = document.createElement("option");
//         option.text = data[i].name;
//         dropdown.add(option);
//       }
//     });
//   })

//   .catch(function (err) {
//     console.error("Fetch Error -", err);
//   });

//   fetch(url);
