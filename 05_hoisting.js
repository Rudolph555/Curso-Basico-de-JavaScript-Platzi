//Hoisting es cuando las variables y las funciones se procesan antes de que se ejecute cualquier tipo de codigo y ahi se genera el hoisting

//Tenemos Dos estados para usar una variable:
var miNombre;   //1º declarando una variable
miNombre = "Daniel";    //2º inicializando la variable

//Ejemplo en consola:
console.log(miApellido);
var miApellido = "Cruz";
/*Salida: undefined
          undefined
*/
//Esto es lo q esta pasando:
var miApellido = undefined; //al buscar la variable como no esta definida el navegador la define
console.log(miApellido + "Soy ese hoisting");
miApellido = "Cruz";    //como no tiene var por delante estoy indicando que estoy inicializando por lo q solo estoy cambiando e imprimiendo el valor, si le pongo var lo estaria declarando nuevamente y me daria como resultado en la 2da linea de salida otro undefined.
/*salida: undefinedSoy ese hoisting 
          'Cruz'
*/

//Ejemplo de hoisting con funciones:
hey();
function hey(){
    console.log("Hola "+miApellido)
}
var miApellido = "CRuz";    //cuando antepongo var hago entender q estoy declarando
/*Salida: Hola undefined
          undefined 
*/ 
/*Que esta pasando:
Las funciones se declaran antes que las variables y se llevan hasta arriba luego se ejecutan busca la variable dentro de la funcion y la declara y como mi variable miApellido no se encontraba declarada antes de la funcion por defecto la declara e incializa con undefined
*/

//NOTA IMPORTANTE: Si llamamamos a una función antes de declararla si vamos a obtener el resultado que nosotros esperamos siempre y cuando las variables esten declaradas e inicializadas antes de mandar llamar a esa función. Por buenas practicas las funciones deben declararse al inicio del código.