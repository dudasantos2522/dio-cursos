function returnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNums.push(array[i])
        } else {
            console.log(array[i], "não é par!")
        }
    }
    console.log("Números pares:", evenNums)
}

returnEvenValues([1, 2, 4, 5, 7, 8])