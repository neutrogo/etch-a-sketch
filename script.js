const body = document.body;
const button = document.createElement('button');
button.innerText = 'Change grid size';
const container = document.querySelector('.container');
body.insertBefore(button, container);

for (let i=0; i < (16*16); i++) {
    let square = document.createElement('div');
    square.classList.add("grid-item");
    container.appendChild(square);
}

container.style.gridTemplateColumns = "repeat(16, auto)"

setGridDraw();

button.addEventListener('click', changeGridSize);

function colorSquare(e) {
    e.currentTarget.style.background = "black";
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

function setGridDraw() {
    let newGrid = document.querySelectorAll('.grid-item');
    newGrid.forEach((square) => (square.addEventListener('mouseover', colorSquare)));
}