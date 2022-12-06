const fs = require('fs');
const _ = require('lodash');
const input = fs.readFileSync('day6.txt').toString();



for(let i = 0; i < input.length; i++) {
    if(i < 14) continue;
    let sequence = _.slice(input.split(""), i-14, i);

    if(_.uniq(sequence).length === 14){
        console.log(i);
        break;
    }
}

