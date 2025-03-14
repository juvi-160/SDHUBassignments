const hr = document.querySelector('.hour');
const min = document.querySelector('.minutes');
const sec = document.querySelector('.seconds');
const p = document.querySelector('.ampm');

const clock = () => {
    const now = new Date();
    let hours = now.getHours(); // Change 'const' to 'let'
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // Convert to 12-hour format

    hr.textContent = String(hours).padStart(2, '0'); // Add leading zero if needed
    min.textContent = minutes;
    sec.textContent = seconds;
    p.textContent = ampm;
};

setInterval(clock, 1000);
clock(); // Initial call to update immediately
