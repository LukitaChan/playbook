class ExplorerService {
	static filterByMission(explorers, mission) {
		// Part 2: Obtener la cantidad de explorers que están en node.
		const explorersInNode = explorers.filter(explorer => explorer.mission == mission);
		return explorersInNode;
		//console.log(explorersInNode.length);
	}

	static getAmountOfExplorersByMission(explorers, mission) {
    

		// Part 3: Obtener la lista de usuarios de github de los explorers que están en node.
		// const explorersInNodeToGetUsernames = explorers.filter(explorer => explorer.mission == mission);
		// return explorersInNodeToGetUsernames;
		//console.log(explorersInNodeToGetUsernames);
	}
}

module.exports = ExplorerService;