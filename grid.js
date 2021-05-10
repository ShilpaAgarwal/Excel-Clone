let leftCol = document.querySelector(".left-col");
let topRow = document.querySelector(".top-row");
let rows = 100;
let cols = 26;
let grid = document.querySelector(".grid");

for(let i=0; i<rows; i++) {
    let rowNum = document.createElement("div");
    rowNum.innerText = i+1;
    rowNum.setAttribute("class", "box")
    leftCol.appendChild(rowNum);
}

for(let i=0; i<cols; i++) {
    let rowNum = document.createElement("div");
    rowNum.innerText = String.fromCharCode(65+i);
    rowNum.setAttribute("class", "cell")
    topRow.appendChild(rowNum);
}

for(let i=0; i<rows; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row")
    for(let j=0; j<cols; j++) {
        let cell = document.createElement("div");
        cell.innerText = `${String.fromCharCode(65+j)} ${i+1}`
        cell.setAttribute("class", "cell");
        row.appendChild(cell);
    }
    grid.appendChild(row);
}