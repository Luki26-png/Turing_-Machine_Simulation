function putToTape() {
    let input = document.getElementById("input_string").value;
    let inputLength = input.length;
    let tape = document.getElementById("tape");
    let headArrow = document.getElementById("head-arrow");

    //change arrow colspan
    headArrow.colSpan = inputLength;

    // Clear the existing table
    tape.innerHTML = "";
    //put string into tape
    for (let i = 0; i < inputLength; i++) {
        let cell = document.createElement("td");
        cell.textContent = input[i];
        tape.appendChild(cell);
    }

    //display #process-and-result from none
    document.getElementById('process-and-result').style.display = "flex";
}

function simulate(){

}

