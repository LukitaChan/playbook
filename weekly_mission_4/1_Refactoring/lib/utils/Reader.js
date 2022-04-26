const fs = require("fs");

class Reader {
  static readJsonFile(path) {  //este deberá ser el path al archivo a leer.
// Part 1 Leer el archivo .json y Obtener la lista de explorers que solo están en node.
  const rawdata = fs.readFileSync(path);
  const explorers = JSON.parse(rawdata);
  return explorers;
  }
}

module.exports = Reader;