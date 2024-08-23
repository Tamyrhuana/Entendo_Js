let numero1 = parseFloat(prompt("Solicite o primeiro numero"));
let numero2 = parseFloat(prompt("Solicite o segundo numero"));
let numero3 = parseFloat(prompt("Solite o terceiro numero"));

let mensagem = ``;

if ((numero1 > numero2) && (numero1 > numero3)) {
    mensagem = (`O maior é ${numero1}`);
}
else if ((numero2 > numero1) && (numero2 > numero3)) {
    mensagem = (`O maior é ${numero2}`);
}
else if ((numero3 > numero1) && (numero3 > numero2)) {
    mensagem = (`O maior é ${numero3}`);
}
else {
    mensagem = ("Inválido");
}

alert(mensagem);
