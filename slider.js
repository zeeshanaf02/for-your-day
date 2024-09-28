let currentIndex = 0; // Current index of the image being displayed
const slides = document.querySelectorAll('.slide-image'); // Get all slide images
const totalSlides = slides.length; // Total number of slides

function showNextSlide() {
    // Hide the current slide
    slides[currentIndex].classList.remove('active');

    // Move to the next slide
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the start

    // Show the next slide
    slides[currentIndex].classList.add('active');
}

// Change the slide every 5 seconds
setInterval(showNextSlide, 1000);
