function otraFuncion(){
    serompe();
}

function serompe() {
    return 3 + Z;
}

function seRompeAsincrona(cb) {
    setTimeout(function () {
        try{
            return 3 + z;
        }catch(err){
            console.error('Error en mi funcion asincrona');
            cb(err);
        }
    });
}

try {
    //serompe();
    seRompeAsincrona(function(){
        console.log('hay error');
    });
} catch(err) {
    console.error('Vaya eres idiota o que?');
    console.error(err.message);
    console.log('Pero no pasa nada, lo intentaremos');
}

console.log('final');