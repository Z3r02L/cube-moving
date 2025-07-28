import './style.css'
import typescriptLogo from './typescript.svg'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div id="box" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </div>
  </div>
`

const box = document.getElementById('box') as HTMLElement;

let posX = 0;
let posY = 0;
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;

function positionUpdate() {
  box.style.transform = `translate(${posX}px, ${posY}px)`;
}

document.addEventListener('keydown', function(event) {

  const step = 30;

  switch (event.key) {
    case 'ArrowLeft':
      posX -= step;
      break;
    case 'ArrowRight':
      posX += step;
      break;
    case 'ArrowUp':
      posY -= step;
      break;
    case 'ArrowDown':
      posY += step;
      break;
    default:
      return;
  }

  positionUpdate();
});  

box.addEventListener ('mousedown', function(event) {
  isDragging = true;
  dragStartX = event.clientX - posX; 
  dragStartY = event.clientY - posY;

});
  
box.addEventListener ('mousemove', function(event) {
  if (isDragging = false) return;

  posX = event.clientX - dragStartX;
  posY = event.clientY - dragStartY;
  positionUpdate();
});

box.addEventListener ('mouseup', function() {
  isDragging = false;
});
