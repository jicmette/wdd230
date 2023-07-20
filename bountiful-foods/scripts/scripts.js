// Current Year on footer
const year = new Date().getFullYear();
document.querySelector(".currentYear").innerText = year;

//Hamburguer Nav
const hamburger = document.querySelector("#hamburger");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("responsive");
});

let update = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modification: ${update}`;

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
const fruits = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function getFruitsOptions() {
  const response = await fetch(fruits);
  const data = await response.json();
  console.table(data);
}

let fruit1 = document.getElementById("#fruits1");
let fruit2 = document.getElementById("#fruits2");
let fruit3 = document.getElementById("#fruits3");

let fruitSelected = [fruit1, fruit2, fruit3];

for (let index = 0; index < fruitSelected.length; index++) {
  let option0 = document.createElement("option");
  option0.setAttribute("value", "0");
  option0.textContent = "Select the fruit";

  fruitSelected[index].appendChild(option0);

  data.forEach(fruit => {
    let option = document.createElement("option");
    option.setAttribute("value", fruit.name); 
    fruitSelected[index].appendChild(option);
  })
}

getFruitsOptions();