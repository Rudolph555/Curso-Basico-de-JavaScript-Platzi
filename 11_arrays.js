//Sintaxix para generar o escribir un array:
var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"]; 

console.log(frutas);    //accedemos al array mediante el nombre de la variable
//Salida: (4) ['Manzana', 'Plátano', 'Cereza', 'Fresa']
console.log(frutas.length)  //longitud para saber cuantos elementos tiene el array
//Salida: 4
console.log(frutas[2]); //Me devuelve el valor en la posicion 2 del array
//Salida: Cereza

/*Tenemos los siguientes tipos de metodos para mutar los arrays
en todos estos casos la variable a la que se asigna el metodo no sirve de mucho solo almacena la nueva longitud o el valor del elemento eliminado, los cambios suceden en la variable inicial con la que se esta usando el metodo
*/
var masFrutas = frutas.push("Uvas");    //inserta el elemento al final del array, la variable solo almacena la nueva longitud del array
var ultimo = frutas.pop("pLATano");  //pop elimina el ultimo elemento de mi array sin importar el argumento, en este caso eliminaria Uvas anteriormente agregado, la variable solo almacena el valor del elemento eliminado
var nuevaLongitud = frutas.unshift("uvas");  //unshift agrega el elemento al inicio del array, la variable solo almacena la nueva longitud del array
var borrarFruta = frutas.shift("Manzana"); //shift elimina el primer elemento de mi array sin importar el argumento, en este caso eliminaria uvas anteriormente agregado y no Manzana, , la variable solo almacena el valor del elemento eliminado
var posicion = frutas.indexOf("Cereza");    //indexOf me trae la posicion del argumento dentro del array, en este caso talvez sirva la variable pues almacena la posicion q buscamos con el argumento.

//NOTA: estos metodos pueden ser invocados en la consola sin la necesidad de una variable donde asignar, i.e:
frutas.indexOf("Cereza");
frutas.unshift("uvas");
