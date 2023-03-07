//Tipos de datos
//ALFANUMERICO
//const nombrePasajero = "Pedro Silva";
//console.log (nombrePasajero);

//Númerico
const valorBoleto= 1000;
const porcentajeTasaEmbarque = 60/100;
const impuestoAeropuerto=100;
const gestionAgencia = 100;
//console.log(valorBoleto);

//Lógicos (true,false)
let boletoActivo =true;

//Operaciones aritméticas
//let totalBoletos= valorBoleto +  valorBoleto + tasaEmbarque + gestionAgencia;


//Orden de precedencia 
// ()
//* y /
//+ y -
let totalBoletos = (valorBoleto + impuestoAeropuerto)*porcentajeTasaEmbarque + gestionAgencia;
console.log (totalBoletos);

//concatenación de texto 
let nombrePasajero = "Leonardo";
let apellidoPasajero= " De La Cruz";
let nombreCompleto =nombrePasajero + apellidoPasajero;
let pasaporte = parseInt('1000') + parseFloat('12');
let multiplicacion = parseInt('1000') / parseFloat('10');
console.log (nombreCompleto);
console.log (pasaporte);
console.log(multiplicacion);

let noEsUnNumero = parseInt('AASASA');
