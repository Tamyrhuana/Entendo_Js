let usuario, senha = "";

usuario = prompt("Informe o nome do usuário:");
senha = prompt("Informe a sua senha:");

while (usuario == senha) {
    alert("O usuário não pode ser igual a senha!");

    usuario = prompt("Informe o nome do usuário:");
    senha = prompt("Informe a sua senha:");
}

alert("Cadastrado com sucesso!")