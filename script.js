// Set Valentine's Day (February 14, 2025)
const valentineDate = new Date('February 14, 2025 00:00:00').getTime();

// Function to update the countdown timer
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = valentineDate - now;

    // Time calculations
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the results
    document.getElementById("days").innerHTML = `${days} Days`;
    document.getElementById("hours").innerHTML = `${hours} Hours`;
    document.getElementById("minutes").innerHTML = `${minutes} Minutes`;
    document.getElementById("seconds").innerHTML = `${seconds} Seconds`;

    // If the countdown is finished
    if (timeLeft < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "Happy Valentine's Day!";
    }
}

// Update the countdown every second
const timer = setInterval(updateCountdown, 1000);

// Initial call to set the countdown immediately
updateCountdown();
