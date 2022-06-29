function dobra(array) {
    return array.map((item) => {
        return item * 2;
    });
}

const array = [1, 2, 3, 4, 5];

console.log(dobra(array));