let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = "teste";
anyEstaDeVolta = true;

let stringTest: string = "verificar";
stringTest= anyEstaDeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = "opa";
unknownValor = false;
unknownValor = "vai sim";

let stringTeste2: string = "agora vai";

if(typeof unknownValor === "string") {
    stringTeste2 = unknownValor;
}

function jogaErro(erro: string, codigo: number): never {
    throw {error: erro, code: codigo}
}

jogaErro("deu erro", 500);