let nombre= prompt("1. ingrese su nombre");
let edad= parseFloat(prompt("2. ingrese su edad"));
let telefono= parseInt(prompt("3. ingrese su telefono"));

console.log("estados");
console.log("1. visualizar");
console.log("2. editar");

let estados = parseInt(prompt("selecciona una opcion, colocando el numero de este "));
switch (estados){
    case 1:
        console.log("sus datos son:", nombre, edad, telefono);
        break;
    case 2:
        let nombre= prompt("1. ingrese su nombre");
        let edad= parseFloat(prompt("2. ingrese su edad"));
        let telefono= parseInt(prompt("3. ingrese su telefono"));

        console.log("sus datos son:", nombre, edad, telefono);

        break;

}