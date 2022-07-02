let valorAny: any;
valorAny = 1;
valorAny = "Ola";
valorAny = true;

let valorString: string = "teste";
valorString = valorAny;
let valorString2: string = "testa";
valorString2 = valorAny;

function somaString(string1: string, string2: string) {
    console.log(string1 +  string2)
}

somaString(valorString, valorString2);
somaString("ola", ", mundo");