let usuario, senha = "";
do {
    usuario = prompt("Informe o nome do usuário:");
    senha = prompt("Informe a sua senha:");

    if (usuario == senha)
        alert("O usuário não pode ser igual a senha!!");

} while (usuario == senha);

alert("Cadastrado com sucesso!")