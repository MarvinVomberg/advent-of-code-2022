const fs = require('fs');

const input = fs.readFileSync('day3.txt', 'utf8').split('\r\n');

let score = 0;
for (let line of input) {
    let a = line.slice(0, line.length / 2)
    let b = line.slice(line.length / 2, line.length)

    for (let char of a.split("")) {
        if (b.indexOf(char) !== -1) {
            if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
                score += char.charCodeAt(0) - 38
            }else{
                score += char.charCodeAt(0) - 58 - 38
            }
            break;
        }
    }
}
console.log(score)