const persona = {
    nombre: "",
    apellido: "",
    edad: 0
}

const manejador = {
    set(obj, prop, valor) {
        if (Object.keys(obj).indexOf(prop) === -1){
            return console.error(`La propiedad ${prop}, no existe en el objeto persona`);
        }

        if(
            (prop === "nombre" || prop === "apellido") && !(/^[A-Za-zÑñÁáÉéÍiÓóÚú\s]+$/g.test(valor))
        ){
            return console.error(`La propiedad "${prop}" solo acepta letras y espacios enn blanco`);
        }

        obj[prop] = valor;
    }
}

const jon = new Proxy(persona, manejador);
jon.nombre = "Valdir";
jon.apellido = "Contreras";
jon.edad = 20;
jon.facebook = "valdirContreras";

console.log(jon);
console.log(persona);

getDate();