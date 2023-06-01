const carousel = document.querySelector(".testimonials-carousel");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let slideIndex = 0;

prevButton.addEventListener("click", () => {
  slideIndex = Math.max(slideIndex - 1, 0);
  updateSlidePosition();
});

nextButton.addEventListener("click", () => {
  slideIndex = Math.min(slideIndex + 1, carousel.children.length - 1);
  updateSlidePosition();
});

function updateSlidePosition() {
  carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
}
