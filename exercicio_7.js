let altura = parseFloat(prompt("Digite sua altura"));
let idade = parseInt(prompt("Digite sua idade"));

// BLOCO DO MAIOR
if (altura >= 1.70) {
    alert("Você pode ir na montanha russa");
}
else if (altura >= 1.60 && idade >= 18) {
    alert("Você pode ir na montanha russa");
}
else {
    alert("Você não pode entrar na montanha russa");
}
