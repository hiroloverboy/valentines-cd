// Set Valentine's Day date
const valentineDate = new Date(new Date().getFullYear(), 1, 14, 0, 0, 0).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = valentineDate - now;

    // Calculate time left in days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display countdown
    document.getElementById("countdown").innerHTML = 
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

    // If countdown is over
    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "Happy Valentine's Day! 💖";
        clearInterval(timer);
    }
}

// Update every second
const timer = setInterval(updateCountdown, 1000);
updateCountdown(); // Run immediately when page loads
