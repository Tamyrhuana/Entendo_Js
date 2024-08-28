let textomenu = `Escolha o sinal desejado:
                   1 - Soma.
                   2 - Subtração.
                   3 - Multiplicação.
                   4 - Divisão.
                   5 - Potenciação.
                   6 - Radiciação.`;
let sinalescolhido = parseInt(prompt(textomenu));
let calculo;
let numero1;
let numero2;

switch (sinalescolhido) {
    case 1:
        numero1 = parseInt(prompt("Digite o primeiro número"));
        numero2 = parseInt(prompt("Digite o segundo número"));
        calculo = (numero1 + numero2);
        alert(`A soma é ${calculo}`);
        break;

    case 2:
        numero1 = parseInt(prompt("Digite o primeiro número"));
        numero2 = parseInt(prompt("Digite o segundo número"));
        calculo = (numero1 - numero2);
        alert(`A subtração é ${calculo}`);
        break;

    case 3:
        numero1 = parseInt(prompt("Digite o primeiro número"));
        numero2 = parseInt(prompt("Digite o segundo número"));
        calculo = (numero1 * numero2);
        alert(`A multiplicação é ${calculo}`);
        break;

    case 4:
        numero1 = parseInt(prompt("Digite o primeiro número"));
        numero2 = parseInt(prompt("Digite o segundo número"));
        if (numero2 == 0) {

            alert(`O zero torna inválido o calculo`)
        } else {
            calculo = (numero1 / numero2)
            alert(`A divisão é ${calculo}`);
        }

        break;

    case 5:
        numero1 = parseInt(prompt("Digite o primeiro número"));
        numero2 = parseInt(prompt("Digite o segundo número"));
        calculo = (numero1 ** numero2);
        alert(`A potenciação é ${calculo}`);
        break;

    case 6:
        numero1 = parseInt(prompt("Digite o primeiro número"));
        numero2 = parseInt(prompt("Digite o segundo número"));
        calculo = (numero1 ** (1 / numero2));
        alert(`A radiação é ${calculo}`);
        break;


}