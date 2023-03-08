const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");
const PrecioCiudad = new Array(500, 400, 380, 200);
const presupuestoDisponible = 211;
let i=0;

//WHILE ... 0 o más veces
//DO WHILE ... 1 o más veces
while (PrecioCiudad[i] > presupuestoDisponible && i < ciudadesDisponibles.length){
    i++; 
} 
if (i == ciudadesDisponibles.length)
  console.log("No tenemos pasajes disponibles");
else 
console.log("Puedes comprar pasaje para: "+ciudadesDisponibles[i]); 

/* 
DO WHILE SERÍA ASÍ :

do { 
    i++;
}while (PrecioCiudad[i] > presupuestoDisponible && i < ciudadesDisponibles.length){
    i++; 
} 
if (i == ciudadesDisponibles.length)
  console.log("No tenemos pasajes disponibles");
else 
console.log("Puedes comprar pasaje para: "+ciudadesDisponibles[i]); 


*/