// const process = require('process');

process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
})

process.on('exit', () => {
    console.log('Ale, el proceso se acabó');
})

process.on('uncaughException', (err, origen)=> {
    console.log('Vaya la habeis cagado');
    console.error(err);
});