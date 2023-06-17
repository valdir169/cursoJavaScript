const colores = ["Red", "Yellow", "Green"];
mjnfs

/* .lenght 
        - Nos permite concoer la cantidad de elemtos 
*/
console.log(colores.length)


/* .toString() 
    Nos permite tranformar un arreglo a una cadena de tecto.
    Por ejemplo para poder mostrarlo en el navegador
*/
// document.body.innerHTML = colores.toString();


/* .join() 
    Nos permite tranformar a una cdena de texto y serparar cada elemento.
*/
console.log(colores.join(", "));

/* .sort() 
    Nos permite ordenar un arreglo de cadenas de texto y numeros, de forma alfabetica
*/
const letters = ["V", "F", "J", "A"];
console.log(letters.sort());

/* .reverse() 
Nos permite ordenar un arreglo de forma descente.
*/
console.log(letters.reverse());


/* .concat() 
    Nos permite jusntar dos arreglos en uno solo
*/
const arr = [1,3,4];
const arr2 = ["a", "b", "c"];
const arr3 = arr.concat(arr2);

/* .push() 
    Nos permite agregar un elemnto al final de un arreglo
*/
colores.push("White");
console.log(colores);


/* .opo() 
    Nos permite eliminar el ultimo elemnto  de un arreglo
*/
colores.pop();
console.log(colores)

/* .shift() 
    Nos permite eliminar el primer elemento de un areglo y recorre sus elementos
*/
const days = ["l", "m", "m", "j", "v", "s", "d"];
console.log(days.shift());
// const diaeliminado = days,shift


/* .unshift() 
    NAgregar un elemento al inicio de un arreglo
*/

/* .splice() 
permite agreagr un elemento en cualquier posicion
- 1er parametro - posicion donde queremos comenzar a insertar elemntos
- 2do parametro - Si queremos eliminar elemtos desde la posicion indicada
- resto de parametros - los elementos a insertar.
*/


/* .slice() 
Nos permite copiar una parte de un areglo a  otro
 1er parametro - posicion desde donde queremos copiar
 1do parametro - Hasta de antes que elemento copiar
*/
const frutas = ["Uva", "Manzana", "Piña"];
const frutasFavoritas = frutas.slice(0, 1);
console.log(frutasFavoritas);