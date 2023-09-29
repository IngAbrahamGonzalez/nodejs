function hola(nombre) {
    return new Promise(function(resolve, reject)
    {
        setTimeout(function() {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1000);
    });
    
}

function hablar(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('Blah blah blah');
            resolve(nombre);
        }, 1000);
    });
    
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Adios, ' + nombre);
            resolve();
        }, 1000);
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

console.log('Iniciando el Proceso ...')
hola('Abraham')
    .then(hablar)
    .then(adios)
    .then((nombre)=> {
        console.log('Terminado el proceso ...');
    })
    .catch(error => {
        console.error('Ha Habido un error');
        console.error(error);
    })
