//Coersion Implicita
var a = 4 + "7";
typeof a;   //salida sera un String

var b = 4 * "7";
typeof b;   //salida sera un number

//Coersión Explicita
var a = 20;     //tipo number

var b = a + "";
typeof b;   //salida tipo String por coersión implicita

var c = String(a);
typeof c;   //salida tipo String por coersión explicita con el metodo String

var d = Number(c);
typeof d;   //salida tipo number por coersión explicita con el metodo Number