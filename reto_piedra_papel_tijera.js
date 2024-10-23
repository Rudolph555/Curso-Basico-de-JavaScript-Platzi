m = papel;
h = tijera;
function juego(m,h){
    if(m=="piedra" && h=="tijera"){
        console.log("GANA PIEDRA");
    }else if(h=="piedra" && m=="tijera"){
        console.log("GANA PIEDRA");
    }else if(m=="tijera" && h=="papel"){
        console.log("GANA TIJERA");
    }else if(h=="tijera" && m=="papel"){
        console.log("GANA TIJERA");
    }else if(m=="papel" && h=="piedra"){
        console.log("GANA PAPEL");
    }else if(h=="papel" && m=="piedra"){
        console.log("GANA PAPEL");
    }else{
        console.log("EMPATE");
    }
}
