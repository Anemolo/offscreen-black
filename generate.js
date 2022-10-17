const base = require('./base.js')
const fs = require('fs')


let theme = {
	background: '#ff0000',
	white: '#eeffff',
	keywords: "#0596d4",
	functions: "#7377e8",
	numbers: "#ff7657",
	strings: "#f2d57e",
	comments: '#616a6a'
}

let result = base(theme)

let inJson = JSON.stringify(result);

console.log(inJson)

fs.writeFileSync('result.json', inJson)

