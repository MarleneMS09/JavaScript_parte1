const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago");
console.log(ciudadesDisponibles);

//Definición de una lista de forma abreviada
const paisesDisponibles = ["Colombia", "Perú", "Chile", "Brasil", "Argentina"];
console.log(paisesDisponibles);

{
    paisesDisponibles.push('Uruguay');
    ciudadesDisponibles.push('Argentina'); //agregar una nueva variable: variable.push ('elemento');




    paisesDisponibles.unshift('Ecuador'); //se agregan variables al inicio variable.unshift('Nueva variable que se pondrá al inicio')
    ciudadesDisponibles.unshift('Quito');
    console.log(ciudadesDisponibles);
    console.log(paisesDisponibles); 
    
    console.log(paisesDisponibles[0]);
    console.log(ciudadesDisponibles[0]);

}