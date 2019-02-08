const {io} = require('../server');

// Para saber que cliente se esta conectado.
io.on('connection',(client)=>{
    
    console.log('Usuario Conectado');
    
    //emit: for send information but per to per.
    client.emit('enviarMensaje',{
        user: 'Admin',
        message: 'Welcome to this App :D'
    })

    // on: for listen client
    // Para que el server sepa que un cliente se fue.
    client.on('disconnect',()=>{
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje',(data,callback)=>{
        console.log(data);
        client.broadcast.emit('enviarMensaje',data);
        
        
        // Para de retroalimentación a mi cliente.
        /* if(message.usuario){
            callback({
                resp: 'Todo salió bien'
            });
        }else{
            callback({
                resp: 'Todo salió mal'
            })
        } */
        
    });

});