//Crea un archivo en la raíz de tu proyecto que se llame index.js. Este será el archivo principal de este proyecto
const MissionCommander = require('./app/missionCommander');
const Luka = new MissionCommander('Lukarita');
console.log(Luka.name);