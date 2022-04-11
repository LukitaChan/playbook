// Crear la clase:
export default class MyPokemon {
	constructor(name) {
		this.name = name;
	}

	sayHello() {
		console.log(`Mi Pokemon ${this.name} te saluda!!!`);
	}
}