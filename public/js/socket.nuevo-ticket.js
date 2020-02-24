//Comando para establecer la conexion
var socket = io();
var label = $("#lblNuevoTicket")
socket.on('connect', function() {
    console.log('conectado al sevidor');
});
//Escuchar
socket.on('disconnect', () => {
    console.log('Coneccion a sevidor perdida');
});

$('button').on('click', () => {
    //Enviar informacion
    socket.emit('siguienteTicket', null, (res) => {
        label.text('Cargando...'); 
        setTimeout( () => { 
           label.text(res.msg);
        }, 500);
    })
})

socket.on('estadoActual', (res) => {
    // console.log(res);
    //label.text('Cargando...');
    setTimeout( () => { 
        label.text(res.msg);
    }, 500);
    
});

function newFunction() {
    return 1000;
}
