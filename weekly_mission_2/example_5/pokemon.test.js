import Pokemon from './pokemon';

test('1) Create a new object pokemon', () => {
	const myPokemon = new Pokemon('Pikachu', 'Electrico', 25);
	expect(myPokemon.name).toBe('Pikachu'); // Corrige esta prueba
	expect(myPokemon.type).toBe('Electrico'); // Corrige esta prueba
  expect(myPokemon.age).toBe(25); // Corrige esta prueba
});
