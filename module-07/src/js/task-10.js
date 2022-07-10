const inputRef = document.querySelector('[type="number"]');
const btnRenderRef = document.querySelector('[data-action="render"]');
const btnRenderDest = document.querySelector('[data-action="destroy"]');
const divBoxesRef = document.querySelector('#boxes');

const  addBoxes = () => {
  const inputRefText = inputRef.valueAsNumber;
  for (let i = 0; i < inputRefText; i += 1) {
    const createDiv = document.createElement('div');
    const currentSize = 30 + i * 10;
    createDiv.style.cssText = `width :${currentSize}px; height: ${currentSize}px; background-color:${getRandomHexColor()}`;
    divBoxesRef.appendChild(createDiv);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnRenderRef.addEventListener('click', addBoxes);


btnRenderDest.addEventListener('click', () => {
  divBoxesRef.querySelectorAll('div').forEach(d => d.remove());
});





function createBoxes(amount){
for (let i=0; i< amount; i+=1){
  const createDiv = document.createElement('div');
  const currentSize = 30 + i * 10;
  createDiv.style.cssText = `width :${currentSize}px; height: ${currentSize}px; background-color:${getRandomHexColor()}`;
  divBoxesRef.appendChild(createDiv);
}
}

function destroyBoxes(){
    divBoxesRef.querySelectorAll('div').forEach((d) => d.remove())
}

btnRenderDest.addEventListener('click', destroyBoxes);

btnRenderRef.addEventListener('click', createBoxes);

createBoxes(17)
destroyBoxes()