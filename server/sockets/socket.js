const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a la app'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });


    //escuchar el cliente (evento)
    client.on('enviarMensaje', (data) => {
        console.log(data);

        //client.emit('enviarMensaje', data); //con emit solo responde a un cliente
        client.broadcast.emit('enviarMensaje', data); //envia mensaje a todos los clientes


        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salió bien'
        //     });

        // } else {
        //     callback({
        //         resp: 'Todo salió mal'
        //     });
        // }


    });
});