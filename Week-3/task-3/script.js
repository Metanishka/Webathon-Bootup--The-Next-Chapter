let currentLight = 0;
const lights = document.querySelectorAll('.light');

function changeLight() {
    // Turn off all lights
    lights.forEach(light => light.style.backgroundColor = '#444');

    // Switch for change the colour of light
    currentLight = (currentLight + 1) % lights.length;
    switch (currentLight) {
        case 0:
            lights[0].style.backgroundColor = 'red';
            break;
        case 1:
            lights[1].style.backgroundColor = 'yellow';
            break;
        case 2:
            lights[2].style.backgroundColor = 'green';
            break;
    }
}