const url = window.location.href;
let value = url.split('?')[1];
let num = parseInt(value.split('=')[1]);
let randomNumber = Math.floor(Math.random() * num);

let boxGuide = document.getElementsByClassName("box_guide")[0];

for(let n = 1; n <= num; n = n + 1) {
    let resultBox = document.createElement("div");

    resultBox.setAttribute("class", "num_box");

    let resultNum = document.createElement("p");

    resultNum.setAttribute("class", "num_style");
    resultNum.innerText = n;

    if(n === randomNumber + 1) {
        let dan = document.createElement("div");
        dan.setAttribute("class", "img_type2");

        resultBox.appendChild(dan);
    }
    else {
        let carrot = document.createElement("div");
        carrot.setAttribute("class", "img_type1");
        
        resultBox.appendChild(carrot);
    }
    
    resultBox.appendChild(resultNum);
    boxGuide.appendChild(resultBox);
}



function gotoHome() {
    location.href = "start.html";
}

