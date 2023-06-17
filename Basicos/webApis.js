let message = "Hola soy Valdir, un programador Junior";

const speak = (message) => 
speechSynthesis.speak(new SpeechSynthesisUtterance(message));

speak(message);