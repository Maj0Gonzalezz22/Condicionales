//Dado un número del 1 al 12, escribir el nombre del mes correspondiente. Por ejemplo, si el número es 3, el resultado debería ser "Marzo".

let n = prompt("Ingrese el numero del mes que quiere ver");    

switch (n) {
    case "1":
      console.log("Enero");
      break;
    case "2":
      console.log("Febrero");
      break;
    case "3":
      console.log("Marzo");
      break;
    case "4":
      console.log("Abril");
      break;
    case "5":
      console.log("Mayo");
      break;
    case "6":
      console.log("Junio");
      break;
    case "7":
      console.log("Julio");
      break;
    case "8":
      console.log("Agosto");
      break;
    case "9":
      console.log("Septiembre");
      break;
    case "10":
      console.log("Octubre");
      break;
    case "11":
      console.log("Noviembre");
      break;
    case "12":
      console.log("Diciembre");
    default:
        console.log("esta no es una opcion");;
    }