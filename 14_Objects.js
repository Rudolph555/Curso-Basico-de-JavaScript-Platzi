//Sintaxis de Objetos:
var objeto = {};
//Ejem:
var miAuto = {
    marca: "Toyota",    //propiedad: valor
    modelo: "Corolla", //las propiedades van separadas por comas
    annio: 2020,
    detalleDelAuto: function(){     //los objetos pueden tener propiedades de tipo función
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};
miAuto //llamada al objeto
//Salida:   {marca: "Toyota", modelo: "Corolla", annio: 2020}

//Para acceder a los valores de un objeto:
miAuto.marca    //me trae la marca
miAuto.annio    //me regresa el valor de la palabra clave
miAuto.detalleDelAuto();    //llamada a la funcion del objeto
/*Salidas:
Toyota
2020
Auto Corolla 2020
*/

//Funcion Constructora 
function auto(marca, modelo, annio){    //dentro del parentesis las propiedades que espero que mi objeto tenga
    this.marca = marca,         //this hace referencia a mi objeto function auto
    this.modelo = modelo,
    this.annio = annio
};

//nuevo objeto a partir del template de la funcion constructora
var autoNuevo = new auto("Tesla", "Model 3", 2020); //Instancia de nuestra funcion constructora i.e. generar un objeto que deriva de otro objeto

var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("Toyota", "Corolla", 2020);

///llamada en consola:
autoNuevo
autoNuevo2
autoNuevo3
/*Salida
auto {marca: 'Tesla', modelo: 'Model 3', annio: 2020}
auto {marca: 'Tesla', modelo: 'Model X', annio: 2018}
auto {marca: 'Toyota', modelo: 'Corolla', annio: 2020}
*/


