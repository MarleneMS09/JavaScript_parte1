//Operadores de comparación
const ciudadDestino = "Lima";
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");

//palabra reservada if 
//evalua una condición 
/*console.log(`Verificando pasajes para  ${ciudadDestino}`);
if (ciudadesDisponibles.indexOf (ciudadDestino) >= 0) {-
  console.log("Pasaje disponible para venta");
} else {
    console.log ("Ciudad No disponible para viajar");
}
*/
const valorPasaje = "1000";
if (valorPasaje == 1000) {
    console.log('El pasaje vale 1000');
}
/* 
Por ejemplo si usamos === necesitamos que el valor y el valor de comparación sean iguales, ejemplo:

const valorPasaje = 1000;
if (valorPasaje === 1000) {
    console.log('El pasaje vale 1000');

}

OPERADORES LÓGICOS

//Y (AND) - O (OR) - NO (NOT)
//AND = && - se deben cumplir las dos condiciones 
OR = || - se debe cumplor una condición al menos 
//NOT | - NO se cumple la condición

*/
const edadPasajero = 31;
const estaAcompañado = true;

console.log(`Verificando pasajes para  ${ciudadDestino}`);
if ((ciudadesDisponibles.indexOf(ciudadDestino) > -1 ) &&
   ((edadPasajero >= 18 || estaAcompañado))) {
if ((ciudadesDisponibles.indexOf (ciudadDestino)) > -1 && edadPasajero >= 18) {
  console.log("Pasaje disponible para venta");
} else {
    console.log ("Ciudad No disponible para viajar or pasajero no cumple las reglas");
}
}

//aplicando lógica negativa


