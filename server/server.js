const express = require('express');

const path = require('path');
const socketIO = require('socket.io')

const http = require('http');

const app = express();
let server = http.createServer(app); //configuracion para socket y express

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = esta es la comunicacion del backend exporto para usarla en socket.js
module.exports.io = socketIO(server)
require('./sockets/socket')



//se cambia app por server
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});