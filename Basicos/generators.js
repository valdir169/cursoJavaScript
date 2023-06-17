function* iterable() {
    yield "Hola";
    console.log("Hola console");

    yield "Hola2";
    console.log("Hola console gdsgus");

    yield "Hola3";
    yield "Hola4";
}

let iterador = iterable();

// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

for (let y of iterador) {
    console.log(y);
}

const arr = [...iterable()];
console.log(arr);

function cuadrado(valor) {
    setTimeout(() => {
        console.log({ valor, result: valor * valor })
    }, Math.random() * 1000);

    return {
        valor,
        result: valor * valor
    }
}

function* generador() {
    console.log("Inicia generador");
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log("Fin Generador");
}

let gen = generador();

for(let y of gen) {
    console.log(y);
}