let numero=parseFloat(prompt("ingrese un numero del 1 al 15"));
 
switch (numero) {
    case 2 :
    case 3 :
    case  5:
    case  7:
    case 11:
    case 13 :
        console.log("si son numeros primos");
        break;
        case 1:
        case 4 :
        case 6 :
        case 8 :           
        case 9:
        case 10 :
        case 12:
        case 14 :
        case 15 :
             console.log("no son numeros primos");
    default:
        console.log("el numero debe ser entre 1 y 15");
        break;
}