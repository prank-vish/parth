const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const frame = document.querySelector('.frame');
const images = document.querySelectorAll('.image');

let slideNumber = 0;

const updateSlideWidth = () => {
  const slideWidth = frame.clientWidth;
  slider.style.transform = `translateX(-${slideNumber * slideWidth}px)`;
};

const showGradient = () => {
  frame.classList.add('fade-in');
  setTimeout(() => {
    frame.classList.remove('fade-in');
  }, 500);
};

const nextSlide = () => {
  const slideWidth = frame.clientWidth;
  if (slideNumber < images.length - 1) {
    slideNumber++;
  } else {
    slideNumber = 0;
  }
  slider.style.transform = `translateX(-${slideNumber * slideWidth}px)`;
  showGradient();
};

const prevSlide = () => {
  const slideWidth = frame.clientWidth;
  if (slideNumber > 0) {
    slideNumber--;
  } else {
    slideNumber = images.length - 1;
  }
  slider.style.transform = `translateX(-${slideNumber * slideWidth}px)`;
  showGradient();
};

window.addEventListener('resize', updateSlideWidth);
document.addEventListener('DOMContentLoaded', updateSlideWidth);

right.addEventListener('click', nextSlide);
left.addEventListener('click', prevSlide);

// Swipe detection
let startX;
let endX;

const handleTouchStart = (e) => {
  startX = e.touches[0].clientX;
};

const handleTouchMove = (e) => {
  endX = e.touches[0].clientX;
};

const handleTouchEnd = () => {
  if (startX > endX + 50) {
    nextSlide();
  } else if (startX < endX - 50) {
    prevSlide();
  }
};

slider.addEventListener('touchstart', handleTouchStart);
slider.addEventListener('touchmove', handleTouchMove);
slider.addEventListener('touchend', handleTouchEnd);
