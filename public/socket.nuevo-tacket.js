//Comando para establecer la conexion
var socket = io();
socket.on('connect', function() {
    console.log('conectado al sevidor');
});

//Escuchar
socket.on('disconnect', () => {
    console.log('Coneccion a servidor perdida');
})