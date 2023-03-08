//Operadores de comparación
const ciudadDestino = "Santiago";
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");

//palabra reservada if 
//evalua una condición 
console.log(`Verificando pasajes para  ${ciudadDestino}`);
if (ciudadesDisponibles.indexOf (ciudadDestino) >= 0) {-
  console.log("Pasaje disponible para venta");
} else {
    console.log ("Ciudad No disponible para viajar");
}
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



*/