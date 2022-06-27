function comparaNumeros(numero1, numero2) {
    if (numero1 !== null && numero1 !== undefined && numero2 !== null && numero2 !== undefined) {
        if (numero1 === numero2) {
            return 'Os números ' + numero1 + " e " + numero2 + " são iguais. " + comparacao(numero1, numero2);
        } else {
            return 'Os números ' + numero1 + " e " + numero2 + " não são iguais. " + comparacao(numero1, numero2);
        }
    }
}

function comparacao(numero1, numero2) {
    const soma = numero1 + numero2;

    let resultado10;
    let resultado20;

    if (soma > 10) resultado10 = "maior";
    else if (soma < 10) resultado10 = "menor";
    else resultado10 = "igual";

    if (soma > 20) resultado20 = "maior";
    else if (soma < 20) resultado20 = "menor";
    else resultado20 = "igual";

    return "Sua soma é " + soma + " que é " + resultado10 + " que 10 e " + resultado20 + " que 20.";
}

console.log(comparaNumeros(12, 8))