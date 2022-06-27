var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

negative()

function increment() {
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
    negative()
}

function decrement() {
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;
    negative()
}

function negative() {
    if (currentNumber < 0) currentNumberWrapper.style.color = "red";
    else currentNumberWrapper.style.color = "black";
}