class ExplorerService {
	static filterByMission(explorers, mission) {
    const explorersInNode = explorers.filter(explorer => explorer.mission == mission);
		return explorersInNode;
		//console.log(explorersInNode.length);
	}
  
	static getAmountOfExplorersByMission(explorers, mission) {
    // Part 2: Obtener la cantidad de explorers que están en node.
		const explorersInNodeToGetUsernames = explorers.filter(explorer => explorer.mission == mission);
		return explorersInNodeToGetUsernames.length;
		//console.log(explorersInNodeToGetUsernames);
	}
  
	static getExplorersUsernamesByMission(explorers, mission) {
    // Part 3: Obtener la lista de usuarios de github de los explorers que están en node.
		const explorersInNodeToGetUsernames = explorers.filter(explorer => explorer.mission == mission);
		const usernamesInNode = explorersInNodeToGetUsernames.map(explorer => explorer.githubUsername);
		return usernamesInNode;
    //console.log(usernamesInNode);
	}
}

module.exports = ExplorerService;