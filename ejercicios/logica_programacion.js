// 1. Invierte una cadena de texto que, pe mi funcion 'Hola Mundo'. devolverá  'odnuM aloH'
/*
const invertirCadena = (cadena = "") => {
    (!cadena) ? console.warn("No ingresaste una cadena") : console.info(cadena.split("").reverse().join(""));
}

invertirCadena("Hola Mundo");
*/



// 2. Programa una funcion para contar el numero de veces que se repite una palabra en  un texto largo.pe: miFuncion("Hola mundo adios Mundo", "mundo") devolverá 2
/*const textoCadena = (cadena = "", texto = "") => {
    if (!cadena) return console.warn("No ingresaste el texto largo")
    if (!texto) return console.warn("No ingresaste la palabra a evaluar");

    let i = 0,
        cont = 0;

    while (i !== -1) {
        i = cadena.indexOf(texto, i);
        if (i !== -1) {
            i++;
            cont++;
        }
    }

    return console.info(`La palabra ${texto} se repite ${cont} veces`);
}

textoCadena("Hola mundo adios Hola", "Hola");
*/


// 3. Programa una funcion que valide si una palabra o frase dada, es un palindromo(que se lee igual en un sentido que en otro), pe. miFuncion("salas") devolverá true

/*const palindromo = (palabra = "") => {
    if (!palabra) return console.warn("No ingresaste una palabra");

    palabra = palabra.toLocaleLowerCase();

    let alreves = palabra.split("").reverse().join("");

    return (palabra === alreves) ? console.info(`Si es un palindromo: palabra original "${palabra}"; palabra alReves "${alreves}"`) : console.error(`No es un palindromo: palabra original "${palabra}" palabra alReves "${alreves}"`);

}

palindromo("Hola");
*/


// 3. Programa una funcion que dado un arrey numerico devuelva otro array con los números elevados al cuadrado

/*const devloverCuadrado = (arr = undefined) => {
    if (arr === undefined) return console.warn("You did no enter an Array of numbers");
    if (!(arr instanceof Array)) return console.warn("The entered value is not Array");

    if (arr.lenght === 0) return console.error("This array is empty");

    for (let num of arr) {
        if (typeof num !== "number") return console.error(`The value ${num} isn't Number`);
    }

    const newArr = arr.map(el => el * el);
    return (console.log(`Array original ${arr}: New Array ${newArr}`));;
}


devloverCuadrado();
devloverCuadrado([1, 2, 3]);
*/

// 4. Programa una funcion que dada una date válida determine cuantos años han pasado hasta el dia de history.pe miFuncion(new Date(1984,4,23))
/*const calculateYears = (date = undefined) => {

    //If you do not enter a data we return message
    if (date === undefined) return console.warn("You did not enter the date");

    //If Date is not an instance of
    if (!(date instanceof Date)) return console.error("The entered value is not a valid date");

    let todayMinusDate = new Date().getTime() - date.getTime(),
        yeasrMiliseconds = 1000 * 60 * 60 * 24 * 365,
        yearsHumans = Math.floor(todayMinusDate / yeasrMiliseconds);


    return (Math.sign(yearsHumans) === -1)
        ? console.info(`Missing ${Math.abs(yearsHumans)} years for the ${date.getFullYear()}.`)
        : (Math.sign(yearsHumans) === 1)
            ? console.info(`Have passed ${Math.abs(yearsHumans)} years frome ${date.getFullYear()}.`)
            : console.info(`We are in the correct year ${date.getFullYear()}`);
}

calculateYears();
calculateYears([]);
calculateYears(false);
calculateYears(new Date());
calculateYears(new Date(2003, 2, 6));
calculateYears(new Date(2083, 2, 6));
*/


// 5. Program a function that give an Array of number return an object with 2 Arrays in the first stored the number "Pares" and in the second the "Impares". myFunction[1,2,3,4,5,6,7,8,9] return pares[2,4,6,8] , impares [1,3,5,7,9]
/*const peersOdd = (arr = undefined) => {
    if (arr === undefined) return console.warn("You did no enter an Array of numbers");
    if (!(arr instanceof Array)) return console.warn("The entered value is not Array");

    if (arr.lenght === 0) return console.error("This array is empty");

    for (let num of arr) {
        if (typeof num !== "number") return console.error(`The value ${num} isn't Number`);
    }


    return console.info({
        peers: arr.filter(num => num % 2 === 0),
        odd: arr.filter(num => num % 2 === 1)
    })
}

peersOdd();
peersOdd("Hola");
peersOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
*/


// 6. Program a function that, given an Array, returns the highest and lowest number in said Array. pe: myFunction[1,4,5,99,-60] will return [99, -60]
const arrMinMax = (arr = undefined) => {
    if (arr === undefined) return console.warn("You did no enter an Array of numbers");
    if (!(arr instanceof Array)) return console.warn("The entered value is not Array");

    if (arr.lenght === 0) return console.error("This array is empty");

    for (let num of arr) {
        if (typeof num !== "number") return console.error(`The value ${num} isn't Number`);
    }

    return console.info(`Array original ${arr}, \n Higher value ${Math.max(...arr)} \n Higher value ${Math.min(...arr)}`)
}

arrMinMax();
arrMinMax([1, 2, 3, 4]);




















/*La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/


class Movie {
    constructor({ id, title, director, premiere, country, gender, qualification }) {
        this.id = id;
        this.title = title;
        this.director = director;
        this.premiere = premiere;
        this.country = country;
        this.gender = gender;
        this.qualification = qualification;


        //Metodos
        this.validateId(id);
        this.validateTitle(title);
        this.validateDirector(director);
        this.validatePremiere(premiere);
        this.validateCountry(country);
        this.validateGenders(gender);
        this.validateQualification(qualification);
    }


    //metod static get

    static get listGenders() {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }

    static gendersAccepted() {
        return console.info(`The gender acecepted are: ${Movie.listGenders.join(",")}`);
    }

    validateString(property, value) {
        if (!value) return console.warn(`${property} "${value}" is empty`);
        if (typeof value !== "string") return console.error(`${property} "${value}" entered, not a string`);
        return true;
    }

    validateNumber(property, value) {
        if (!value) return console.warn(`${property}, "${value}" is empty.`);
        if (typeof value !== "number") return console.error(`${property},"${value}" entered. Is not a number.`)
        return true;
    }


    validateArray(property, value) {
        if (!value) return console.warn(`${property}, "${value}" is empty.`);
        if (!(value instanceof Array)) return console.error(`${property},"${value}" entered. Is not a Array.`)
        if (value.length === 0) return console.error(`${property}, "${value}" not have data.`)
        for (let iterator of value) {
            if (typeof iterator !== "string") return console.error(`The value ${iterator} entered, is not a string.`)
        }
        return true;
    }


    validateLengthString(property, value, longitude) {
        if (value.length > longitude) return console.error(`${property}, "${value}" exceeds the number of characters allowed: (${longitude})`);
        return true;
    }

    validateId(id) {
        if (this.validateString("IMDB id", id)) {
            if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) {
                return console.error(`IMDB Id "${id}" not is valid, must have 9 characters, the first 2 uppercase letters. The 7 rest numbers`);
            }
        }
    }

    validateTitle(title) {
        if (this.validateString("Titulo", title)) {
            this.validateLengthString("Titulo", title, 100);
        }
    }

    validateDirector(director) {
        if (this.validateString("Director", director))
            this.validateLengthString("Director", director, 50);
    }

    validatePremiere(premiere) {
        if (this.validateNumber("Year of premiere", premiere)) {
            if (!(/^([0-9]){4}$/.test(premiere))) {
                return console.error(`Year of premiere "${premiere}" is not valid. Should be a number of four digits.`)
            }
        }
    }


    validateCountry(country) {
        this.validateArray("Country", country);
    }


    validateGenders(gender) {
        if (this.validateArray("Genders", gender)) {
            for (let item of gender) {
                if (!(Movie.listGenders.includes(item))) {
                    console.error(`Genders incorrect "${gender.join(",")}"`);
                    Movie.gendersAccepted();
                }
            }
        }
    }


    validateQualification(qualification) {
        if (this.validateNumber("Qualification", qualification)) {
            return (qualification < 0 || qualification > 10)
                ? console.error("The qualificacion should be in range between 0 and 10")
                : this.qualification = qualification.toFixed();
        }
    }

    dataSheet() {
        console.info(`DATA SHEET\n
        ImdbId: "${this.id}"\n
        Title: "${this.title}"\n
        Director: "${this.director}"\n
        Premiere: "${this.premiere}"\n
        Country: "${this.country}"\n
        Gender: "${this.gender}"\n
        Qualificaction: "${this.qualification}"
        `);
    }

}

const myMovies = [
    {
        id: "tt1234567",
        title: "Jhon Wick",
        director: "Tom Cruse",
        premiere: 2023,
        country: ["USA"],
        gender: ["Comedy", "Sport"],
        qualification: 7.1
    },
    {
        id: "tt1244567",
        title: "Rambo",
        director: "Siylvester Stallonne",
        premiere: 2021,
        country: ["USA"],
        gender: ["Comedy", "Action", "Sport"],
        qualification: 8
    },
    {
        id: "tt1234007",
        title: "Transformers",
        director: "Tom Cruse",
        premiere: 2010,
        country: ["USA"],
        gender: ["Comedy", "Action", "War", "Sport"],
        qualification: 10
    }
];

myMovies.forEach(el => new Movie(el).dataSheet());
