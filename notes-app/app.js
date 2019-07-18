const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

const noteUtils = require('./notes')

// const msg = getNotes()

// console.log(msg)
// console.log(`${chalk.green('success')} ${chalk.red('to')} ${chalk.yellow('print')} ${chalk.magenta('Hello')} ${chalk.blueBright('World!')}`)

// console.log(process.argv)
yargs.version('1.1.0')

// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: "string",
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: "string",
    }
  },
  handler: (argv) => {
    noteUtils.addNote(argv.title, argv.body)
  }
})

// create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: "string"
    }
  },
  handler: (argv) => {
    noteUtils.removeNote(argv.title)
  }
})

// create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: () => {
    noteUtils.ListNotes()
  }
})

// create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: "string"
    }
  },
  handler: (argv) => {
    noteUtils.readNote(argv.title)
  }
})

yargs.parse()

// console.log(yargs.argv)
