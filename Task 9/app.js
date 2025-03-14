let lights = ["red", "yellow", "green"];
let index = 0;

function changeLight() {
    // Reset all lights to gray
    document.querySelectorAll('.light').forEach(light => light.style.background = "gray");

    // Turn on the current light
    document.getElementById(lights[index]).style.background = lights[index];

    // Move to the next light (Red → Green → Yellow → Red)
    index = (index + 1) % lights.length;

    // Set different time intervals for each light
    let delay = (lights[index] === "yellow") ? 2000 : 4000;  // Yellow → 2 sec, Others → 5 sec
    setTimeout(changeLight, delay);
}

// Start the traffic signal
changeLight();