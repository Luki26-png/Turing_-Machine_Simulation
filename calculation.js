function calculate(){
    let head = document.getElementById("head");
    let headChild = head.getElementsByTagName("td");
    
    //create new arrow
    let arrow = document.createElement("div");
    arrow.setAttribute("class", "arrow-down");

    headChild[1].appendChild(arrow);
}