const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const cors = require('cors');
const corsOptions = {
	origin: 'http://localhost:8081'
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
	res.json({ message: 'i am alive' });
});

//Agrega un nuevo endpoint GET en tu server.js que regrese todos los explorers
app.get('/explorers', async (req, res) => {
	const allExplorers = await prisma.explorer.findMany({});
	res.json(allExplorers);
});

app.get('/usertable', async (req, res) => {
	const allUsers = await prisma.userTable.findMany({});
	res.json(allUsers);
});

//Agrega un nuevo endpoint GET que te regrese el explorer al enviar un ID por query params.
app.get('/explorers/:id', async (req, res) => {
	const id = req.params.id;
	const explorer = await prisma.explorer.findUnique({ where: { id: parseInt(id) } });
	res.json(explorer);
});

app.get('/usertable/:id', async (req, res) => {
	const id = req.params.id;
	const user = await prisma.userTable.findUnique({ where: { id: parseInt(id) } });
	res.json(user);
});

//Crea un nuevo endpoint POST con el que vas a poder crear nuevos explorers.
app.post('/explorers', async (req, res) => {
	const explorer = {
		name: req.body.name,
		username: req.body.username,
		mission: req.body.mission
	};
	const message = 'Has creado un nuevo explorer';
	await prisma.explorer.create({ data: explorer });
	return res.json({ message });
});

app.post('/usertable', async (req, res) => {
	const user = {
		name: req.body.name,
		lang: req.body.lang,
		missionCommander: req.body.missionCommander
	};
	const message = 'Has creado un nuevo explorer, yupi!';
	await prisma.userTable.create({ data: user });
	return res.json({ message });
});

//Crea un nuevo endpoint PUT, en el cuál recibirás el ID del explorer a actualizar, y en el cuerpo del request los campos a actualizar, para este caso solo haremos el update del campo mission.
app.put('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer.update({
		where: { id: id },
		data: { mission: req.body.mission }
	});
	return res.json({ message: 'La base de datos ha sido actualizada' });
});

app.put('/usertable/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.userTable.update({
		where: { id: id },
		data: { missionCommander: req.body.missionCommander }
	});
	return res.json({ message: 'La base de datos ha sido actualizada :) ' });
});

//Crea un nuevo endpoint DELETE para eliminar un explorer dado un ID por query params.
app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({
		where: { id: id }
	});
	return res.json({ message: 'ID eliminado correctamente' });
});

app.delete('/usertable/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.userTable.delete({
		where: { id: id }
	});
	return res.json({ message: 'User eliminado correctamente' });
});

app.listen(port, () => {
	console.log(`Se esta usando el port ${port}`);
});
