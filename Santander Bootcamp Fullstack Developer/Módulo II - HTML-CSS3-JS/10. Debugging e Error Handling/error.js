function valida(array, numero) {
    try {
        if (!array && !numero) throw new ReferenceError("Envie os parâmetros");

        if (typeof array !== "object") throw new TypeError("Array precisa ser object");

        if (typeof numero !== "number") throw new TypeError("Numero precisa ser numero");

        if (array.length !== numero) throw new RangeError("Tamanho inválido");

        return array;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log("ReferenceError");
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log("TypeError");
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log("RangeError");
            console.log(e.message);
        } else console.log("Erro não esperado: " + e);
    }
}

console.log(valida([], 0));