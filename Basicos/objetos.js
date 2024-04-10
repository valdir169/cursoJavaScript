let persona = {
    edad: 20,
    name: "Valdir",
    apellido: "Contreras",
    email: "valdir@gmail.com",
    idioma: 'es',

    get lang() {
        return this.idioma.toUpperCase();
    },

    set lang(lang) {
        this.idioma = lang.toUpperCase();
    },
    //function type expression
    get fullName() {
        return this.name + ' ' + this.apellido;
    }
}

console.log(persona.lang);
persona.lang = 'en';

//function type persona
function Persona(name, apellido, email) {
    this.name = name;
    this.apellido = apellido;
    this.email = email;
}


let padre = new Persona('Valdir', 'Contreras', 'valdir@mail.com');

console.log(padre)