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
    
};

makeGrid(gridSize, gridSize);
colorChange();


//button to create grid size

var button = document.getElementById('btn');

button.addEventListener('click', buttonClick);

function buttonClick(){

//first remove divs from the old grid

    function removeAllChildNodes(parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            };
    };

    removeAllChildNodes(grid);

//then create the new grid size

    gridSize = window.prompt("How many squares per side?", "16");
    console.log(gridSize);

//set min and max gridSize values

    if (gridSize < 10) {
        gridSize = 10;
    } else if (gridSize > 80) {
        gridSize = 80;
    };

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
        this.classList.add("backgroundBlack");
    };
};

//colour change buttons

const blackbtn = document.getElementById("btn-black");
const whitebtn = document.getElementById("btn-white");
const rainbowbtn = document.getElementById("btn-rainbow");

blackbtn.addEventListener('click', () => colorFunction('black'));
whitebtn.addEventListener('click', () => colorFunction('white'));
rainbowbtn.addEventListener('click', () => colorFunction('rainbow'));

function colorFunction(choice) {
    if (choice === 'white') {
        for (let i=0; i<cells.length; i++) {
            cellsCopy.push(cells[i]);
        };
        cellsCopy.forEach(c => c.addEventListener('mouseenter', runEvent));
        function runEvent(){
            this.classList.remove("backgroundRainbow");
            this.classList.remove("backgroundBlack");
            this.classList.add("backgroundWhite");
        }; 
    } else if (choice === 'rainbow') {
        for (let i=0; i<cells.length; i++) {
            cellsCopy.push(cells[i]);
        };
        cellsCopy.forEach(c => c.addEventListener('mouseenter', runEvent));
        function runEvent(){
            this.classList.remove("backgroundWhite");
            this.classList.remove("backgroundBlack");
            this.classList.add("backgroundRainbow");
        };
    } else if (choice === 'black') {
        for (let i=0; i<cells.length; i++) {
            cellsCopy.push(cells[i]);
        };
        cellsCopy.forEach(c => c.addEventListener('mouseenter', runEvent));
        function runEvent(){
            this.classList.remove("backgroundWhite");
            this.classList.remove("backgroundRainbow");
            this.classList.add("backgroundBlack");
        };
    };
};
