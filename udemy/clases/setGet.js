class People {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    get getName() {
        return this.name;

    }

    set setName(name) {
        this.name = name;
    }
}

// instance of class
let people1 = new People('Juan', 'Perez');
people1.setName = 'Valdir' //setName
console.log(people1.getName) //getName