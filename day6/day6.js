const fs = require('fs');
const _ = require('lodash');
const input = fs.readFileSync('day6.txt').toString();



for(let i = 0; i < input.length; i++) {
    if(i < 4) continue;
    let sequence = _.slice(input.split(""), i-4, i);

    console.log(sequence,_.uniq(sequence))
    if(_.uniq(sequence).length === 4){
        console.log(i);
        break;
    }
}

