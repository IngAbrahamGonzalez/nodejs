let nombre = process.env.NOMBRE || 'Sin Nombre';
let mail = process.env.MAIL;

console.log('Hola ' + nombre); 
console.log('Mi correo es: ' + mail);