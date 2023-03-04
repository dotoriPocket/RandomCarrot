
const url = window.location.href;

let value = url.split("?")[1];
let num = parseInt(value.split("=")[1]);

let boxGuide = document.getElementsByClassName("box_guide")[0];



for(let n = 1; n <= num; n = n + 1) {
    let numBox = document.createElement("div");

    numBox.setAttribute("class","num_box");
    numBox.innerText = n;
    
    boxGuide.appendChild(numBox);
}

function gotoResult() {
    let num = parseInt(value.split("=")[1]);
    location.href = `result.html?count=${num}`;
}