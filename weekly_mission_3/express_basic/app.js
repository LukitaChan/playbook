const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hola mundito')
})

app.get('/galle', (req, res) => {
	res.send('Galleta dice: Bienvenidos');
});

app.get('/explorersInNode', (req, res) => {
  const explorer = {name: "Galleta", msg: "Hellow, tienes comida?"}
  res.send(explorer)
})

app.get('/explorers/:explorerName', (req, res) => {
	res.send(req.params);
});


app.listen(port, () => {
  console.log(`App esta siendo ejecutada por el ${port}`)
})