// 1. Escribir un programa que muestre un promt donde el usuario ingrese un número, luego pidiendo otro número, finalmente el
//  programa muestra una alerta con el resultado de suma.

// let numero = RegExp(!(/[0-9]+/g));

/* let a = prompt("Ingresa un numero a");
console.log(a);
let b = prompt("Ingresa un numero b");
console.log(b);

function suma(one, two) {
    one = parseInt(a);
    two = parseInt(b);

    let result = one + two;
    return alert(`La suma es ${result} `);
}

suma();*/






// 2. Crear un programa donde el usuario ingrese en un promt la Temperatura en Celsius y el programa muestre en una alerta
// la temperatuara en Farenheith

/*
let celsius = prompt("Ingrese la temperatura en °C");

function calcularFahrenheit(value) {
    value = (/^[0-9]+$/g.test(celsius));
    if (value) {
        value = parseInt(celsius);
    }
    else {
        return console.error(`El valor ${celsius} no es un número`);
    }

    let result = (value * 9 / 5) + 32;
    return alert(`°C = ${value}, °F = ${result}`);
}

calcularFahrenheit();
*/






// 3. pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo:5/10 igual 0.5

/*let num = prompt("Ingrese un número");

function suma(value) {
    value = (/^[0-9]+$/g.test(num));

    if (value) {
        value = parseInt(num);
    } else {
        return console.error(`El valor "${num}" no es un número`);
    }
    let result = value / 10;
    return alert(`El valor de la división es ${result}`);
}

suma();*/






// 4. Si a = [1,2,3] crear un script que determine de muestre un alert de tipo de dato a


/*let a = [1,2,3];
alert(typeof a);*/





// 5. Crear un programa que determine si un número introducido en un prompt es par o no, la respuesta será mostrada en un alert.


/*let num = prompt("Ingrese el número a evaluar");

function par(value) {
    if(value = /^[0-9]+$/.test(num)) {
        value = parseInt(num);
    }else {
        return console.error(`El valor "${num}" ingresado, no es número`);
    }

    if(value % 2 == 0) {
        return alert(`El numero "${value}" es par`)
    } else {
       return alert(`El numero "${value}" es impar`)
    }
}

par();*/






// 6. Crear un programa que determine si un número introducido en un prompt es divisible por 5 o no, mostrar el resultado en console.log()

/*let a = prompt("Ingrese un número a evaluar");

function divisible(value) {
    value = /^[0-9]+$/g.test(a);
    if (value) {
        value = parseInt(a);
    } else {
        return console.error(`El valor ingresado "${a}", no es un número`);
    }

    if (value % 5 === 5 || value % 5 === 0) {
        return console.log(`Èl numero "${value}" si es divisble por 5`);
    } else {
        return console.error(`El valor "${value}" ingresado no es divisible por 5`);
    }
}

divisible();*/








// 7.Crear un programa que determine si un número introducido en un popup es divisible por 11 y 5 o no, mostrar el resultado con console.log
/*let popup = prompt("Introduce un número");

function onceCinco(a) {
     a = (/^[0-9]+$/g).test(popup);
    (a) ? a = parseInt(popup) :  console.error(`El valor "${popup}" ingresado, no es un número`);
   
    let donce = a * 11;
    if (donce) {
        return console.log("El numero es divisble por 11")
    }

}
*/






// 8. Crear un programa que le pida al usuario dos números en un Prompt y luego muestre en un alerta el número mayor.

let num1 = prompt("Ingrese el primer número");
let num2 = prompt("Ingrese el segundo número");


const igual = (igual) => {

}

function mayor(a, b) {
    let reg = RegExp(/^[0-9]+$/g);

    a = reg.test(num1);
    if(a){
        a = parseInt(num1);
    }else {
        return console.error(`El valor "${num1}" ingresado, no cumple con los requisitos`);
    }

    b = reg.test(num2);
    if(b){
        b = parseInt(num2);
    }else {
        return console.error(`El valor "${num2}" ingresado, no cumple con los requisitos`);
    }

    // a = parseInt(num1);
    // b = parseInt(num2);
    // if(a !== "number" || b !== "number" ) return console.error("No es uyn numero");

    // if (a > b) {
    //     return alert(`El numero mayor es ${a}`);
    // }
    // else {
    //     return alert(`El numero mayor es ${b}`);
    // }
}


mayor();










//Enlace a github
// https://github.com/DesafioLatam/guia-de-ejercicios-javascript/blob/master/ejercicios.md


