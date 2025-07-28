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

let posX:number = 0;
let posY:number = 0;
let isDragging:boolean = false;
let dragStartX:number = 0;
let dragStartY:number = 0;

function positionUpdate() {
  box.style.transform = `translate(${posX}px, ${posY}px)`;
}

document.addEventListener('keydown', function(event: KeyboardEvent) {
  const step = 30;

  box.classList.add('animation');

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

box.addEventListener ('mousedown', function(event: MouseEvent) {
  box.classList.remove('animation');
  isDragging = true;
  dragStartX = event.clientX - posX; 
  dragStartY = event.clientY - posY;

});
  
box.addEventListener ('mousemove', function(event: MouseEvent) {
  if (!isDragging) return;

  posX = event.clientX - dragStartX;
  posY = event.clientY - dragStartY;
  positionUpdate();
});

box.addEventListener ('mouseup', function() {
  isDragging = false;
});
