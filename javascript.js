var grid = document.querySelector("#container");
var cells = grid.children;
var cellsCopy = [];

let gridSize = '';


// creating the grid

function makeGrid (rows, columns) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', columns);
    for (i=0; i<(rows*columns); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell);
        cell.className = "grid-cell";
        cell.id = "blocks"; 
    };
    colorChange();
};

makeGrid(gridSize, gridSize);



//button to create grid size

var button = document.getElementById('btn');

button.addEventListener('click', buttonClick);

function buttonClick(){
    for (i=0; i<grid.children.length; i++) {
        grid.firstElementChild.remove;
    }

    gridSize = window.prompt("How many squares per side?", "16");
    console.log(gridSize);

    //need to first remove old grid

    makeGrid(gridSize, gridSize);
    colorChange();
    console.log(grid.children.length);
};

//colour changing 

function colorChange() {
    for (let i=0; i<cells.length; i++) {
        cellsCopy.push(cells[i]);
    };
    cellsCopy.forEach(c => c.addEventListener('mouseenter', runEvent));
    function runEvent(){
        this.classList.add("background");
    };
};

