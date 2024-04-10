let people = {
    name: 'Juan',
    lastName: 'Perez',
    fullName: function completo(title, cell) {
        // return this.name + ' ' + this.lastName
        return title + ': ' + this.name + '    ' + this.lastName + ', ' + cell
    }
}

let people2 = {
    name: 'Carlos',
    lastName: 'Lara'
}

// uso de Call por use the method fullName of people two.

console.log(people.fullName());
console.log(people.fullName.call(people2, 'Ing', '987654321'));


//use apply
let arr = ['Ing', '976541'];
console.log(people.fullName.apply(people2, arr));