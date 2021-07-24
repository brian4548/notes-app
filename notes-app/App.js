const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

yargs.version('1.1.0')


// add notes, removes notes, read notes



//add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    handler: function () {
        console.log('adding a new note')
    }
})

// remove command
yargs.command({
    command: 'remove',
    describe: 'removes a note',
    handler: function () {
        console.log('removes note')
    }
})

// list command
yargs.command({
    command: 'list',
    describe: 'lists the notes',
    handler: function () {
        console.log('listing notes')
    }
})

// read command
yargs.command({
    command: 'read',
    describe: 'reads notes',
    handler: function () {
        console.log('reading notes')
    }
})





console.log(yargs.argv)
// const command = process.argv[2]
// console.log(process.argv)

// if (command === 'add') {
//     console.log('adding notes')

// } else if (command === 'remove') {
//     console.log('remove note')
// }