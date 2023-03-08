const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");
const PrecioCiudad = new Array(500, 400, 380, 200);

let i=0;
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
const presupuestoDisponible = 190;

while (i < datos.length && datos [i].precio > presupuestoDisponible){
    i++; 
} 
if (i == datos.length)
  console.log("No tenemos pasajes disponibles");
else 
console.log("Puedes comprar pasaje para: "+datos[i].ciudad); 