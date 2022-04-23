//esta es una prueba básica de Jest
const MissionCommander = require('./../app/missionCommander');

describe('Unit Tests for Mission Commander Class', () => {
	test('1) Create a mission commander objet', () => {
		const myMissionCommander = new MissionCommander('Woopa');
		expect(myMissionCommander.name).toBe('Woopa');
	});
});
