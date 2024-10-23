var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

//Metodos para recorrer mi array de objetos:
//---1er Metodo: filter, este metodo va a generar un nuevo array por lo que lo asignamos a una nueva variable
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});
//llamada en Consola:
articulosFiltrados
/*Salida:  
(2) [{…}, {…}]
    0: {nombre: 'Libro', costo: 320}
    1: {nombre: 'Teclado', costo: 500}
    length: 2
    [[Prototype]]: Array(0)
*/

//---2do Método: mpa, me ayuda a mapear ciertos articulos, tambien me genera un nuevo array y no modifica el original
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});
//llamada
nombreArticulos
/*Salida:  
(7) ['Bici', 'TV', 'Libro', 'Celular', 'Laptop', 'Teclado', 'Audifonos']
*/

/**NOTA IMPORTANTE: SINTAXIS

var nombreNuevoArray = [nombre del Array de Objects].[metodo](function([parametroObjeto para la funcion]){
    return parametroObjeto.propiedadObjeto 
});

 */

//---Metodo find(); este metodo no modifica el array de objetos sino genera un nuevo array con el valor que yo le paso si es que lo encuentra, valida un true o false
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop" //si tienes un artitulo igual a laptop regresame ese articulo sino no me regreses nada
});
//llamada
encuentraArticulo
/*Salida:
{nombre: 'Laptop', costo: 20000}
 */


//---Metodo forEach(); este nuevo metodo no me genera un nuevo array simplemente me hace un filtrado del array de objetos original sin modificarlo
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});
/*Salida:
Bici
TV
Libro
Celular
Laptop
Teclado
Audifonos
*/

//---Metodo some(); nos regresa una validacion de TRUE o FALSE para articulos que cumplan esa validación:
var articulosBaratos = articulos.some(function(articulo){
    articulo.costo <= 700;
});
//llamada:
articulosBaratos
//Salida:
true
