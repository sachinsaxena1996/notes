const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
    return 'The very first note'
}

const addNotes = (title, body) => {
    const notes = loadNotes()

    // const duplicateNotes = notes.filter((note) => note.title === title)

    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green.inverse('Note saved sucessfuly'))
    } 
    else {
        console.log('Note title already taken')
    }
}

const saveNotes = function(notes){
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const removeNotes = (title) => {
    const notes = loadNotes()    
    const filteredNotes = notes.filter((note) => note.title != title)
    if (notes.length > filteredNotes.length){
        saveNotes(filteredNotes)
        console.log(chalk.blue.inverse('Removed the note with title: ' + title))
    } 
    else
    {
        console.log(chalk.red.inverse('No nodes found'))
    }    
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }
    catch(e){
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse("Your notes"))
    notes.forEach(note => console.log(note.title))
}

const readNote = (title) => {
    const notes = loadNotes()    
    const reqNote = notes.find((note) => note.title === title)
    // debugger
    if (reqNote) {
        console.log(reqNote)
    }
    else {
        console.log(chalk.red.inverse('Note not found'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}