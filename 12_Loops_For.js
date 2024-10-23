//1ra Forma del loop for
var estudiantes = ["Maria", "SErgio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){    //sintaxis for
    console.log(estudiantes[i]);
    saludarEstudiantes(estudiantes[i]);
}

//2da Forma de llamar el loop for
for(var estudiante of estudiantes){ //iniciamos una variable en singular de nuestro array que esta en plural (estudiante de estudiantes), donde estudiante se vuelve el index estudiante[0], estudiante[1],... mientras sigan existiendo estudiantes o valores dentro del array
    saludarEstudiantes(estudiante);
}