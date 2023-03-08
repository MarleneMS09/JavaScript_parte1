
const ciudadDestino = "Lima";
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");
let edadPasajero = 18;
let estaAcompañado = true;
let tienePasapporte = true;
let estaCasado= false;



console.log(`Verificando pasajes para  ${ciudadDestino}`);
// A && B || C

if (ciudadesDisponibles.indexOf(ciudadDestino) > -1  &&
   edadPasajero >= 18 &&
   tienePasapporte &&
   !estaCasado) {
  console.log("Paquete para solteros disponibles para venta");
} else {
    console.log ("Ciudad No disponible para viajar o pasajero no cumple las reglas");
} //forma para que se ejecuten las 3 condiciones 



