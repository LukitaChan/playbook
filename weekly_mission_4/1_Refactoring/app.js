const fs = require('fs');
const ExplorerService = require('./lib/services/ExplorerService');
const FizzbuzzService = require('./lib/services/FizzbuzzService');
const Reader = require("./lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");
//console.log(explorers);
// (1) esto regresa la lista de explorers del archivo.

//ExplorerService.js
const filtradoPorMision = ExplorerService.filterByMission(explorers, "node");
//console.log(filtradoPorMision);

const cantidadExplorersPorMision = ExplorerService.getAmountOfExplorersByMission(explorers, 'node');
//console.log(cantidadExplorersPorMision);

const obtenerUsernamesPorMision = ExplorerService.getExplorersUsernamesByMission(explorers, 'node');
//console.log(obtenerUsernamesPorMision);


//FizzbuzzService.js
const explorer1 = {name: "Explorer1", score: 1}
const val1 = FizzbuzzService.applyValidationInExplorer(explorer1)
console.log(val1)
// {name: "Explorer1", score: 1, trick: 1} 

const explorer3 = {name: "Explorer3", score: 3}
const val3 = FizzbuzzService.applyValidationInExplorer(explorer3)
console.log(val3);
// {name: "Explorer3", score: 3, trick: "FIZZ"}

const explorer5 = {name: "Explorer5", score: 5}
const val5 = FizzbuzzService.applyValidationInExplorer(explorer5) 
console.log(val5);
// {name: "Explorer5", score: 5, trick: "BUZZ"}

const explorer15 = {name: "Explorer15", score: 15}
const val15 = FizzbuzzService.applyValidationInExplorer(explorer15) 
console.log(val15);
// {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}