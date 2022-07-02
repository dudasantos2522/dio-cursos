"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = "teste";
anyEstaDeVolta = true;
let stringTest = "verificar";
stringTest = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = "opa";
unknownValor = false;
unknownValor = "vai sim";
let stringTeste2 = "agora vai";
if (typeof unknownValor === "string") {
    stringTeste2 = unknownValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro("deu erro", 500);
