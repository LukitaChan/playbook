// Usando objeto express
const express = require('express');
// App de Express
const app = express();
app.use(express.json()); // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000;

//http methods. link.
//http://localhost:3000/v1/explorers

//GET Crea un endpoint que regrese una lista de explorers
app.get('/v1/explorers', (req, res) => {
  console.log(`API de explorers con todos los requerimientos ${new Date()}`)
  const explorer1 = {id: 1, name: "Luka1"};
  const explorer2 = {id: 2, name: "Luka2" };
  const explorer3 = {id: 3, name: "Luka3"};
  const explorer4 = {id: 4, name: "Luka4" };
  const explorers = [explorer1, explorer2, explorer3, explorer4];

  res.status(200).json(explorers)
})

//GET Crea un endpoint que te regrese un explorer mediando un ID
app.get('/v1/explorers/:id', (req, res) => {
  console.log(`Explorers de la Api por metodo GET ${new Date()}`)
  console.log(`Obtener explorers con id ${req.params.id}`)
  const explorer1 = {id: 1, name: "Chisto1"};
  const explorer2 = {id: 2, name: 'Chisto2'};
  const explorer3 = {id: 3, name: 'Chisto3'};
  const explorers = [explorer1, explorer2, explorer3];
  res.status(200).json(explorers)
})

//POST Crea un endpoint que se encargue de crear un explorer
app.post('/v1/explorers', (req, res) => {
	console.log(`Explorers de la Api por metodo POST ${new Date()}`);
	const requestBody = res.body;
	res.status(201).json({ message: 'Created' });
	//El código de respuesta de estado de éxito creado HTTP 201 Created.
})

//PUT Crea un endpoint que se encargue de actualizar un explorer
app.put('/v1/explorers/:id', (req, res) => {
  console.log(`Explorers de la Api por metodo PUT ${new Date()}`);
  console.log(`Update explorers con id ${req.params.id}`)
  const requestBody = req.body
  res.status(200).json({ message: 'Updated! :)' });
});

//DELETE Crea un endpoint para eliminar un explorer
app.delete('/v1/explorers/:id', (req, res) => {
  console.log(`Explorers de la Api por metodo DELETE ${new Date()}`);
  console.log(`Delete explorers con id ${req.params.id}`);
  const requestBody = req.body
  res.status(200).json({message: "Deleted :,("})
});


// Con esto inicializamos esta app
app.listen(port, () => {
	console.log(`App esta siendo escuchada en el puerto ${port}`);
});
