let leftCol = document.querySelector(".left-col");
let topRow = document.querySelector(".top-row");
let rows = 100;
let cols = 26;
let grid = document.querySelector(".grid");
let bold = document.querySelector(".bold");
let italics = document.querySelector(".italics");
let underline = document.querySelector(".underline");
let addressInput = document.querySelector(".address-input");
let prevCell;
let buiArr = [];

// to create row number, and number from 1 to 100
for(let i=0; i<rows; i++) {
    // a div for each row number
    let rowNum = document.createElement("div");
    rowNum.innerText = i+1;
    rowNum.setAttribute("class", "box")
    // adding the div to the left column (number col)
    leftCol.appendChild(rowNum);
}

// to create column number from A to Z
for(let i=0; i<cols; i++) {
    let rowNum = document.createElement("div");
    rowNum.innerText = String.fromCharCode(65+i);
    rowNum.setAttribute("class", "cell");
    // adding div to first row, (alphabet row)
    topRow.appendChild(rowNum);
}

// creating the whole grid
for(let i=0; i<rows; i++) {
    // a div named row for the whole row
    let row = document.createElement("div");
    row.setAttribute("class", "row")

    // for all the rows we will divide it into multiple columns
    for(let j=0; j<cols; j++) {
        let cell = document.createElement("div");
        //numbering cell as A1, B1, C6, A2 etc.
        cell.setAttribute("class", "cell");
        cell.setAttribute("rowId", `${i}`);
        cell.setAttribute("colId", `${j}`);
        
        //appending all the cells to the current row
        row.appendChild(cell);

        cell.addEventListener("click", function () {
            // showing that we are on this cell
            cell.style.border = `3px solid rgb(58, 197, 58)`
            cell.setAttribute("contenteditable", "true");
            
            //when the cell is clicked, it shows on address bar
            let rowId = Number(cell.getAttribute("rowId"));
            let colId = Number(cell.getAttribute("colId"));
            addressInput.value = `${String.fromCharCode(65+colId)}${rowId+1}`;
            
            if(prevCell != undefined) {
                prevCell.style.border =  `1px solid rgb(165, 170, 163)`;
            }
            prevCell = cell;
        })
    }
    // at last adding all the rows to the grid
    grid.appendChild(row);
}

let cellDef = document.querySelector(".grid .cell");
cellDef.click();

bold.addEventListener("click", function () {
    //bold on click
    let uiCellElement = getFontSyleCell();
    uiCellElement.style.fontWeight = "bold";
})

italics.addEventListener("click", function () {
    //italics on click
    let uiCellElement = getFontSyleCell();
    uiCellElement.style.fontStyle = "italic";
})

underline.addEventListener("click", function () {
    //underline on click
    let uiCellElement = getFontSyleCell();
    uiCellElement.style.textDecoration = "underline";
})

//to get the row and column of a cell
function getRowAndColId(address) {
    colId = Number(address.charCodeAt(0))-65;
    rowId = Number(address.slice(1))-1;
    return {"rowId": rowId, "colId": colId};
}

//to get the cell whose font we want to change
function getFontSyleCell() {
    let address = addressInput.value;
    let rowAndColId = getRowAndColId(address);
    let rowId = rowAndColId.rowId;
    let colId = rowAndColId.colId;
    
    let uiCellElement = document.querySelector(`.cell[rowId="${rowId}"][colId="${colId}"]`);
    return uiCellElement;
}