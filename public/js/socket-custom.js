        //obj para comunicación con server
        var socket = io();

        //conectado con server
        //los on son para escuchar sucesos
        socket.on('connect', function() {
            console.log('Conectado al servidor');
        });

        socket.on('disconnect', function() {
            console.log('Perdimos conexión con servidor!!');
        });

        //los emit son para enviar información
        socket.emit('enviarMensaje', {
            usuario: 'Danilo',
            mensaje: 'Hola mundo'
        }, function(resp) {
            console.log('respuesta server:', resp);
        });

        //escuhar información

        socket.on('enviarMensaje', function(mensaje) {
            console.log('Servidor: ', mensaje);

        });