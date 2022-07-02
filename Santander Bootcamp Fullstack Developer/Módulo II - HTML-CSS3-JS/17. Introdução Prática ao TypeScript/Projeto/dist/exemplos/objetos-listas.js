"use strict";
const pessoa = {
    nome: "Mariana",
    idade: 20,
    profissao: "Desenvolvedora"
};
pessoa.idade = 29;
const andre = {
    nome: "André",
    idade: 25,
    profissao: "Pintor"
};
const paula = {
    nome: "Paula",
    idade: 25,
    profissao: "Desenvolvedora"
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvlvedora"] = 2] = "Desenvlvedora";
    Profissao[Profissao["JogadoraDeFuterbol"] = 3] = "JogadoraDeFuterbol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: "Vanessa",
    idade: 23,
    profissao: Profissao.Desenvlvedora
};
const maria = {
    nome: "Maria",
    idade: 23,
    profissao: Profissao.Desenvlvedora
};
const jessica = {
    nome: "Jessica",
    idade: 28,
    profissao: Profissao.Desenvlvedora,
    materias: ["Matemática discreta", "Programação"]
};
const monica = {
    nome: "MOnica",
    idade: 28,
    materias: ["Matemática discreta", "Programação"]
};
function listar(lista) {
    for (const item of lista) {
        console.log("- ", item);
    }
}
listar(monica.materias);
