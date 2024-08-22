
let aluno = "";
let nota1, nota2, nota3 = 0;
const quantidadeProvas = 3;

aluno = prompt("Digite o Nome do Aluno 1:");
nota1 = parseFloat(prompt("Digite a Nota 1 do Aluno: "));
nota2 = parseFloat(prompt("Digite a Nota 2 do Aluno: "));
nota3 = parseFloat(prompt("Digite a Nota 3 do Aluno: "));

let media = 0;
media = (nota1 + nota2 + nota3) / quantidadeProvas;

var mensagem = `${aluno}, sua média é ${media} parabéns!;`


if (media >= 7) {
    mensagem = ("O aluno está aprovado.");
} else if (media >= 5) {
    mensagem = ("O aluno está recuperação.");
} else {
    mensagem = ("O aluno está de reprovado.");
}

alert(mensagem);
