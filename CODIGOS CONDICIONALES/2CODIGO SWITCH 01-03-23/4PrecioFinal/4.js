/*Dado un número que indica el precio de un producto y otro número que indica el porcentaje de descuento, calcular el precio final después del descuento.*/

let can = parseInt(prompt("Ingrese el precio de un producto"));

let por = parseInt(prompt("Ingrese el porcentaje de descuento"));

let call = can * por /100;

let dess = call * can;

console.log("Su precio final es:",dess);



