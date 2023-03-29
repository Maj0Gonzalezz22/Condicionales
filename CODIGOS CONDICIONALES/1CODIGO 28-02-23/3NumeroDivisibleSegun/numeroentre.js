//Cree un programa que lea un número y muestre si este es divisible entre cinco o no

let n1 = parseFloat(prompt("Ingrese un numero"));

f= n1 % 5 == 0

 switch (f) {
    case true:
        console.log("Es un numero divisible entre cinco");
        break;
 
    default: console.log("No es un numero divisible entre cinco");
        break;
 }