let textoMenu = `Escolha o turno em que você estuda:
                M - Matutino
                V - Vespertino
                N - Noturno`;

let turnoescolhido = (prompt(textoMenu));
turnoescolhido = turnoescolhido.toUpperCase();
let turno;
let mensangem = "";

switch (turnoescolhido) {
        case 'M':
                turno = "Matutino";
                mensangem ="Bom dia!";
                break;

        case 'V':
                turno = "Vespertino";
                mensangem = "Boa tarde!";
                break;

        case 'N':
                turno = "Noturno";
                mensangem = "Boa noite!";
                break;

        case "Matutino":
                turno = "Matutino";
                mensangem = "Bom dia!";
                break;
                
                case "Vespertino":
                turno = "Vespertino";
                mensangem = "Boa tarde!";
                break;
                
        case "Noturno":
                turno = "Norturno";
                mensangem = "Boa noite!";
                break;
                
}
alert(`${mensangem}`);