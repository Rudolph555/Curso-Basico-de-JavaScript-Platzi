var m = "tijera";
var h = 'papel';
function juegoCase(m,h){
    switch(h){
        case "piedra":
            m=='tijera' ? console.log("GANA PIEDRA"):console.log("GANA PAPEL");
            break;
        case 'tijera':
            if(m=="papel")
                console.log("GANA TIJERA");
            else if(m=='tijera')
                    console.log("EMPATE");
                else
                    console.log("GANA PIEDRA");
            break;
        case "papel":
            m == 'piedra' ? console.log("GANA PAPEL") : console.log("GANA TIJERA");
            break;
        default:
            console.log("EMPATE");
    }
}
//INCOMPLETO, deberia ser todo con if else if para empates, sin default quiza XDD