const chalk = require('chalk')
const getNotes = require('./notes.js')

console.log(getNotes())

const inverse = chalk.red.inverse

console.log(inverse('hello'))

