var socket = io();

var searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')){
    window.location= 'index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
var label = $('small');


console.log(escritorio);

$('h1').text(`Escritorio ${escritorio}`);

$('button').on('click',()=>{
    socket.emit('atenderTicket', {escritorio},(res)=>{
        console.log(res);
        if(!res.ok)
            alert(res.msg);
        else
            label.text(` ${res.msg.numero}`)
    });
})