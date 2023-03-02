function count(type) {
    let resultElement = document.getElementsByClassName("num");
    let number = resultElement[0].innerText;

    if(type === "plus") {
        number = parseInt(number) + 1;
    }
    else if(type === "minus") {
        number = parseInt(number) - 1;
    }

    if(number < 2) {
        number = 2;
    }
    else if(number > 9) {
        number = 9;
    }

    resultElement[0].innerText = number; 
}

function gotoChoose() {
    let resultElement = document.getElementsByClassName("num");
    location.href = `choose.html?count=${resultElement[0].innerText}`;
}