let slideIndex = 1;

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  slides.forEach(slide => slide.classList.remove('active'));
  slides[slideIndex - 1].classList.add('active');
}

function changeSlide(n) {
  showSlide(slideIndex += n);
}
