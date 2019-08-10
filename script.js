const navbar = document.querySelector('.navbar');
const navContainer = document.querySelector('.navContainer');
const slide = document.querySelector('.slide');
const arrowRight = document.querySelector('.arrowRight');
const arrowLeft = document.querySelector('.arrowLeft');
const indicators = [...document.querySelectorAll('.indicators span')];

const time = 10000;
const right = "fas fa-chevron-right";
const left = "fas fa-chevron-left";
let counter = 0;
let pictureList = [
  "img/pic_0.jpg",
  "img/pic_1.jpg",
  "img/pic_2.jpg",
  "img/pic_3.jpg",
  "img/pic_4.jpg",
  "img/pic_5.jpg"
];

// Navbar scroll
navStretch = () => {
  if (window.scrollY === navbar.offsetTop) {
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
  if (counter === (pictureList.length)) {
    counter = 0;
  }
  slide.src = pictureList[counter];
  changeIndicator();
};

changeSlide = (e) => {

  if (e.target.className === right || e.keyCode === 39) {
    counter++;
    if (counter === (pictureList.length)) {
      counter = 0;
    }
  } else if (e.target.className === left || e.keyCode === 37) {
    counter--;
    if (counter < 0) {
      counter = pictureList.length - 1;
    }
  }
  slide.src = pictureList[counter];
  clearInterval(indexInterval);
  indexInterval = setInterval(autoSlide, time);
  changeIndicator();
};

let indexInterval = setInterval(autoSlide, time);

arrowRight.addEventListener("click", changeSlide);
arrowLeft.addEventListener("click", changeSlide);
window.addEventListener("keydown", changeSlide);
window.addEventListener("scroll", navStretch);