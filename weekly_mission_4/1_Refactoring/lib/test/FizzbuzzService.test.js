const { Console } = require("console");
const FizzbuzzService = require("../services/FizzbuzzService");


describe('Test para funcion FizzbuzzService', () => {
  
  test('1. Test para applyValidationInExplorer', () => {
    const explorersFBS = {"score": 1};
    const explorers35 = FizzbuzzService.applyValidationInExplorer(explorersFBS);
    expect(explorers35.trick).toBe(1);
  });

  test('2. Test para applyValidationInExplorer', () => {
		const explorersFBS = { "score": 3 };
		const explorers35 = FizzbuzzService.applyValidationInExplorer(explorersFBS);
		expect(explorers35.trick).toBe("FIZZ");
	});

  test('3. Test para applyValidationInExplorer', () => {
		const explorersFBS = { "score": 5 };
		const explorers35 = FizzbuzzService.applyValidationInExplorer(explorersFBS);
		expect(explorers35.trick).toBe('BUZZ');
	});

  test('4. Test para applyValidationInExplorer', () => {
		const explorersFBS = { "score": 15 };
		const explorers35 = FizzbuzzService.applyValidationInExplorer(explorersFBS);
		expect(explorers35.trick).toBe('FIZZBUZZ');
	});
});