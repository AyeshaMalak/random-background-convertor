const generateButton = document.getElementById('generate');
const colorDisplay = document.getElementById('colorDisplay');
const colorValue = document.getElementById('colorValue');
const colorHex = document.getElementById('colorHex');

generateButton.addEventListener('click', () => {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorDisplay.style.backgroundColor = randomColor;
    colorHex.textContent = randomColor;
});

function getRandomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}
