// creating the grid

var grid = document.getElementById("container");

function makeGrid (rows, columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);
    for (i=0; i<(rows*columns); i++) {
        let cell = document.createElement("div");
        cell.className = "grid-cell";
        cell.id = "cell";
        container.appendChild(cell);
    }
}

makeGrid(16, 16);

