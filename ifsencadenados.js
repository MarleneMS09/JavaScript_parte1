const ciudadDestino = "Lima";
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");
let edadPasajero = 17;
let estaAcompañado = false;

//Verificamos que el pasajero cumple las reglas:
console.log(`Verificando pasajes para  ${ciudadDestino}`);
 if ((edadPasajero >= 18 || estaAcompañado)) {
    if (ciudadesDisponibles.indexOf(ciudadDestino) > -1 ) {
          console.log("Pasaje disponible para venta");
        } else {
    console.log ("Ciudad No disponible para viajar");
}
} else{
    if (edadPasajero >=16 && ciudadDestino == 'Lima') {
        console.log('Pasaje disponible para venta')
    } else {
    console.log ("Pasajero no cumple las reglas");
}
}

