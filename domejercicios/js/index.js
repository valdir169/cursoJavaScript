import hamburgerMenu from "./menu_hamburguesa.js";
import { alarm, digitalClock } from "./reloj.js"; //Destructuracion de objetos
import { moveBall } from "./shortcuts.js";
import countdown from "./countdown.js";
import scrollTopButton from "./btn_scroll.js";
import darkTheme from "./dark_mode.js";
import responsiveMedia from "./responsive.js";
import responsiveTester from "./testResponsive.js";
import userDevice from "./devices.js";
import networkStatus from "./deteccion_red.js";
import webcam from "./deteccion_webcam.js";
import getGeoLocation from "./geolocalizacion.js";
import searchFilter from "./filtros_busqueda.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scrollSpy.js";
import smartVideo from "./video_inteligente.js";
import contactValidation from "./validaciones.js";
import sepeechReader from "./narrador.js";

const d = document;
d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#clock", "#active-clock", "#stop-clock");
    alarm("../assets/alarm.mp3", "#active-alarm", "#stop-alarm");
    countdown("countdown", "May 23, 2023 01:23:19", "Feliz Cumpleaños");
    scrollTopButton(".scroll-top-btn");

    // responsiveMedia("youtube",
    //     "(min-width: 1024px)",
    //     `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91" target="_blank">Ver video</a>`,
    //     `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    responsiveMedia("gmaps", "(min-width: 1024px)", "contenM", "contentD");
    responsiveTester("responsive-tester");
    userDevice("user-device");
    webcam("webcam");
    getGeoLocation("geolocation");
    searchFilter(".card-filter", ".card");
    draw("#winner-btn", ".player");
    slider();
    scrollSpy();
    smartVideo();
    contactValidation();
});


d.addEventListener("keydown", e => {
    // shortcuts(e);
    moveBall(e, ".ball", ".stage");
})


darkTheme(".dark-mode", "dark-theme");
networkStatus();
sepeechReader();