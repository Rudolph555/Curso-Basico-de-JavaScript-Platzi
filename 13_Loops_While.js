var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){    //sintaxis while por verdad se ejecuta lo que esta adentro de las llaves
    console.log(estudiantes);
    var estudiante = estudiantes.shift();   //usando este metodo hay q considerar q se esta mutando el array por lo tanto al final del for el array queda vacio
    saludarEstudiantes(estudiante);
}