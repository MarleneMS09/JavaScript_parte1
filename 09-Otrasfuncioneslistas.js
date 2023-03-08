const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");
console.log(ciudadesDisponibles);

//Definición de una lista de forma abreviada
const paisesDisponibles = ["Colombia", "Perú", "Chile", "Brasil", "Argentina", "Uruguay", "Venezuela"];
console.log(paisesDisponibles);

const cantidadCiudades = ciudadesDisponibles.length   //de longitud, es una propiedad del arreglo, no una función. 
console.log(`En la lista de Ciudades tenemos ${cantidadCiudades} elementos`); //utilizamos esta forma para mostrar los elementos que hay en ciudades
console.log(`En la lista de Países tenemos ${paisesDisponibles.length} elementos`); //utilizamos esto para que nos diga la longitud de paises


//Remover el primer elemento
ciudadesDisponibles.shift();
console.log(ciudadesDisponibles);
console.log(`En la lista de Ciudades tenemos ${ciudadesDisponibles.length} elementos`);

//Remover el último elemento
ciudadesDisponibles.pop();
console.log(ciudadesDisponibles);
console.log(`En la lista de Ciudades tenemos ${ciudadesDisponibles.length} elementos`);

//filtro de elementos de la lista
//const paisesFiltrados = paisesDisponibles.filter((e) => e == "Brasil");
const paisesFiltrados = paisesDisponibles.filter((e) => e.length > 6); //queremos saber qué países tienen una longitud mayor a 6
console.log(paisesFiltrados);

//Unificar los elementos de una cadena de caractéres
console.log (paisesDisponibles.join('-')); //tiene todos los países unidos por - 

//ordenar la lista 
console.log(paisesDisponibles.sort()); //con sort se modifica
console.log(paisesDisponibles);

//Coincidiendo la función 
console.log(`Perú está en la posición: ${paisesDisponibles.indexOf('Perú')}`); 

//Unificar dos listas
const listaPaísesYCiudades = paisesDisponibles.concat(ciudadesDisponibles); //en este caso no se modifica
console.log('Lista de países y ciudades')
console.log(listaPaísesYCiudades);
console.log('Lista de países');
console.log(paisesDisponibles);


