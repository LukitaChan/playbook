// Ejemplo 1: for Each para imprimir elementos de una lista
const letras = ["L", "u", "c", "i", "l", "a"];
console.log("Ejemplo 1: Imprimiendo los elementos de una lista");
letras.forEach(letra => console.log(letra));

console.log("********************************************************");

// Ejemplo 2: for Each para calcular la suma de todos los elementos de una lista
let suma = 0;
const numbers2 = [2, 3, 5, 7, 9];
numbers2.forEach(num => suma += num)
console.log("Ejemplo 2: Cálculo de la suma de los elementos de la lista");
console.log("La suma de los elementos es " + suma);

console.log('********************************************************');

// Ejemplo 3: forEach para imprimir los países en letras mayúsculas
const paises = ['mExiCo', 'esPañA', 'HolAndA', 'CubA', 'iTAly']
console.log("Ejemplo 5: Imprimiendo la lista de países en mayúsculas");
console.log(paises);
paises.forEach((pais) => console.log(pais.toUpperCase()));

console.log('********************************************************');

// Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
const numero4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const numeroSquare = numero4.map(function(num){ return num * num})
// También puedes escribir la función como fat arrow
const numeroSquare = numero4.map((num) => {return num * num});
console.log("Ejemplo 4: Imprimiendo la lista de elementos al cuadrado")
console.log(numero4)
console.log(numeroSquare);

console.log('********************************************************');

// Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas
const nombrecitos = ['Zacarias', 'Alphonse', 'Sharenna', 'Anna', 'Veronica']
const nombresMinus = nombrecitos.map((name) => name.toUpperCase());

console.log("Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas")
console.log(nombrecitos);
console.log(nombresMinus);

console.log('********************************************************');

// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas
const paises6 = ['mExiCo', 'esPañA', 'HolAndA', 'CubA', 'iTAly'];
const paisesPrimTresMayu = paises6.map(
	pais => pais.toUpperCase().slice(0, 3)
	// el método slice obtiene solo la longitud marcada del string, devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin.
);
console.log("Ejemplo 6: Uso de map para convertir todos primeros 3 caracteres de los nombres de una lista a mayúsculas")
console.log(paisesPrimTresMayu);

console.log('********************************************************');

// Ejemplo 7: Uso de filter para filtrar una lista de elementos
const paises7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const paisesConLand = paises7.filter((pais) => // esta es una función
  pais.includes('land') // indicación para solo filtrar elementos que incluyan "land"
)
console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos");
console.log("Paises que acaban en 'land' : " + paisesConLand);

const paisesAcabaI = paises7.filter((pais) => pais.endsWith('i'));
console.log("Ejemplo 7: Paises que terminan en i");
console.log("Paises que acaban en 'i' : " + paisesAcabaI);

console.log('********************************************************');

// Ejemplo 8: Filtrar una lista por condicional
const puntuacion = [
  { name: 'L', score: 95 },
  { name: 'U', score: 98 },
  { name: 'K', score: 80 },
  { name: 'I', score: 50 },
  { name: 'T', score: 85 },
  { name: 'A', score: 100 },
]

const puntuacionMasOchenta = puntuacion.filter((puntuacion) => puntuacion.score > 80)
console.log("Ejemplo 8: Filtrando elementos por score")
console.log(puntuacionMasOchenta);

console.log('********************************************************');

// Ejemplo 9: Uso del reduce
const numero9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reducidito = numero9.reduce((acc, elem) => acc + elem, 0);
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista");
console.log("La suma de " + numero9 + " da como resultado " + reducidito);

console.log('********************************************************');

// Ejemplo 10: uso de every nos ayuda a validar todos los elementos de una lista, si todos cumplen con la validación que indiques te regresa true, de lo contrario false
const nombres10 = ['Niño1', 'Niña2', 'Niñe3', 'Niñu4'];
const todasString = nombres10.every((name) => typeof name === 'string');
console.log("Ejemplo 10: Son todos los nombres string: " + todasString);

console.log('********************************************************');

// Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques
const edades = [24, 22, 19, 25, 32, 35, 18];
const edad = edades.find((edad) => edad < 20);
console.log("Ejemplo 11: Primera edad menor a 20 es: "+ edad);

console.log('********************************************************');

// Ejemplo 12: Uso de find en una lista de objetos
const puntuacion12 = [
  { name: 'L', score: 95 },
  { name: 'U', score: 80 },
  { name: 'K', score: 50 },
  { name: 'A', score: 85 },
  { name: 'S', score: 100 },
]

const menoresDeOchenta = puntuacion12.find((user) => user.score < 80)
console.log(puntuacion12);
console.log("Ejemplo 12. Nombre buscando por Find < 80 :" + menoresDeOchenta.name)

console.log('********************************************************');

// Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques.
const nombres13 = ['Explo1', 'Explo2', 'Explo3', 'Explorer4'];
const result = nombres13.findIndex((name) => name.length > 7);
console.log("Ejemplo 13: Primer elemento cuya palabra sea mayor a 7 es "+ nombres13[result] + " y esta en la posición " + result);

console.log('********************************************************');

// Ejemplo 14: Uso de some, este método validará todos los elementos de la lista, y si alguno cumple con la validación indicada, regresará true, de lo contrario será false.
const booleanos = [false, true, true, false, true];
// Uso de Some para ver si al menos uno de los elementos es false
const algunVerdadero = booleanos.some((bol) =>  bol === true);
console.log("Ejemplo 14: Alguno de los elementos en el array es True: " + algunVerdadero);
//true

console.log('********************************************************');

//Ejemplo 15: Uso de sort para ordenar elementos
const products = ['Cafe', 'Pera', 'Mermelada', 'Azucar', 'Limon', 'Mantequilla'];
console.log("Ejemplo 15: Elementos ordernados usando SORT");
console.log(products.sort());

console.log('********************************************************');

// Ejemplo 16: Ordenando una lista de objetos
const users = [
  { name: 'A', age: 150 },
  { name: 'B', age: 50 },
  { name: 'C', age: 100 },
  { name: 'D', age: 22 },
]

users.sort((a, b) => { // podemos invocar una función
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
});

console.log("Ejemplo 16: Ordenando una lista de objetos por la edad")
console.log(users) // en orden ascendente.