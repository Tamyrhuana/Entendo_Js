let nome = (prompt("Informe o nome"));
let produto1 = (prompt("Informe o primeiro produto"));
let valor1 = parseFloat(prompt("Informe o valor do primeiro produto"));
let produto2 = (prompt("Informe o segundo produto"));
let valor2 = parseFloat(prompt("Informe o valor do segundo produto"));
let produto3 = (prompt("Informe o terceiro produto"));
let valor3 = parseFloat(prompt("Informe o valor do terceiro produto"));
let menor;
let menorvalorproduto;


if ((valor1 <= valor2) && (valor1 <= valor3)) {
    menor = valor1;
    menorvalorproduto = produto1;
}
else if ((valor2 <= valor1) && (valor2 <= valor3)) {
    menor = valor2;
    menorvalorproduto = produto2;
}
else if ((valor3 <= valor1) && (valor3 <= valor2)) {
    menor = valor3;
    menorvalorproduto = produto3;
}
alert(`O produto de menor valor ${menorvalorproduto} tem o valor de ${menor}`);