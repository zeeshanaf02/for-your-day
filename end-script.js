// Function to reveal photos one after the other diagonally
function revealPhotos() {
    const photos = document.querySelectorAll('#photo-container img');
    let delay = 0;

    photos.forEach((photo) => {
        setTimeout(() => {
            photo.style.opacity = '1';
            photo.style.transform = 'translateY(0) scale(1.05)'; // Slide up with scaling
        }, delay);
        delay += 500; // 0.5 seconds delay between each photo
    });
}

// Function to handle the password and fade out gift box
function handlePassword() {
    const password = document.getElementById('password').value;
    const giftBox = document.getElementById('gift-box');
    const passwordContainer = document.getElementById('password-container');
    const photoContainer = document.getElementById('photo-container');

    if (password === "password") { // Replace with your actual password
        giftBox.style.opacity = 0;
        passwordContainer.style.opacity = 0;

        // After 2 seconds, hide the gift box and password input, show photos
        setTimeout(() => {
            giftBox.classList.add('hidden');
            passwordContainer.classList.add('hidden');
            photoContainer.classList.add('show'); // Ensure photo container is visible
            revealPhotos(); // Start revealing photos
            document.querySelector('.bottom-text-box').style.display = 'block'; // Display the text box
            document.querySelector('.photo-container').style.display = 'flex'; // Display photos
        }, 1000);
    } else {
        alert('Incorrect password. Please try again.');
    }
}

// Function to create falling papers
function createPaper() {
    const paper = document.createElement('div');
    paper.classList.add('paper');
    paper.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    paper.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random fall duration between 5 and 10 seconds
    document.getElementById('paper-fall').appendChild(paper);

    // Remove the paper after the animation ends
    setTimeout(() => {
        paper.remove();
    }, 10000); // Remove after 10 seconds (duration of fall + buffer)
}

// Generate falling papers every 300ms
setInterval(createPaper, 300);

// Add event listener to the "Open" button
document.getElementById('open-button').addEventListener('click', handlePassword);
