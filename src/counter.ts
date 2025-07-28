export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

// Получаем элемент, который будем перемещать
const box = document.getElementById('movable-box') as HTMLElement;

// Начальные координаты
let posX = 0;
let posY = 0;
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;

// Функция для обновления позиции элемента
function updatePosition() {
    box.style.transform = `translate(${posX}px, ${posY}px)`;
}

// Обработчик клавиатуры
document.addEventListener('keydown', (e) => {
    const step = 10; // Шаг перемещения при нажатии стрелки
    
    switch(e.key) {
        case 'ArrowUp':
            posY -= step;
            break;
        case 'ArrowDown':
            posY += step;
            break;
        case 'ArrowLeft':
            posX -= step;
            break;
        case 'ArrowRight':
            posX += step;
            break;
        default:
            return; // Выходим, если это не стрелка
    }
    
    updatePosition();
});

// Обработчики мыши для перетаскивания
box.addEventListener('mousedown', (e) => {
    isDragging = true;
    dragStartX = e.clientX - posX;
    dragStartY = e.clientY - posY;
    box.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    posX = e.clientX - dragStartX;
    posY = e.clientY - dragStartY;
    updatePosition();
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    box.style.cursor = 'grab';
});

// Инициализация
box.style.position = 'absolute';
box.style.cursor = 'grab';
box.style.width = '100px';
box.style.height = '100px';
box.style.backgroundColor = 'lightblue';
box.style.userSelect = 'none'; // Чтобы не выделялся текст при перетаскивании
updatePosition();