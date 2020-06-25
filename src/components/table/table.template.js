const CODES = {
    A: 65,
    Z: 90
}

function toCell() {
    return `
     <div class="cell" contenteditable="true"></div>
    `
}

function toColumn(colName) {
    return `
    <div class="column">${colName}</div>
    `
}

function createRow(content, index) {
    return `
    <div class="row">
        <div class="row-info">${index}</div>
        <div class="row-data">${content}</div>
    </div>
    `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15 ) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []

    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map((toColumn)).join('')

    const cells = new Array(colsCount)
        .fill('')
        .map(toCell).join('')

    console.log(cols, cells)

    rows.push(createRow(cols, ''))

    // rows.push(createRow(cells))

    for (let i = 0; i < rowsCount; i++){
        // rows.push(createRow())
        rows.push(createRow(cells, i+1))
    }
    return rows.join('')
}