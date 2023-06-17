console.log(this);
console.log(window);
console.log(this === window);

this.nombre = "Contexto Global";
console.log(this.nombre);

function imprimir(){
    console.log(this.nombre);
}

imprimir();


const obj = {
    nombre : "Contexto OBJ",
    imprimir: function() {
        console.log(this.nombre);
    }
}

obj.imprimir();


const obj2 = {
    nombre: "Contexto Objeto2",
    imprimir
}

obj2.imprimir();


const obj3 = {
    nombre : "Contexto OBJ3",
    imprimir: () => {
        console.log(this.nombre)
    }
}

obj3.imprimir();


function Persona(nombre) {
    this.nombre = nombre;

    // return console.log(this.nombre);

    // return function() {
    //     console.log(this.nombre);
    // }

    return ()=> {console.log(this.nombre)};
}

let valdir = new Persona("Valdir");
valdir();