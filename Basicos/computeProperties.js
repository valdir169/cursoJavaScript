const objUsuario = {
    [`id_${Math.round(Math.random() *100 + 5)}`]: "Valor Aleartorio"
};

console.log(objUsuario);

const usuarios = ["Jon", "Max", "Hamilton", "Charles"];

usuarios.forEach((usuario, index) => objUsuario[`Id_${index}`] = usuario);

console.log(objUsuario);

