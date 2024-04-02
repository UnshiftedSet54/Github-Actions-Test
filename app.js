const express = require('express')
const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => res.status(200).send('Hola!'))

app.listen(port, () => console.log(`Servidor escuchando en http://localhost:${port}`))