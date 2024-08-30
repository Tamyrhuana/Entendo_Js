
let num = parseFloat(prompt("Digite o preço do pão:"));
let mensagem = `Preço do pão: R$ ${(num).toFixed(2)} unid. <br>`;
for (let v = 1; v <= 50; v++) {
    let result = num * v;
    mensagem += `${v} = R$ ${result.toFixed(2)}` + "<br>";
}
document.write(mensagem );
