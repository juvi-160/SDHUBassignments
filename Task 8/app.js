// Fix querySelector to target correct elements using IDs
document.querySelector('#startBtn').addEventListener('click', function() {
    console.log('Start Button clicked');
    start();
});

document.querySelector('#pauseBtn').addEventListener('click', function() {
    console.log('Pause Button clicked');
    pause();
});

document.querySelector('#resetBtn').addEventListener('click', function() {
    console.log('Reset Button clicked');
    reset();
});

const timer = document.querySelector('.timer');
let interval = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime; // Adjust elapsed time if resuming
        interval = setInterval(update, 10); // Update every 10ms to include milliseconds
    }
}

function pause() {
    if (isRunning) {
        isRunning = false;
        elapsedTime = Date.now() - startTime; // Store elapsed time
        clearInterval(interval);
    }
}

function reset() {
    isRunning = false;
    clearInterval(interval);
    elapsedTime = 0;
    timer.textContent = '00:00:00.00'; // Reset display
}

function update() {
    let currentTime = Date.now() - startTime;
    let milliseconds = Math.floor((currentTime % 1000) / 10); // Get 2-digit milliseconds
    let seconds = Math.floor((currentTime / 1000) % 60);
    let minutes = Math.floor((currentTime / (1000 * 60)) % 60);
    let hours = Math.floor((currentTime / (1000 * 60 * 60)) % 24);

    timer.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
}
