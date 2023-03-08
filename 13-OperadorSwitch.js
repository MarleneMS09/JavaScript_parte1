
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");
let valorPasaje = 0;
const ciudadDestino = "Bogotá";


//condición con IF 
console.log (`Verificando pasajes para ${ciudadDestino}`);
if (ciudadesDisponibles.indexOf(ciudadDestino) > -1) {
 /* if (ciudadDestino == "Bogotá") {
    valorpasaje = 500;
  } else if (ciudadDestino == "Lima") {
    valorPasaje = 400;
  } else if (ciudadDestino == "Santiago") {
    valorPasaje = 380;
  } else if (ciudadDestino == "Montevideo") {
    valorPasaje = 200;
  }  */
 switch (ciudadDestino) {
   case "Bogotá":
     valorPasaje = 500;
     break;
   case "Lima":
     valorPasaje = 400;
     break;
   case "Santiago":
     valorPasaje = 300;
     break;
   case "Montevideo":
     valorPasaje = 200;
     break;
   default: //en este caso si no se cumple ninguno de arriba se va a default.
      console.log(`No hay pasajes para la ciudad indicada`);
     break;
 }
} if (valorPasaje = 0);
console.log(`el valor del pasaje es: ${valorPasaje}`);
 
