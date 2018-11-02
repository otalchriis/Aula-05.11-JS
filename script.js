// console.log("iniciou o script");

let nota = Number(prompt("Qual é a sua nota?"));

let entregouTudo = confirm("O aluno entregou todos os trabalhos?");

if (nota >= 6 && entregouTudo) {
    alert("Parabéns, você foi aprovado!");
}

else if (nota >=6 && !entregouTudo);x

else if (nota >= 5.5 && entregouTudo){
    alert ("Você foi aprovado, mas agradeça o computador!")
}

else {
    alert ("Que pena, você foi reprovado!")
}