const fs = require('fs');
const outputFile = 'output.txt';
fs.writeFileSync(outputFile, ''); // Limpia el archivo de salida

fs.readdirSync('.').forEach(file => {
    if (fs.lstatSync(file).isFile() && file !== outputFile) {
        fs.appendFileSync(outputFile, fs.readFileSync(file, 'utf8') + '\n');
    }
});

console.log(`Contenido añadido `);