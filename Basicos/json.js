
const json = {
    string: "Valdir",
    number: 20,
    boolean: true,
    array : ["Run", "Programming", "cook"],
    object: {
        facebook: "Valdir Contreras",
        email: "valdircontreras@hola.com"
    },
    null: null
};

console.log(json);
console.log(JSON.parse("{}"));
console.log(JSON.parse("[1,2,3,4]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("12"));



//Method stringify
console.log(JSON.stringify({}));
console.log(JSON.stringify([1,2,3,4]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(12));


console.log(JSON.stringify(json));
console.log(JSON.parse('{"string":"Valdir","number":20,"boolean":true,"array":["Run","Programming","cook"],"object":{"facebook":"Valdir Contreras","email":"valdircontreras@hola.com"},"null":null}'));

