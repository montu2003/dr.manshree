let yesButton = document.getElementById('yes-button');
let noButton = document.getElementById('no-button');
let mainText = document.getElementById('main-text');
let subText = document.getElementById('sub-text');
let questionText = document.getElementById('question');
let hugGif = document.getElementById('hug-gif');
let buttons = document.querySelector('.buttons');

// Event listener for the "Yes" button
yesButton.addEventListener('click', () => {
    mainText.textContent = "JFEHSKFJDAS I LOVE YOU";
    subText.style.display = 'none';
    questionText.style.display = 'none';
    buttons.style.display = 'none';
    hugGif.style.display = 'block'; // Display the GIF
});

// Event listener for the "No" button
noButton.addEventListener('click', () => {
    let randomX = Math.floor(Math.random() * 300) - 150; // Random horizontal movement
    let randomY = Math.floor(Math.random() * 300) - 150; // Random vertical movement
    
    // Move buttons randomly
    buttons.style.transform = `translate(${randomX}px, ${randomY}px)`;
    
    // Make the "Yes" button bigger
    yesButton.style.transform = 'scale(1.2)';
    yesButton.style.zIndex = '10'; // Bring Yes button in front
});
