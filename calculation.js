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
    let head = document.getElementById("head");
    let headChild = head.getElementsByTagName("td");
    
    //create new arrow
    let arrow = document.createElement("div");
    arrow.setAttribute("class", "arrow-down");

    headChild[1].appendChild(arrow);
    headChild[0].innerHTML = " ";
}