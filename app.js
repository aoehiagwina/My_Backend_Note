//const chalk =  require('chalk');
const {getNotes, addNote, removeNote, listNodtes, readNote} = require('./note.js');
const yargs = require('yargs');

yargs.command({
    command: 'add',
    describe: 'add content together',
    builder: {
        title: {
            describe: 'This is the titler',
            demandOption: true,
            type: 'string'
        },

        body: {
            describe: 'This is the body option',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        addNote(argv.title, argv.body);
        
        
        
        //console.log(`Title: ${argv.title}, Body: ${argv.body}`);
    }
})


yargs.command({
    command: 'remove',
    describe: 'Remove content from note',
    builder: {
        title: {
            describe: 'This is the title of each note',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        removeNote(argv.title)
        
        //console.log('Remove from note')
    }
})

yargs.command({
    command: 'list',
    describe: 'list item',
    handler () {
        listNodtes()

        //console.log('list items in note')
    }
})


yargs.command({
    command: 'read',
    describe: 'Read items from note',
    builder: {
        title: {
            describe: 'This is the titler',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        readNote(argv.title)

        
        console.log('Read from note')
    }
})


yargs.parse()

// const fs = require('fs');

// //fs.writeFileSync('note.txt', 'This me praticing Node.js')

// fs.appendFileSync('note.txt', ' Here i appended a message. It is my first task on this new course')



// const myMessage = getNotes('God is Great')

// console.log(chalk.green.bold(myMessage));


