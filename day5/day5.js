const fs = require('fs');
let [stacksString, commands] = fs.readFileSync('day5.txt').toString().split('\n\n');
stacksString = stacksString.split("\n")
stacksString.pop()
stacksString = stacksString.reverse()
commands = commands.trim().split("\n").map(x => x.split(" "))

let stacks = {};
for (let line of stacksString) {

    let lineChests = [...line].filter((value, index) => index % 4 === 1);
    // loop through lineChests with value and key
    for (let [key, value] of lineChests.entries()) {
        if (value === ' ') continue;
        if (typeof stacks[key + 1] === 'undefined') {
            stacks[parseInt(key) + 1] = [];
        }

        stacks[parseInt(key) + 1].push(value);
    }
}

for (let command of commands) {
    let quantitiy = command[1];
    let fromStack = parseInt(command[3]);
    let toStack = parseInt(command[5]);


    // get top quantity elements of stacks with index fromStack
    let topElements = stacks[fromStack].splice(stacks[fromStack].length - quantitiy, quantitiy).reverse();
    stacks[toStack] = stacks[toStack].concat(topElements);
}

for(let stack of Object.values(stacks)){
    console.log(stack.pop())
}



