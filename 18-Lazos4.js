const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");
const PrecioCiudad = new Array(500, 400, 380, 200);
//While... 0 o más veces
//Do ... 1 o más veces 
//While(i < datos.length &6 datos [i].precio > presupuestoDisponible) {
/* 
 i++;
 }
//for..valor inicial para un valor final 
*/




//para decir una función en forma de mapa es de la siguiente manera
const datos = [
    {
    'ciudad': 'Bogotá',
    'precio': 500
    },
    {
    'ciudad': 'Lima',
    'precio': 400
    }, 
    {
    'ciudad': 'Santiago',
    'precio': 380
    }, 
    {
    'ciudad': 'Montevideo',
    'precio': 200
    }, 
];
const presupuestoDisponible = 600;

let ciudadSeleccionada = '';


for (let i = 0; i < datos.length  && ciudadSeleccionada == ''; i++) {

    if (datos [i].precio <= presupuestoDisponible) {
        ciudadSeleccionada = datos[i].ciudad;
        break;
}   
}
 /*do {
     /*console.log(datos[i].precio);
    console.log (presupuestoDisponible); */
/*
 i++;
} while (i < datos.length && ciudadSeleccionada == '')   */
if (ciudadSeleccionada == '')
  console.log("No tenemos pasajes disponibles");
else 
console.log("Puedes comprar pasaje para: "+ciudadSeleccionada);