const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");
const PrecioCiudad = new Array(500, 400, 380, 200);


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
let i=0;
let ciudadSeleccionada = '';



do {
     /*console.log(datos[i].precio);
    console.log (presupuestoDisponible); */
    if (datos [i].precio < presupuestoDisponible) {
        ciudadSeleccionada = datos[i].ciudad;
        break;
}   
 i++;
} while (i < datos.length && ciudadSeleccionada == '') 
if (ciudadSeleccionada == '')
  console.log("No tenemos pasajes disponibles");
else 
console.log("Puedes comprar pasaje para: "+ciudadSeleccionada);