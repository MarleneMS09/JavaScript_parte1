//Palabra Const: espacio de memoria que luego de aisgnar su valor no cambia en el tiempo
const valorPasaje= 1650;
console.log(valorPasaje);

const nombrePasajero = "Leonardo";
const apellidoPasajero= "La Cruz";

console.log (nombrePasajero);
console.log(apellidoPasajero);
//Palabra let
//Espacio de memoria que pueda cambiar durante la ejecución del programa
//let nombreCompletoPasajero = nombrePasajero + " "  + apellidoPasajero;
//console.log(nombreCompletoPasajero);
//palabra reservada var
//Espacio de memoria que pueda cambiar durante la ejecución del programa
//alcance de la variable

//Bloque//
//{
//    console.log(nombreCompletoPasajero);
//}
let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
console.log("Variable con let: "+ nombrePasajero + " " + apellidoPasajero);
console.log("Variable con var: "+nombreCompletoPasajero);

console.log("Variable con let: "+nombreCompletoPasajero);
console.log("Variable con var: "+nombreCompletoPasajero);



