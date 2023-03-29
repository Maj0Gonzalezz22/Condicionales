let nombre = prompt("Nombre");
let estratoSocioEconomico = parseInt(prompt("Estrato"));
let antiguedad = parseInt(prompt("Antiguedad"));

if (estratoSocioEconomico < 4 && antiguedad >= 8){
    console.log("Tiene derecho a subsidio");
} else{
    console.log("No tiene derecho a subsidio");
}