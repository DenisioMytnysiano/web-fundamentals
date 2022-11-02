const cellNumber = 1
const tableContainer = document.getElementById("table-task-container")
const colorInput = document.getElementById("color-selector")

window.onload = generateTable()

function generateTable(){
    var table = document.createElement("div")
    table.setAttribute("id", "table")
    for (let index = 0; index < 36; index++) {
        
        const value = index + 1
        const row = Math.floor(index / 6)
        const column = index % 6
        const tableCell = index == cellNumber? createVariantTableCell(value, row, column) : createTableCell(value, row, column)
        table.appendChild(tableCell)
    }
    tableContainer.appendChild(table)
}

function createTableCell(value, row, column){
    const cell = document.createElement("div")
    cell.classList.add("table-cell")
    cell.innerText = value
    cell.setAttribute("row", row)
    cell.setAttribute("column", column)
    return cell
}

function createVariantTableCell(value, row, column){
    const cell = createTableCell(value, row, column)
    cell.addEventListener("mouseover", () => cell.style.backgroundColor = generateRandomColor())
    cell.addEventListener("click", () => cell.style.backgroundColor = colorInput.value)
    cell.addEventListener("dblclick", () => document.querySelectorAll(`div[row='${cell.getAttribute("row")}']`).forEach(x => x.style.backgroundColor = cell.style.backgroundColor))
    return cell
}

function generateRandomColor(){
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}