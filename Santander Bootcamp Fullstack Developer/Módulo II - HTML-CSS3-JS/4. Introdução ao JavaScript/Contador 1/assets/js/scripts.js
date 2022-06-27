var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

document.getElementsByName("adicionar")[0].addEventListener("click", function() {
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
});

document.getElementsByName("subtrair")[0].addEventListener("click", function() {
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;
});