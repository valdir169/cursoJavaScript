/* Operadores AND EN JAVASCRIPT 
    regresa true solo si ambos operandos son true
*/

let a = 5;
let valMIn = 0, valMax = 10;

if (a >= valMIn && a <= valMax) {
    console.log("Dentro de rangp");
} else {
    console.log("Fuera de rango");
}


/* OPERADOR OR EN JAVASCRIPT 
    regresa true si cualquiera de los opernads es true
*/
let vaciones = false, diaDescanso = true;
if (vaciones || diaDescanso) {
    console.log("EL padre puede asitir al juego");
} else {
    console.log("El padre esta ocupado");
}


/* OPERADOR TERNARIO */
let result = (3 > 6) ? "verdadero" : "false";
console.log(result);

let data = "15";
let edad = Number(data);

data >= 18 ? console.log("puede ir a votar") : console.log("muy joven aun no puede votar");


/* PRECEDENCIA CE OPERADORES EN JS */
let x = 5,
    y = 10,
    z = ++x + y--;

console.log(x)
console.log(y)
console.log(z)



/******************************* SENTENCIAS DE CONTROL *******************************/
//IF ELSE
/* let condition = true;

if (condition) {
    console.log("verdadera")
} else {
    console.log("falsa")
}

let num = 3;

if (num == 1) {
    console.log("NUmero 1");
} else if (num == 2) {
    console.log("numero 2")
} else if (num == 3) {
    console.log("numero 3")
} else {
    console.log("NUmero desconocido")
}

 */
/* SWITCH */
let n = 3;

let nuText = "Valor desconocido";
/* 
switch (n) {
    case 1:
        nuText = "Numeor uno";
        break;

    case 2:
        nuText = "Numero dos";
        break;

    case 3:
        nuText = "Numero tres";
        break

    default:
        nuText = "El caso no es encontrado"
}
 */
console.log(nuText);


let mes = 4;

let estacion = "Estacion desconocida";

/* switch (mes) {
    case 1: case 2: case 12:
        estacion = "Invierno";
        break;

    case 3: case 4: case 5:
        estacion = "Primavera";
        break;

    case 6: case 7: case 8:
        estacion = "Verano";
        break;

    case 9: case 10: case 11:
        estacion = "Otoño";
        break;
    default:
        estacion = "Valor icorrecto";
} */

console.log(estacion);


/************ CICLOS EN JAVASCRIPT ************/

// ciclo while

/*
let count = 0;
while (count < 3) {
   console.log(count);
   count++;


//CICLO DO WHILE

do {
    console.log(count);
    count++;
}
while (count < 3)
} */

/* CICLO FOR */
for (let count = 0; count < 3; count++) {
    console.log(count);
}