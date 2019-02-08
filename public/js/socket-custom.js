var socket = io();
        // Para conectarme con el servidor
        socket.on('connect',function(){
            console.log('Conectado al servidor');
        });

        // Para cuando pierdo coneccion con el servidor.
        socket.on('disconnect',function(){
            console.log('Perdimos conexión con el servidor');
        })

        //Los emits son para enviar información
        socket.emit('enviarMensaje',{
            usuario: 'Jean Karlo',
            mensaje: 'Hola guambritos y guambritas'
        },function(resp){
            console.log('respuesta server: ',resp);
        });

        // Escucha mensaje
        socket.on('enviarMensaje',function(mensaje){
            console.log(mensaje);
        });

    