let slideIndex = 0;
const slides = document.querySelectorAll(".slides");

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = (i === index) ? "1" : "0"; // Show only the active slide
    });
}

// Function for next slide
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length; // Loop back to first slide
    showSlide(slideIndex);
}

// Function for previous slide
function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length; // Loop back to last slide
    showSlide(slideIndex);
}

// Auto-play slides every 3 seconds
setInterval(nextSlide, 5000);

// Show first slide initially
showSlide(slideIndex);
