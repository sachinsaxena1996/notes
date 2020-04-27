const notes  = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')
// const validator = require('validator')
// const sum = add(4,-2)

// const notes = getNotes()


// console.log(chalk.blue('Success!'));
// console.log(notes)
// console.log(validator.isEmail('sachin@gmail.com'))

// console.log(process.argv)
// console.log(yargs.argv)

yargs.command({
    command: 'add',
    describe: 'Adds a note',
    builder: {
        title: {
            describe: 'The Note Title',
            type: 'string',
            demandOption: true
        },
        body: {
            type: 'string',
            demandOption: true,
            describe: 'The title body'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title: {
            type: 'string',
            demandOption: true,
            describe: 'The title of the note to be deleted'
        }        
    },
    handler(argv) {
        // console.log('Removed a note!')
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            type: 'string',
            demandOption: true,
            describe: 'The title of the note to be readed'
        }        
    },  
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler() {
        notes.listNotes()
    }
})

yargs.parse()
// console.log(yargs.argv)
