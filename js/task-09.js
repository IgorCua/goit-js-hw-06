const changeColorBtn = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorBtn.addEventListener('click', colorSwitcher);

function colorSwitcher(){
  document.querySelector('.color').textContent = getRandomHexColor();
  document.querySelector('body').style = `background-color: ${getRandomHexColor()}`;
}
