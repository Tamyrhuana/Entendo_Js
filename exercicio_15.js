
let num = parseFloat(prompt("Digite o preço do pão"));
let valor = "";
for (let v = 1; v <= 50; v++) {
    valor += `${num} X ${v} = ${num * v}` + "<br>";

}
document.write(valor);
