const fs = require('fs');

fs.writeFileSync('nuevo_archivo.txt', 'contenido del archivo', { encoding: 'utf8' });

console.log('El archivo ha sido creado y el contenido ha sido escrito.');
