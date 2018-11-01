let texto = "Texto";
let number = 1;
let booleano = true;


let nome = prompt ("Qual seu nome?");
let valor = prompt("Qual o valor do seu emprestimo?");

alert(`Olá ${nome}!`)
alert(`Você gostaria de emprestar o R$${valor}, certo?`)

let pretendePagar = confirm("Você pretende pagar o seu empréstimo?");

alert("Ok! Obrigado por nos visitar.")

let joaozinho = {
    nome:"João",
    idade:18,
    namorada: undefined,
};

let mariazinha = {
    nome: "Maria",
    idade: 17,
    namorado: joaozinho,

};

joaozinho.namorada = mariazinha;
