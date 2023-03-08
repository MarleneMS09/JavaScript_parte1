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

    //mostrando el primer elemento de la lista
    console.log(paisesDisponibles[0]);
    console.log(ciudadesDisponibles[0]);

    paisesDisponibles.splice (1,2,"Venezuela") ; //si quiero eliminar colombia, y perú lo coloco así y si quiero agregar otros, lo pongo después
    console.log(paisesDisponibles);

}