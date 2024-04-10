// una clase es un aa¿plantilla donde dfinimos los metodos y atributos
// Los obejtos son instancias de la clase

class People {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
}

// instance of class
let people1 = new People('Juan', 'Perez');

console.log(people1)