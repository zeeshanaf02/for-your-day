window.addEventListener('scroll', function() {
    const slideDownSection = document.querySelector('.slide-down-section');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 300) { // Adjust this value depending on when you want it to appear
        slideDownSection.style.opacity = '1';
        slideDownSection.style.transform = 'translateY(0)';
    }
});
