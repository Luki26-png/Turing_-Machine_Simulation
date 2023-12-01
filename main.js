function main() {
    let input = document.getElementById("input_string").value;
    let inputLength = input.length;
    let resultRow = document.getElementById("result-row");

  // Clear the existing table
    resultRow.innerHTML = "";

  // Create a new row
    let row = document.createElement("tr");

  // Loop through the input string and create a new cell for each character
    for (let i = 0; i < inputLength; i++) {
        let cell = document.createElement("td");
        cell.textContent = input[i];
        row.appendChild(cell);
    }

  // Append the row to the table
    resultRow.appendChild(row);
}

