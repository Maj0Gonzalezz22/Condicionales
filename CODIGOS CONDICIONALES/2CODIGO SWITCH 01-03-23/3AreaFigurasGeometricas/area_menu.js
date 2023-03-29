console.log("1. hallar area triangulo");
console.log("2. hallar area rectangulo");
console.log("3. hallar area circulo");

let menu = parseInt(prompt("selecciona una opcion, colocando el numero de este"));
switch (menu){
    case 1:
        let altura = parseInt(prompt("ingrese la altura del triangulo"));
        let base = parseInt(prompt("ingrese la base del triangulo"));
        let suma = base * altura;
        console.log("el area es", suma);
        break;
    case 2:
        let largo = parseInt(prompt("ingrese el largo del rectangulo"));
        let ancho = parseInt(prompt("ingrese el ancho del rectangulo"));
        let sumaC = largo * ancho;
        console.log("el area es", sumaC);
        break;
    case 3:
        let radio = parseInt(prompt("ingrese el radio del circulo"));
        let sumaCirculo = 2 * 3.1416 * radio * radio
        console.log("el area es:", sumaCirculo);
    default:
        console.log("esta no es una opcion");;
        break;
}