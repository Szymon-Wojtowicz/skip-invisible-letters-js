function solution() {

    const table = document.getElementsByTagName("table")[0]; // Get the table element
    const rows = table.getElementsByTagName("tr"); // Get all rows of the table
    let visibleLetters = ""; // Initialize an empty string to store visible letters

    // Loop through each row
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td"); // Get all cells of the row

        // Loop through each cell
        for (let j = 0; j < cells.length; j++) {
            const cell = cells[j];
            const bgColor = cell.style.backgroundColor;
            const color = cell.style.color;

            // If the cell's background color is not the same as the text color, add its content to visibleLetters
            if (bgColor !== color) {
                visibleLetters += cell.textContent.trim();
            }
        }
    }

    return visibleLetters;
}
