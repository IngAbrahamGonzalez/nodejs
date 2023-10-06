console.time('Todo');

let suma = 0;

console.time('bucle');
for (let i = 0 ; i < 1000000; i ++) {
    suma += 1;
}
console.timeEnd('bucle');

let suma1 = 0;

console.time('bucle 2');
for (let j = 0 ; j < 1000000; j ++) {
    suma += 1;
}
console.timeEnd('bucle 2');

console.time('asincrono');
asincrona()
    .then(()=> {
        console.timeEnd(asincrona)
    });

console.timeEnd('Todo');

console.log('Aqui empieza el proceso asincrono')
function asincrona () {
    return new Promise ((res) => {
        setTimeout(function(){
            console.log('Termina el proceso asicnrono');
            res();
        });
    });
}

