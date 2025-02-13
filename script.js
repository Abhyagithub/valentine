const openingScreen = document.getElementById('openingScreen');
const mainContent = document.getElementById('mainContent');
const yourNameInput = document.getElementById('yourName');
const startButton = document.getElementById('startButton');
const displayname = document.getElementById('displayname');
const loveEffect = document.querySelector('.love-effect');


// Function to show random message
function showRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    message.textContent = messages[randomIndex];
}

// Function to create love effect (emojis)
function createLoveEffect() {
    const emojis = ["💖", "😍", "💌", "🥰", "💕", "💘", "💓", "💞"];
    for (let i = 0; i < 50; i++) { // Increase number of emojis
        const span = document.createElement('span');
        span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        span.style.left = Math.random() * 100 + '%';
        span.style.animationDuration = Math.random() * 3 + 2 + 's';
        loveEffect.appendChild(span);
    }
}

// Function to shake the button
function shakeButton() {
    startButton.classList.add('shake');
    setTimeout(() => {
        startButton.classList.remove('shake');
    }, 500);
}


// Start button click event
startButton.addEventListener('click', () => {
    const name = yourNameInput.value.trim();
    if (name) {
        displayname.textContent = name;
        openingScreen.style.display = 'none';
        mainContent.style.display = 'block';
        showRandomMessage();
        // Set crush image dynamically (you can replace the URL with the actual image)
        crushImage.querySelector('img').src = `https://via.placeholder.com/200?text=${name}`;
    } else {
        shakeButton();
        alert("Please enter your name!");
    }
});



// Create love effect on page load
createLoveEffect();