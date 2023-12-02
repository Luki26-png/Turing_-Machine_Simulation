function putToTape() {
    let input = document.getElementById("input_string").value;
    //add blank to input
    input += "---";
    let inputLength = input.length;

    let tape = document.getElementById("tape");
    let head = document.getElementById("head");

    //create an arrow as a head
    let arrow = document.createElement("div");
    arrow.setAttribute("class", "arrow-down");
    //clear the head row
    head.innerHTML = "";
    //put new arrow to turing machine
    for (let i = 0; i < inputLength; i++){
        if(i == 0){
            let cell = document.createElement("td");
            cell.appendChild(arrow);
            head.appendChild(cell);
        }else{
            let cell = document.createElement("td");
            cell.textContent = " ";
            head.appendChild(cell);
        }
    }
        

    // Clear the tape row
    tape.innerHTML = "";
    //put string into tape
    for (let i = 0; i < inputLength; i++){
        let cell = document.createElement("td");
        cell.textContent = input[i];
        tape.appendChild(cell);
    }

    //display #process-and-result from none
    document.getElementById('process-and-result').style.display = "flex";
}

function calculate(){

}

