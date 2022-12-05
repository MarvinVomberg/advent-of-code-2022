const fs = require('fs');

const input = fs.readFileSync('day3.txt', 'utf8').split('\r\n');

let score = 0;
for (let i = 0; i < input.length; i+=3) {
    let first = input[i]
    let second = input[i + 1]
    let third = input[i + 2]

    for (let char of first.split("")) {
        if (second.indexOf(char) !== -1 && third.indexOf(char) !== -1) {
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