let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, idx) => {
        slide.classList.remove('active');
        slide.style.zIndex = idx === index ? '1' : '0';
    });

    currentSlide = index;
    slides[currentSlide].classList.add('active');
}

setInterval(() => {
    showSlide((currentSlide + 1) % slides.length);}, 2000); // Change slide every 3 seconds
