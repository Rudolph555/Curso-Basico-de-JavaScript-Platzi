//Hay 2 tipos de funciones:
//1º Funciones Declarativas
function miFuncion() {
    return 3;
}
//llamada a la funcion declarativa
miFuncion();


//2º Funciones de Expresión
//generamos una variable que esta guardando mi funcion, la cual no tiene nombre
var miFuncion = function(a,b){
    return a + b;
}
//llamada a la funcion de expresión tmb conocida como anónima xq la funcion no tiene nombre pero se almacena en una variable
miFuncion();


//Ejemplo en Consola
function saludarEstudiantes(estudiante) {
    console.log(estudiante);
}
saludarEstudiantes("Diego");
    //salida: Diego

//IMPORTANTE:
//Se puede usar Template String, Template literals o Plantilla de Cadena de texto para poner variables dentro de un String, Ejemplo:
function saludarEstudiantes(estudiante) {
    console.log(`HOla ${estudiante}`);
}
saludarEstudiantes("Diego");
    //Salida: HOla Diego

//Los template literals están delimitados por acentos graves (`) en lugar de comillas tradicionales y permiten incrustar expresiones dentro de cadenas usando ${}. 

//Dentro de los template literals, no solo puedes insertar variables, sino también expresiones complejas. Ejemplo:
let a = 5, b = 10;
console.log(`El valor de a + b es ${a + b}`);
    //Salida: El valor de a + b es 15

//Multilínea: Los template literals permiten fácilmente escribir cadenas en múltiples líneas sin tener que usar caracteres de escape como \n. Ejemplo:
console.log(`Esta es una cadena
que se extiende
en múltiples líneas.`); 
    //Salida: Esta es una cadena
    //        que se extiende
    //        en múltiples líneas.

//Ejemplos de Funciones con RETURN con y sin variables aux:
function sumar(a,b) {
    var resultado = a + b;
    return resultado;   //variable auxiliar
}
sumar (1,2);
    //Salida: 3

function sumar(a,b) {
    return a + b;
}

sumar(1,2);
    //Salida: 3

