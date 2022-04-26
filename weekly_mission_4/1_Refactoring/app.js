const fs = require('fs');
const ExplorerService = require('./lib/services/ExplorerService');
const Reader = require("./lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");
//console.log(explorers);
// (1) esto regresa la lista de explorers del archivo.

const misionN = ExplorerService.filterByMission(explorers, "node");
//console.log(misionN.length);

const missionGitN = ExplorerService.getAmountOfExplorersByMission(explorers, 'node');
console.log(missionGitN);

// ExplorerService.getExplorersUsernamesByMission(explorers, 'node');




//(Props de objeto: name, githubUsername , score, mission, stacks).

//4. Se necesitó crear una validación llamada FizzBuzz, si el explorer tiene...4
// const assignFizzTrick = function (explorer) {
// 	if (explorer.score % 3 === 0) {  //si el explorer tiene un score es divisible de 3
// 		explorer.trick = 'FIZZ';  //true: campo trick = "FIZZ"
// 		return explorer;
// 	} else {
// 		explorer.trick = explorer.score;  //false: cualquier otro caso el valor de este nuevo campo deberá ser el score mismo
// 		return explorer;
// 	}
// };
// const explorersInNodeAndFizzTrick = explorersInNode.map(explorer => assignFizzTrick(explorer));

//5. Después necesitamos una validación muy similar pero para cuando el score sea divisible entre 5, entonces el valor del nuevo campo trick será BUZZ, cualquier otro caso el valor será el score.
// const assignBuzzTrick = function (explorer) {
// 	if (explorer.score % 5 === 0) {
// 		explorer.trick = 'BUZZ';
// 		return explorer;
// 	} else {
// 		explorer.trick = explorer.score;
// 		return explorer;
// 	}
// };
// const explorersInNodeAndBuzzTrick = explorersInNode.map(explorer => assignBuzzTrick(explorer));

//7. Pero después volvimos a necesitar otro caso para cuando el valor del score fuera divisible entre 3 y también entre 5, entonces el valor del campo trick debe ser FIZZBUZZ, de lo contrario tendrá el valor del score.

// const assignFizzBuzzTrick = function (explorer) {
// 	if (explorer.score % 5 === 0 && explorer.score % 3 === 0) {
// 		explorer.trick = 'FIZZBUZZ';
// 		return explorer;
// 	} else {
// 		explorer.trick = explorer.score;
// 		return explorer;
// 	}
// };
// const explorersInNodeAndFizzBuzzTrick = explorersInNode.map(explorer => assignFizzBuzzTrick(explorer));

// Part 8: Get a list of the explorers in node, if the score is divisible by 5 and 3, set the property trick and the value FIZZBUZZ, if is just divisible by 5 set the property trcik and the value BUZZ, if is just divisible by 3 set the property trick and the value FIZZ, otherwise set the property trick and the score value. TODO
