const fs = require("fs")

// read file line by line
const lines = fs.readFileSync("day1.txt", "utf8").split("\r\n")

let results = []

let x = 0;
let tempSum = 0;
for(let line of lines) {
    if(line === '') {
        results[x] = tempSum;
        tempSum = 0;
        x++;
        continue
    }

    tempSum += parseInt(line)
}

let doubleResults = results.sort((a,b) => a - b)

let first = results[results.indexOf(doubleResults[doubleResults.length - 1])]
let second = results[results.indexOf(doubleResults[doubleResults.length - 2])]
let third = results[results.indexOf(doubleResults[doubleResults.length - 3])]

console.log(first + second + third)
