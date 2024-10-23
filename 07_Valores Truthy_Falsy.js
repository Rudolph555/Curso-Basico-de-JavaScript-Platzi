//Que valores son verdaderos o falsos:
Boolean();  //Usamos la funcion Boolean() sin argumento es false por defecto

Boolean(0); //salida: false
Boolean(null); //salida: false
Boolean(NaN); //salida: false
Boolean(undefined); //salida: false
Boolean(false); //salida: false
Boolean(""); //salida: false de un string vacio

Boolean("a"); //salida: true    con minimo un caracter aunq un espacio o letra
Boolean(1); //salida: true      cualquier tipo de numero menos el cero
Boolean([]); //salida: true     cualquier array aunque vacio
Boolean({}); //salida: true     cualquier objeto aunque vacio
Boolean(function(){}); //salida: true   cualquier funcion es verdadera
Boolean(true); //salida: true
