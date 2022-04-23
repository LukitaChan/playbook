// describe('Test Suite Dummy Description', () => {
// 	test('Case 1 Dummy', () => {
// 		const resultOfSomething = 1 + 2;
// 		expect(resultOfSomething).toBe(18);
// 	});
// });
const Spiderman = require('./../app/spiderman');

describe('Unit Tests for Spiderman class', () => {
  test('1) Create an spiderman object', () => {
    //Creamos clase
    const andrewGarfield = new Spiderman(
      'Spiderman Sony', 31, "Andrew Garfield", 2, "Sony Pictures"
    )
    expect(andrewGarfield.name).toBe('Spiderman Sony');
    expect(andrewGarfield.age).toBe(31);
    expect(andrewGarfield.actor).toBe('Andrew Garfield');
    expect(andrewGarfield.movies).toBe(2);
    expect(andrewGarfield.studio).toBe('Sony Pictures');
  });
});

test('2) Use method getInfo', () => {
	//Creamos clase
	const tomHolland = new Spiderman('Spiderman Marvel', 25, 'Tom Holland', 5, 'Marvel Studios');

  expect(tomHolland.name).toBe('Spiderman Marvel');
	expect(tomHolland.age).toBe(25);
	expect(tomHolland.actor).toBe('Tom Holland');
	expect(tomHolland.movies).toBe(5);
	expect(tomHolland.studio).toBe('Marvel Studios');
	expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel Studios");
});