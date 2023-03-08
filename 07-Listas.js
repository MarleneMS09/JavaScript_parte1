const ciudad1 = "Bogota";
const ciudad2 = "Lima";
const ciudad3 = "Santiago";

//La forma de crear arrays son las siguientes:

//Definición de una lista con tipo de dato alfanúmerico:
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago");
console.log(ciudadesDisponibles);

//Definición de una lista de forma abreviada
const paisesDisponibles = ["Colombia", "Perú", "Chile", "Brasil", "Argentina"];
console.log(paisesDisponibles);

{
    paisesDisponibles.push('Uruguay');
    ciudadesDisponibles.push('Argentina'); //agregar una nueva variable: variable.push ('elemento');
    console.log(ciudadesDisponibles);
    console.log(paisesDisponibles);



    paisesDisponibles.unshift('Ecuador'); //se agregan variables al inicio variable.unshift('Nueva variable que se pondrá al inicio')
    ciudadesDisponibles.unshift('Quito');
    console.log(ciudadesDisponibles);
    console.log(paisesDisponibles);

}
