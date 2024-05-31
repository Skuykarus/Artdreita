const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database');
const routes = require('./routes/routes');


const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rutas
app.get('/', (req, res) => {
  res.send('API funcionando');
});

// Ejemplo de ruta API
app.use('/', routes);

// Arrancar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});