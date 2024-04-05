// Using names.txt, a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. 
// Then working out the alphabetical value for each name, multiply this value by its alphabetical position 
// in the list to obtain a name score.
// For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, 
// is the 938th name in the list. 
// So, COLIN would obtain a score of 938 x 53 = 49714.
// What is the total of all the name scores in the file?

// Importa el módulo fs
const fs = require('fs');

// Ruta del archivo names.txt
const filePath = 'names.txt';

// Lee el contenido del archivo names.txt
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    // Procesa el contenido del archivo
    let namesArray = data.split(',').map(name => name.trim());

    // Ahora puedes usar namesArray en tu código
    namesArray.sort()
    console.log(namesArray)
});
