var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

disabledDecrement();
abledIncrement();

function increment() {
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
    disabledIncrement();
    abledDecrement();
}

function decrement() {
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;
    disabledDecrement();
    abledIncrement();
}

function disabledIncrement() {
    if (currentNumber == 10) {
        document.getElementsByName("adicionar")[0].disabled = true;
    }
}

function disabledDecrement() {
    if (currentNumber == 0) {
        document.getElementsByName("subtrair")[0].disabled = true;
    }
}

function abledIncrement() {
    if (currentNumber < 10) {
        document.getElementsByName("adicionar")[0].disabled = false;
    }
}

function abledDecrement() {
    if (currentNumber > 0) {
        document.getElementsByName("subtrair")[0].disabled = false;
    }
}