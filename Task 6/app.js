const slides = document.querySelectorAll('.slides');

let counter = 0;

// Position each slide at 100% increments
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const prevSlide = () => {
    if (counter > 0) { // Prevent moving before the first slide
        counter--;
        slideImage();
    }
};

const nextSlide = () => {
    if (counter < slides.length - 1) { // Prevent moving after the last slide
        counter++;
        slideImage();
    }
};

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
        slide.style.transition = "transform 0.5s ease-in-out"; // Smooth transition
    });
};
