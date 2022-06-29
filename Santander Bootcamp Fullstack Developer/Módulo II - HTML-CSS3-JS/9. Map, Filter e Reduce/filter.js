function pares(array) {
    return array.filter((item) => {
        if (item % 2 === 0) return item;
    });
}

const array = [1, 2, 3, 4, 5];

console.log(pares(array));