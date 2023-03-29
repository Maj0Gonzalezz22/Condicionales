let nombre = prompt("Nombre");
let estratoSocioEconomico = parseInt(prompt("Estrato"));
let antiguedad = parseInt(prompt("Antiguedad"));

let estra =  estratoSocioEconomico <= 4 ;
let anti =  antiguedad  >= 8;

switch (estra,anti) {
  case true:
    console.log("tiene derecho");
    break;

  default:
    console.log("No tiene derecho a subsidio");
    break;
}
