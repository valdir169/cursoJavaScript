//Va recorriendo los elemntos, es iterable
const iterable = [1,2,3,4,5];

//Accedemos al iterador del iterable
const iterador = iterable[Symbol.iterator]();

console.log(iterador);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());


let next = iterador.next();

while(!next.done) {
    console.log(next.value);
    next = iterador.next();
}

const iterable1 = new Set([1,2,3,4,5,5,6,7]);
const iterador1 = iterable1[Symbol.iterator]();
console.log(iterador1);
let next1 = iterador1.next();

while(!next1.done) {
    console.log(next1.value);
    next1 = iterador1.next();
}

