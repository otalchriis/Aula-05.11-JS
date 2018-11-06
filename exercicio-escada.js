/*FAÇA UM PROGRAMA QUE RECEBA A QUANTIDADE DE DEGRAUS QUE UMA ESCADA TEM E DESENHE ESSA ESCADA NO CONSOLE LOG

Exemplo:

#
##
###
####
#####
######
#######
########
#########
##########

Bonús:
Pergunte para o usuário qual caractere ele gostaria de usar para fazer a escada, substitui o # pelo caractere do usuário.
*/

let quantidade = Number(prompt("Digite o numero de degraus:"));
let caractere = prompt("Escolha um caractere para formar os degraus");
let degrau = 1;
let i = 1;
let soma='';
while (degrau <= quantidade) {

    soma += caractere;

    console.log(soma);
    degrau++;


};