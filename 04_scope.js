//SCOPE GLOBAL Y LOCAL
var miNombre = "Daniel";    //definido en el scope global q se ejecuta cuando el archivo javascript se inicializa en el navegador 

function nombre(){
    var miApellido = "Cruz";    //definido en un scope local se genera dentro de una función
    console.log(miNombre + " " + miApellido);   
}

nombre();
//salida: Daniel Cruz
miNombre
//salida: 'Daniel'
miApellido
//salida: ERROR is not defined