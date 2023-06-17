/*console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("name"));
console.log(document.getElementById("menu"));


//Has been replaced by 
console.log(document.querySelector("#menu"));
console.log(document.querySelectorAll(".a"));

//Selector with index
console.log(document.querySelectorAll(".card")[2]);


document.querySelectorAll("a").forEach((el) => console.log(el));



//ATTRIBUTES AND DATA-ATRIBUTTES
console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);


//set values at attributes
document.documentElement.lang = "es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

const linkDom = document.querySelector(".link-dom");
//Add attributes
linkDom.setAttribute("target", "_blank");
linkDom.setAttribute("rel", "noopener");

//remove attributes
console.log(linkDom.hasAttribute("rel"));
linkDom.removeAttribute("rel");
console.log(linkDom.hasAttribute("rel"));

//DATA ATTRIBUTES
console.log(linkDom.getAttribute("data-description"));
console.log(linkDom.dataset);
console.log(linkDom.dataset.description);
linkDom.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log(linkDom.dataset.description);
linkDom.dataset.description = "Hola mundo";
console.log(linkDom.dataset.description);


//STILOS Y VARIABLES
const linkDom1 = document.querySelector(".link-dom");
console.log(linkDom1.style);
console.log(linkDom1.getAttribute("style"));
console.log(linkDom1.style.backgroundColor);

console.log(window.getComputedStyle(linkDom1));

//acceder a una prop en particular
console.log(getComputedStyle(linkDom1).getPropertyValue("color"));

//add styles
linkDom1.style.setProperty("text-decoration", "none");
linkDom1.style.setProperty("display", "block");
linkDom1.style.width = "50%";
linkDom1.style.textAlign = "center";
linkDom1.style.marginLeft = "auto";
linkDom1.style.marginRight = "auto";
linkDom1.style.padding = "1rem";
linkDom1.style.borderRadius = "20rem";


//Variables CSS - Computed style
const $html = document.documentElement,
$body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
yellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, yellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = yellowColor;

$html.style.setProperty("--dark-color", "#000");
//update color of varaible
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor);


//STYLES CSS
const $card = document.querySelector(".card");
console.log($card);
console.log($card.className);
console.log($card.classList);

//En caso si tiene una clase
console.log($card.classList.contains("rotate-45"));
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");

//Remove
$card.classList.remove("rotate-45");
$card.classList.toggle("rotate-45");
// $card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("opacity-80", "sepia")


//TEXTO 
const $whatIs = document.getElementById("que-es");

let text = `
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati deleniti asperiores illum voluptas iste architecto magni, porro itaque. Nam nobis minima nostrum <i>labore suscipit nulla</i> <b>rerum voluptatibus magni tempore!</b></p>
`;

// $whatIs.innerText = text;
$whatIs.textContent = text;
$whatIs.innerHTML = text;
$whatIs.outerHTML = text;

*/

// 67 DOM TRAVERSING
/*const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.children[2]); //for the element child
console.log($cards.parentElement); // for the father
console.log($cards.firstElementChild); // for the first node of element
console.log($cards.lastElementChild); // for the last node of element

// console.log($cards.closes("div")) //find the father parent
console.log($cards.closes("body"));
*/

//CREATE ELEMENTS AND FRAGMENTS
/* const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"),
    $cards1 = document.querySelector(".cards"),
    $figure2 = document.createElement("figure");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards1.appendChild($figure);

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`; */

//segunda forma
/* 
$figure2.classList.add("card");
$cards1.appendChild($figure2);

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
    $ul = document.createElement("ul");

document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});
 */
// o tambien con innerHTML
/* 
const paises = ["Peru", "Bielorrusia", "China", "India", "Rusia"],
    $u2l = document.createElement("ul");

document.write("<h3>Paises del mundo</h3>");
document.body.appendChild($u2l);

$u2l.innerHTML = "";
paises.forEach((el) => $u2l.innerHTML += `<li>${el}</li>`)
 */



//FRAGMENTS

/* const month = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
],
    $ul3 = document.createElement("ul"),
    $fragment = document.createDocumentFragment();

month.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
 */




//TEMPLATES HTML
/*
const $cards = document.querySelector(".cards"), //Seleccionamos la clase card
    $template  = document.getElementById("template-card").content, //Varibale que apunte al template y accedemos a su cotenido
    $fragment1 = document.createDocumentFragment(),
    cardContent = [
        {
            title: "Tecnológia",
            img : "https://placeimg.com/200/200/tech",
        },
        {
            title: "Animales",
            img : "https://placeimg.com/200/200/animals",
        },
        {
            title: "Arquitectura",
            img : "https://placeimg.com/200/200/arch",
        },
        {
            title: "Gente",
            img : "https://placeimg.com/200/200/people",
        },
        {
            title: "Naturaleza",
            img : "https://placeimg.com/200/200/nature",
        }
    ];

    cardContent.forEach(el => {
        $template.querySelector("img").setAttribute("src", el.img);
        $template.querySelector("img").setAttribute("alt", el.title);
        $template.querySelector("figcaption").textContent = el.title;
        
        let $clone = document.importNode($template, true);           //clonar el nodo
        $fragment.appendChild($clone);
    });

    $cards.appendChild($fragment);*/


//Modifying Elements 
/* const $card2 = document.querySelector(".cards"),
    $newCard = document.createElement("figure"),
    $cloneCards = $card2.cloneNode(true);

$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
    `;
$newCard.classList.add("card");

// $card2.replaceChild($newCard, $card2.children[2]);
$card2.insertBefore($newCard, $card2.firstElementChild);  //Agregar tarjeta al inicio
$card2.removeChild($card2.lastElementChild);

document.body.appendChild($cloneCards)
 */

/* 
    .insertAdjacent
    .insertAdjacentElement(position, el)
    .insertAdjacentHTML(position, html)
    .insertAdjacentText(position,text)


    Posiciones
    beforebegin(hermano anterior)
    afterbegin(primer hijo)
    beforeend(ultimo hijo)
    afterend(hermano siguiente)
 */



/* 
const $card2 = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

let $contentCard = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption></figcaption>
    `;
$newCard.classList.add("card");
$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
// $card2.insertAdjacentElement("beforebegin", $newCard);
$card2.insertAdjacentElement("afterbegin", $newCard);
// $card2.insertAdjacentElement("beforeend", $newCard);
// $card2.insertAdjacentElement("afterend", $newCard);

 */





//Manejadores de Eventos en JavaScript

function holaMundo() {
    alert('Hola Mundo');
    console.log(event);
}


const $eventoSemantico = document.getElementById("evento-semantico"),
    $eventoMultiple = document.getElementById("evento-multiple");
$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e) {
    alert("Hola mundo desde el evento semantico");
    console.log(e);
    console.log(event);
}


$eventoMultiple.addEventListener("click", holaMundo);

$eventoMultiple.addEventListener("click", (e) => {
    alert("Hola mundo desde el manejador de eventos multiples");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
});



//MANEJADOR EVENTOS CON PARAMETROS
function saludar(name = "Desconocid@") {
    alert(`Hola ${name}`);
}


$eventoMultiple.addEventListener("click", () => {
    saludar()
    saludar("Valdir");
});


//REMOVER EVENTOS MULTIPLES
const $eventRemove = document.getElementById("evento-remover");
const removerDoblClick = (e) => {
    alert(`Removiendo el Evento de tipo ${e.type}`);
    console.log(e);
    $eventRemove.removeEventListener("dblclick", removerDoblClick);
    $eventRemove.disabled = true;
}

$eventRemove.addEventListener("dblclick", removerDoblClick);



//FLUJO DE EVENTOS//
/* const $divEvents = document.querySelectorAll(".eventos-flujo div"),
    $linkEventos = document.querySelector(".eventos-flujo a");
console.log($divEvents);


function flujoEventos(e) {
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
    e.stopPropagation();
} */

/* $divEvents.forEach(div => {
    // fase de burbuja es sin especificar el tercer parametro
    div.addEventListener("click", flujoEventos);

    //fase de captura con el tercer parametro
    // div.addEventListener("click", flujoEventos, true)
       div.addEventListener("click", flujoEventos, {
          capture: false,
          once: true
      }); 
}); */






//StopPropagation and preventDefault

/* $linkEventos.addEventListener("click", (e) => {
    alert("Hola soy Valdir");
    e.preventDefault(); //cancelar por default el evento
    e.stopPropagation();
}); */





//DELEGACIÓN DE EVENTOS
const $divEventos = document.querySelectorAll(".eventos-flujo div");


function flujoEventos(e) {
    console.log(`Hola te saluda ${this}, el click lo originó ${e.target.className}`);
}

document.addEventListener("click", (e) => {
    console.log("Click en", e.target);

    if (e.target.matches(".eventos-flujo div")) {
        flujoEventos(e);
    }

    if (e.target.matches(".eventos-flujo a")) {
        alert("Hola soy Valdir");
        e.preventDefault();
    }
});



// BOMM

/* 
window.addEventListener("resize", e => {
    console.clear();
    console.log(window.innerWidth);  //Referencia del tamaño deñ ancho de viewport de window
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
}); */

/* window.addEventListener("scroll", e => {
    console.clear;
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
}); */

/* window.addEventListener("load", e => {
    console.log("++++++++++++++++++EVENTO LOAD+++++++++++++++++++");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});

document.addEventListener("DOMContentLoaded", e => {
    console.log("++++++++++++++++++EVENTO DOMContentLoaded+++++++++++++++++++");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
}) */


//METODOS BOM
const $btnOpen = document.getElementById("abrir-ventana"),
    $btnClose = document.getElementById("cerrar-ventana"),
    $btnPrint = document.getElementById("imprimir-ventana");


let ventana;
$btnOpen.addEventListener("click", e => {
    ventana = window.open("Https://jonmircha.com");
});

$btnClose.addEventListener("click", e => {
    // window.close();
    ventana.close();
});

$btnPrint.addEventListener("click", e => {
    window.print();
});




//OBJETOS URL, HISTORIAL Y NAVEGADOR
/* console.log(location);
console.log(location.origin); //ruta 
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash); // valor de la url
console.log(location.search);
console.log(location.pathname); //archivo de ocnsulta */

console.log("****Objeto History****");
console.log(history);
console.log(history.length);


// history.back(3) regresar de pagina
// history.forward(3) ir hacia adelante dentro de la pestaña donde estoy tarbajando
// history.go(3 || -3) ir o regresar donde se indique 



console.log("*********************++Object NAVIGATOR*****************+");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);