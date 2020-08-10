const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 8083;
const app = express();
const Server = http.createServer(app);
const Routing = require('./rutas.js');
const eventRouting = require('./eventosRutas.js');



app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static('/client'));
app.use('/usuarios.js', Routing);
app.use('/eventos.js', eventRouting);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    return res.status(200).send('conectado');

})
Server.listen(PORT, function() {
    mongoose.connect('mongodb+srv://manuel:21415246@cluster0.gkzru.gcp.mongodb.net/test?retryWrites=true&w=majority', function(err) {
        if (err) console.log('Error connecting database', err);
        console.log('Database connected!');
    })
    console.log('Server is listening on port: ' + PORT);

})