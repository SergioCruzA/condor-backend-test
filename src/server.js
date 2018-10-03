// require intial config
require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

// Create express instance
const app = express();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// Parse application/json
app.use(bodyParser.json())

// Use middleware for course routes
app.use(require('./routes/course'));

// Create mongo conection
mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, (err, resp) => {
    if (err) throw err;
    console.log('Data base ONLINE');
});

// Listen port for the server
app.listen(process.env.PORT, ()=> console.log(`Escuchando por el puerto ${process.env.PORT}`));

// Handling error
app.use((err, req, res, next) => {
    res.status(400).json({
        err: err.message,
    })
});