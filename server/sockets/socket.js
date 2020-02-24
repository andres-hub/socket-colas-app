const { io } = require('../server');
const { TicketControl } = require('../classes/tickets-control')
const ticketControl = new TicketControl();

io.on('connection', (client) => {

    client.on('siguienteTicket', (data, callback) => {
        let siguiente = ticketControl.Siguiente()
        console.log(siguiente);
        callback(siguiente)
    });
    //emitir un nuevo 'estadoActual'
    //let estadoActual = ticketControl.gatUltimoTicket()
    client.emit('estadoActual',{
        actual: ticketControl.gatUltimoTicket(),
        ultimos4: ticketControl.getUltimos4()
    });
    client.on('atenderTicket',(data,callback)=>{
        if(!data.escritorio){
            return callback({
                err:true,
                mensaje:'El escritorio es necesario'
            })
        }
        let atenderTicket = ticketControl.atenderTicket(data.escritorio);
        callback(atenderTicket);

        // actualizar 
        client.broadcast.emit('ultmios4', {
           ultimos4: ticketControl.getUltimos4()
        })
    })
});