const navbar = document.querySelector('.navbar');
const navContainer = document.querySelector('.navContainer');
const slide = document.querySelector('.slide');
const arrowRight = document.querySelector('.arrowRight');
const arrowLeft = document.querySelector('.arrowLeft');
const burger = document.querySelector('.burger');
const indicators = [...document.querySelectorAll('.indicators span')];

const time = 10000;
const right = "fas fa-chevron-right";
const left = "fas fa-chevron-left";
let counter = 0;
let picturesList = [
  "img/pic_0.jpg",
  "img/pic_1.jpg",
  "img/pic_2.jpg",
  "img/pic_3.jpg",
  "img/pic_4.jpg",
  "img/pic_5.jpg"
];


// Burger Menu
classToggle = () => {
  burger.classList.toggle('active');
  navbar.classList.toggle('active');
};

// Navbar scroll
navStretch = () => {
  if (window.scrollY >= navbar.offsetTop) {
    navContainer.classList.add('active');
  } else {
    navContainer.classList.remove('active');
  };
};

// Slider
changeIndicator = () => {
  const activeIndicator = indicators.findIndex(indicator => indicator.classList.contains('active'));
  indicators[activeIndicator].classList.remove('active');
  indicators[counter].classList.add('active');
}

autoSlide = () => {
  counter++;
  if (counter === (picturesList.length)) {
    counter = 0;
  }
  slide.src = picturesList[counter];
  changeIndicator();
};

changeSlide = (e) => {
  if (e.target.className === right || e.keyCode === 39) {
    counter++;
    if (counter === (picturesList.length)) {
      counter = 0;
    }
  } else if (e.target.className === left || e.keyCode === 37) {
    counter--;
    if (counter < 0) {
      counter = picturesList.length - 1;
    }
  }
  slide.src = picturesList[counter];
  clearInterval(indexInterval);
  indexInterval = setInterval(autoSlide, time);
  changeIndicator();
};

let indexInterval = setInterval(autoSlide, time);


burger.addEventListener("click", classToggle);
arrowRight.addEventListener("click", changeSlide);
arrowLeft.addEventListener("click", changeSlide);
window.addEventListener("keydown", changeSlide);
window.addEventListener("scroll", navStretch);