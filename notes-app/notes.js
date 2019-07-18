const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
  const notes = loadNotes()
  // const duplicateNotes = notes.filter((note) => title === note.title) // loop semua isi array, klo ud ketemu akan lanjut loop
  const duplicateNote = notes.find((note) => note.title === title)

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
  
    saveNotes(notes)
    console.log(`${chalk.green.inverse('New note added!')}`)
  } else {
    console.log(`${chalk.red.inverse('Note title taken!')}`)
  }
}

const readNote = (title) => {
  const notes = loadNotes();

  if (notes.length > 0) {
    const searchedNote =  notes.find((note) => note.title === title)
    
    if (searchedNote) {
      console.log(`${chalk.green.inverse(searchedNote.title)}`)
      console.log(`${searchedNote.body}`)
    } else {
      console.log(`${chalk.red.inverse('Node Not Found!')}`)
    }
  } else {
    console.log(`${chalk.red.inverse('No Note Found!')}`)
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => note.title !== title)

  if (notes.length !== notesToKeep.length) { // kalo ga ad yang kena filter
    saveNotes(notesToKeep)
    console.log(`${chalk.green.inverse('Note Removed!')}`)
  } else {
    console.log(`${chalk.red.inverse('No Note Found!')}`)
  }
}

const ListNotes = () => {
  const notes = loadNotes()
  if (notes.length > 0) {
    console.log(`${chalk.green.inverse('Your Notes:')}`)
    notes.forEach((note) => {
      console.log(`${chalk.green(note.title)}`)
    })
  } else {
    console.log(`${chalk.red.inverse('No Note Found!')}`)
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

module.exports = {
  addNote: addNote,
  readNote: readNote,
  removeNote: removeNote,
  ListNotes: ListNotes
}