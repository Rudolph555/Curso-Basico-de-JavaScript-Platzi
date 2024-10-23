//Ejemplo 1
if(true){   //por true
    console.log("Hola");
}else{      //por false
    console.log("soy falso");
}

//Ejemplo 2
var edad = 18;
if (edad === 18){
    console.log("Puedes votar, será tu 1ra votación");
}else if (edad > 18){       //se puede anidar varios de estos sin necesidad de llaves extras
    console.log("Puedes votar de nuevo");
}else{
    console.log("Aun no puedes votar");
}

//Ejemplo 3
if (edad === 18){
    console.log("Puedes votar, será tu 1ra votación");
}else if (edad > 18){       
    console.log("Puedes votar de nuevo");
}else if (edad > 19){       
    console.log("Puedes votar de nuevo");
}else if (edad > 20){       
    console.log("Puedes votar de nuevo");
}else if (edad > 21){       
    console.log("Puedes votar de nuevo");
}else if (edad > 22){       
    console.log("Puedes votar de nuevo");
}else{
    console.log("Aun no puedes votar");
}

//Operador ternario:
condition ? true : false;   //sintaxis q funciona tmb como un if-else
//Ejm:
var numero = 1;
var resultado = numero === 1 ? "Sí soy un uno" : "No, no soy uno";