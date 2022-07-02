const pessoa = {
    nome: "Mariana",
    idade: 20,
    profissao: "Desenvolvedora"
}

pessoa.idade = 29;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: "André",
    idade: 25,
    profissao: "Pintor"
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: "Paula",
    idade: 25,
    profissao: "Desenvolvedora"
}

enum Profissao {
    Professora,
    Atriz,
    Desenvlvedora,
    JogadoraDeFuterbol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: "Vanessa",
    idade: 23,
    profissao: Profissao.Desenvlvedora
}

const maria: Pessoa = {
    nome: "Maria",
    idade: 23,
    profissao: Profissao.Desenvlvedora
}

const jessica: Estudante = {
    nome: "Jessica",
    idade: 28,
    profissao: Profissao.Desenvlvedora,
    materias: ["Matemática discreta", "Programação"]
}

const monica: Estudante = {
    nome: "MOnica",
    idade: 28,
    materias: ["Matemática discreta", "Programação"]
}

function listar(lista: string[]) {
    for(const item of lista) {
        console.log("- ", item);
    }
}

listar(monica.materias);