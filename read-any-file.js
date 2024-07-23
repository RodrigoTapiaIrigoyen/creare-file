const fs = require('fs');

fs.readdirSync('.').forEach(file => {
    if (fs.lstatSync(file).isFile()) {
        console.log(`Contenido de ${file}:`);
        console.log(fs.readFileSync(file, 'utf8'));
    }
});