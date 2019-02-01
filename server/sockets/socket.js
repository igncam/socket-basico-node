const { io } = require('../server')

io.on('connection', (client) => {

    console.log('Usuario conectado');

    // emitir al cliente

    client.emit('EnviarMensaje', {
        usuario: 'administrador',
        mensaje: 'Bienvenido a esta app socket'
    })

    client.on('disconnect', () => {

        console.log('Usuario desconectado');

    })

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('EnviarMensaje', data)


        // callback para verificar
        // if (mensaje.usuario) {

        //     callback({
        //         respuesta: 'todo salio bien'
        //     });
        // } else {
        //     callback({
        //         repuesta: 'MALLLLL!!!'
        //     })
        // }



    })


})