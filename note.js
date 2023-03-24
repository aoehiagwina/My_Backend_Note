const fs = require('fs')
const chalk = require('chalk');


const getNotes = (note) => {
    return note
}

// adding a data to a database 
const addNote = (title, body) => {
    const dataB = loadNote();
    // checking for duplicate titles
    const duplicate = dataB.filter((note)=> note.title === title)

    // using my search to determine if the new note should be added or is already added
    if (duplicate.length === 0) {
        dataB.push({
            title: title,
            body: body
        })

        saveDB(dataB)
        console.log(chalk.bgGreen('Note Added'));

    }
    else {
        console.log(chalk.bgRed('Notes Taken'))
    }
}

// saving data in database
const saveDB = (newDB) => {
    const newDBst = JSON.stringify(newDB);
    fs.writeFileSync('note.json', newDBst);
}

// removing from database
const removeNote = (title) => {
    const dataB = loadNote();
// This create a new array using filters based on the condition that 
// the titles does not match the one i intend rempving
    
    const newNote = dataB.filter((note) => note.title !== title);

    if (newNote.length < dataB.length) {
        saveDB(newNote);
        console.log(chalk.bgGreen('Notes Removed'))
    }
    else {
        console.log(chalk.bgRed('NO Notes Removed'))
    }

}

const listNodtes = () => {
    const dataB = loadNote();
    let num = 0;
    console.log(chalk.blue.bgWhite.bold('Your Note'))
    dataB.forEach(note => {
        num += 1
        console.log(chalk.red.bgWhite(num + ' ' + note.title));
    });
}

// collecting the database so we can work on it
const loadNote = () => {
    try {
        const data = fs.readFileSync('note.json');
        const dataSt = data.toString();
        return JSON.parse(dataSt);

    } catch (error) {
        return [];
    }
}




module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNodtes
};