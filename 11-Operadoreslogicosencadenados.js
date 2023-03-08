
const ciudadDestino = "Lima";
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");
let edadPasajero = 17;
let estaAcompañado = true;
let tienePasapporte = true;



// A && B || C
console.log(`Verificando pasajes para  ${ciudadDestino}`);
if (ciudadesDisponibles.indexOf(ciudadDestino) > -1  &&
   edadPasajero >= 18 &&
   tienePasapporte) {
  console.log("Pasaje disponible para venta");
} else {
    console.log ("Ciudad No disponible para viajar or pasajero no cumple las reglas");
}


