function hola(nombre, miCallback) {
        setTimeout(function() {
        console.log('Hola, ' + nombre);
        miCallback(nombre);
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(() => {
        console.log('Blah blah blah');
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log('Adios, ' + nombre);
        otroCallback();
    });
}

function conversacion(nombre, veces, callback){
    if (veces > 0){
        hablar(function () {
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);
    }
}

console.log('Iniciando proceso....');
    hola('Abraham', function(nombre){
        conversacion(nombre, 3, function(){
            console.log('Proceso terminado...');
        });
    })
        /*hablar(function(){
            adios(nombre, function() {
                console.log('Finalizando proceso...');
            });
        });*/
    
//});



