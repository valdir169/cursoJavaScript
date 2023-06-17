console.log(this);

this.place = "Global Context";

function saludar() {
    console.log(`${this.place}`)
}

saludar();


function greet(greeting, toWho) {
    console.log(`${greeting} ${toWho} from the ${this.place}`);
}

const obj = {
    place: "Context Object"
}

greet.call(obj,"Hola", "Jon");
saludar.apply(obj, ["GoodBye", "Valdir"]);
saludar.apply(this, ["GoodBye", "Valdir"]);



const person = {
    name: "Valdir",
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
}


person.greet();

//we create other person
const otherPerson = {

    //In this property go a first person and go to two person and assing the valu
    greet :person.greet.bind(person)
}

otherPerson.greet();

