// const process = require('process');

process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
})

process.on('exit', () => {
    console.log('Ale, el proceso se acabó');
})