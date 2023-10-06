const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let redeableStream = fs.createReadStream(__dirname + '/input.txt');

redeableStream.setEncoding('UTF8');

// redeableStream.on('data', function(chunk){
//     console.log(chunk);
// })

// redeableStream.on('end', function(){
//     console.log(data);
// });

// process.stdout.write('hola'); 
// process.stdout.write('que');
// process.stdout.write('tal');

const Transform = stream.Transform; 

function Mayus() {
    Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

let mayus = new Mayus ();

redeableStream
    .pipe(mayus)
    .pipe(process.stdout); 