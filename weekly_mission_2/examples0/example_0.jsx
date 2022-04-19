console.log('*** Objetos ***');

// Ejemplo 1: Crear un objeto
const myObjeto = {}; // Esto es un objeto vacío
console.log('Ejemplo 1: Crear un objeto vacío');
console.log(myObjeto);

console.log('*************');

// Ejemplo 2: Crear un objeto con propiedades
const myObjeto2 = {
	nombre: 'Lucy',
	edad: 31,
  estadoCivil: 'soltera',
  hobbies: ['cocinar', 'leer', 'caminar'],
  pet: 'Galleta',
};
console.log('Ejemplo 2: Crear un objeto con propiedades');
console.log(myObjeto2);

console.log('*************');

// Ejemplo 3: Objeto con diferentes propiedades
const myObjeto3 = {
	nombre: 'Galleta',
	edad: 12,
	apodos: ['Pituca', 'Galletosa', 'Mamashita'],
	direccion: {
		cp: '99999',
		estado: 'Yucatan',
		ciudad: 'Merida'
	}
};
console.log('Ejemplo 3: Objeto con diferentes propiedades');
console.log(myObjeto3);
console.log(myObjeto3.nombre);
console.log(myObjeto3['direccion']);

console.log('*************');

// Ejemplo 4: Objeto con métodos
const pet = {
	nombre: 'Galleta',
	// Esta es una función que se guarda como propiedad
	sayHello: function () {
		// this.nombre hace referencia a la propiedad del objeto
		console.log(`${this.nombre} te saluda en idioma perro!`);
	}
};

console.log('Ejemplo 4: Objeto con métodos');
pet.sayHello();

console.log('*************');

// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
	nombre: 'Asuka',
	sayHelloToMyPet: function (yourPet) {
		console.log(`${this.nombre} say's hello to ${yourPet}`);
	}
};

console.log('Ejemplo 5: Objeto con método que recibe parámetros');
myPet.sayHelloToMyPet('Medea');

console.log('*************');