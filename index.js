// script.js
function rgbToHex(rgb) {
    return '#' + rgb.map(c => ('0' + c.toString(16)).slice(-2)).join('');
}
let valueR = 255;
let valueG = 255;
let valueB = 255;
document.getElementById("color-box").style.backgroundColor = 'rgb(' + valueR + ',' + valueG + ',' + valueB + ')';
document.getElementById("color-name").textContent = rgbToHex([valueR, valueG, valueB]);
const volumeSliderRed = document.getElementById('volume-slider-red');
const volumeValueRed = document.getElementById('volume-value-red');


const volumeSliderBlue = document.getElementById('volume-slider-blue');
const volumeValueBlue = document.getElementById('volume-value-blue');

const volumeSliderGreen = document.getElementById('volume-slider-green');
const volumeValueGreen = document.getElementById('volume-value-green');

// Update the volume value display as the slider value changes
volumeSliderRed.addEventListener('input', () => {
    valueR = volumeSliderRed.value;
    volumeValueRed.textContent = valueR;
    document.getElementById("color-box").style.backgroundColor = 'rgb(' + valueR + ',' + valueG + ',' + valueB + ')';
    document.getElementById("color-name").textContent = rgbToHex([valueR, valueG, valueB]);

});

volumeSliderBlue.addEventListener('input', () => {
    valueB = volumeSliderBlue.value;
    volumeValueBlue.textContent = valueB;
    document.getElementById("color-box").style.backgroundColor = 'rgb(' + valueR + ',' + valueG + ',' + valueB + ')';
    document.getElementById("color-name").textContent = rgbToHex([valueR, valueG, valueB]);

});

volumeSliderGreen.addEventListener('input', () => {
    valueG = volumeSliderGreen.value;
    volumeValueGreen.textContent = valueG;
    document.getElementById("color-box").style.backgroundColor = 'rgb(' + valueR + ',' + valueG + ',' + valueB + ')';
    document.getElementById("color-name").textContent = rgbToHex([valueR, valueG, valueB]);

});

