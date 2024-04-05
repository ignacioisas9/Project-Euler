// Using names.txt, a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. 
// Then working out the alphabetical value for each name, multiply this value by its alphabetical position 
// in the list to obtain a name score.
// For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, 
// is the 938th name in the list. 
// So, COLIN would obtain a score of 938 x 53 = 49714.
// What is the total of all the name scores in the file?

const fs = require('fs');

const filePath = 'names.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    let namesArray = data.split(',').map(name => name.trim());

    namesArray.sort()
    let sum = 0
    for (let i = 0; i < namesArray.length; i++) {
        score = getNameScore(namesArray[i])
        sum += score * (i + 1)  //score x position

    }
    console.log(sum)
    return sum
});

function getNameScore(str) {
    let value = 0
    for (let i = 0; i < str.length; i++) {
        value += str[i].charCodeAt(0) - 64
    }
    return value
}
