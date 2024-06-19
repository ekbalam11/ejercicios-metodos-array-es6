/**
 * Utiliza el operador ternario https://javascript.info/ifelse#conditional-operator  para conseguir el mismo resultado
 */

let edad = 14;
let mensaje;

if (edad >= 18) {
    mensaje = "Puedes pasar";
}

else {
    mensaje = "No puedes pasar";
}

let accessAllowed = (edad > 21) ? true : false;

console.log(mensaje);