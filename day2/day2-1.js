const fs = require('fs');

const input = fs.readFileSync('day2.txt', 'utf8').split('\r\n');

const method = {
    X: 1,
    Y: 2,
    Z: 3
}

const lose = {
    A: "Z",
    B: "X",
    C: "Y"
}

const draw = {
    A: "X",
    B: "Y",
    C: "Z"
}

const win = {
    A: "Y",
    B: "Z",
    C: "X"
}


let score = 0;

for(let round of input){
    let [enemy, strategy] = round.split(' ');
    switch(strategy){
        case "X":
            score += method[lose[enemy]]
            break;
        case "Y":
            score += method[draw[enemy]]
            score += 3;
            break;
        case "Z":
            score += method[win[enemy]]
            score += 6;
            break;
    }
}

console.log(score);