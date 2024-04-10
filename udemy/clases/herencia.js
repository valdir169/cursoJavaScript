class People {
    constructor(name, lastName) {
        this._name = name;
        this._lastName = lastName;
    }

    get name() {
        return this._name;

    }

    set name(name) {
        this._name = name;
    }

    get lastName() {
        return this.lastName
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }

    // palabra static
    static saludar() {
        console.log('Hola desde static');
    }

    static saludar2(people) {
        console.log(people.name);                                                                       
    }

}


class Empleado extends People {
    constructor(name, lastName, departamento) {
        //llamar al constructor de la clase padre
        super(name, lastName);
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento = departamento;
    }
}


let people = new People('Juan', 'Perez');
console.log(people);

let people2 = new Empleado('Valdir', 'Hola', 'IT');
console.log(people2);


//statcic de persona
// people.saludar();  no es possible llamar un método estatic desde un objeto
People.saludar();
People.saludar2(people)


Empleado.saludar();
// Empleado.saludar2()