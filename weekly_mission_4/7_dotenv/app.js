require('dotenv').config();

if (!process.env.TOKEN && !process.env.KEY) {
	throw new Error('No hay configuración con Api Key y con Token');
}

let Trello = require('trello');
let trello = new Trello(process.env.KEY, process.env.TOKEN);

let cardTitle = `Card Nueva de Luka ${new Date()}`;
//626ed353a0b41b136c410f61, 626ed353a0b41b136c410f62, 626ed353a0b41b136c410f63...
trello.addCard(cardTitle, 'LukitaChan', '626ed353a0b41b136c410f61', function (error, trelloCard) {
	if (error) {
		console.log('Could not add card:', error);
	} else {
		console.log('Added card:', trelloCard);
	}
});
