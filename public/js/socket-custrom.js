var socket = io();

socket.on('connect', function() {
        console.log('conectado al servidor');
    })
    // Escuchar informacion
socket.on('disconnect', function() {
    console.log('Perdimos coneccion con el servidor');
})
socket.on('EnviarMensaje', function(mensaje) {
    console.log('servidor:', mensaje);
})


// Enviar informacion mando la 3 opc para ver si salio bien o mal con un callback
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server:', resp);
})