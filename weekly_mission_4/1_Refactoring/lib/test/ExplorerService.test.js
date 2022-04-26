const { exportAllDeclaration } = require("@babel/types");
const ExplorerService = require("../services/ExplorerService");

describe('Test para ExplorerService:  getAmountOfExplorersByMission y ', () => {

  test('1. Obtener la cantidad de explorers que están en node.', () => {
		const explorers = [{ mission: 'node' }]; //explorers con la prop. mission = node.
		const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, 'node'); //nuevo elemento con explorers en node.
		expect(explorersInNode).toBe(1); //Solo estamos evaluando a 1 elemento y tiene la prop. buscada.
	});

  test('2. Obtener la lista de usuarios de github de los explorers que están en node.', () => {
    const explorers = [
			{
				githubUsername: 'ajolonauta2',
				mission: 'node',
			}
		];
    const explorersInNodeToGetUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, 'node');
    const nameUser = explorersInNodeToGetUsernames[0];
    expect(nameUser).toBe('ajolonauta2');
  });
});