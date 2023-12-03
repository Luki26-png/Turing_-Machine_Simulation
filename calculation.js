const transition = {
    "A":{  //state tujuan, write, arah
        "a":["B", "$", "R"],
        "b":["C", "$", "R"],
        "-":"halt"
    },
    "B":{ 
        "a":["B", "a", "R"],
        "b":["C", "a", "R"],
        "-":["D", "a", "L"]
    },
    "C":{ 
        "a":["B", "b", "R"],
        "b":["C", "b", "R"],
        "-":["D", "b", "L"]
    },
    "D":{ 
        "a":["D", "a", "L"],
        "b":["D", "b", "L"],
        "$":["E", "$", "R"]
    },
    "E":{ 
        "a":[],
        "b":[],
        "-":[]
    },
    "F":{ 
        "a":[],
        "b":[],
        "-":[]
    }
};

function calculate(){
    //get head
    let head = document.getElementById("head");
    let headChild = head.getElementsByTagName("td");
    
    //get tape
    let tape = document.getElementById("tape");
    let tapeContent = tape.getElementsByTagName("td");

    //get current state
    let currentState = head.getAttribute("class");
    //create new arrow
    let arrow = document.createElement("div");
    arrow.setAttribute("class", "arrow-down");

    //get head current position
    let headCurrentPosition = 0;
    for(let i = 0; i < headChild.length; i++){
        if(headChild[i].innerHTML !== " "){
            headCurrentPosition = i;
            break;
        }
    }

    //head move to the right
    headChild[headCurrentPosition+1].appendChild(arrow);
    headChild[headCurrentPosition].innerHTML = " ";
    //write into tape
    tapeContent[headCurrentPosition].innerHTML = currentState;
}