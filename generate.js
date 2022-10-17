const generateTheme = require('./base.js')
const fs = require('fs')


let palette = {
	background: '#151522',
	white: '#ffffff',
	keywords: "#0596d4",
	functions: "#7377e8",
	numbers: "#ff7657",
	strings: "#f2d57e",
	comments: '#616a6a',
	punctuation: "#999999"
}

let result = generateTheme(palette)
let inJson = JSON.stringify(result);

fs.writeFileSync('./themes/offscreen-canvas-black-color-theme.json', inJson)

