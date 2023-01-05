const body = document.body;

const gridButton = document.createElement('button');
const colorButton = document.createElement('button');
const gradientButton = document.createElement('button');

let desiredButton = "";

gridButton.innerText = 'Change grid size';
colorButton.innerText = 'Draw with Colors';
gradientButton.innerText = 'Draw with a gradient';


gridButton.classList.add('grid-button');
colorButton.classList.add('color-button');
gradientButton.classList.add('grad-button');

const container = document.querySelector('.container');
body.insertBefore(gridButton, container);
body.insertBefore(colorButton, container);
body.insertBefore(gradientButton, container);

for (let i=0; i < (16*16); i++) {
    let square = document.createElement('div');
    square.classList.add("grid-item");
    container.appendChild(square);
}

container.style.gridTemplateColumns = "repeat(16, auto)"

setGridDraw();

gridButton.addEventListener('click', changeGridSize);
colorButton.addEventListener('click', setGridDraw);
gradientButton.addEventListener('click', setGridDraw);

function colorSquare(e) {
    if(desiredButton === 'color-button') {
        let r = Math.floor(Math.random() * 256).toString();
        let g = Math.floor(Math.random() * 256).toString();
        let b = Math.floor(Math.random() * 256).toString();
        let a = (1).toString();
        e.currentTarget.style.background =
            "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
    }
    else {
        e.currentTarget.style.background = "black";
    }
}

function changeGridSize() {
    let size = prompt("Please enter a grid size (under 100)");
    if(size <= 100) {
        setGrid(size);
    }
    else {
        changeGridSize();
    }
}

function setGrid(size) {
    container.innerHTML = '';
    for (let i=0; i < (size*size); i++) {
        let square = document.createElement('div');
        square.classList.add("grid-item");
        container.appendChild(square);
    }
    container.style.gridTemplateColumns = "repeat(" + size + ", auto)"
    setGridDraw();
}

function setGridDraw(e) {
    let newGrid = document.querySelectorAll('.grid-item');
    // distinguish if color or gradient has already been picked
    if (e !== undefined) {
        desiredButton = e.currentTarget.classList[0];
    }
    newGrid.forEach((square) => (square.addEventListener('mouseover', colorSquare)));
}