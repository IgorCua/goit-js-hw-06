const changeColorBtn = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorBtn.addEventListener('click', colorSwitcher);

function colorSwitcher(){
  const color = getRandomHexColor();
  colorSpan.textContent = color;
  body.style = `background-color: ${color}`;
}
