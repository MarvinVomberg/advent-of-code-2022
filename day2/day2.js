const fs = require('fs');

const input = fs.readFileSync('day2.txt', 'utf8').split('\r\n');

const method = {
    X: 1,
    Y: 2,
    Z: 3
}

const mapping = {
    A: "X",
    B: "Y",
    C: "Z"
}

const strategy = {
    A: "Y",
    B: "Z",
    C: "X"
}

let score = 0;

for(let round of input){
    let [enemy, me] = round.split(' ');
    score += method[me]
    if(strategy[enemy] === me){
        score += 6;
    }else if(mapping[enemy] === me){
        score += 3;
    }
}

console.log(score)