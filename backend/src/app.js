const express = require('express');
const cors = require('cors');
const app = express();

// Settings
app.set('port', 4000);

// Middlewares
app.use(cors());
app.use(express.json());


// Routes
app.use('/', require('./routes/PotentialClients'));
app.use('/contacto', require('./routes/PotentialClients'));


module.exports = app;