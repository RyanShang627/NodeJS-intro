const chalk = require('chalk');
const yargs = require('yargs');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: () => {
    console.log('Adding a new note!');
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note!',
  handler: () => {
    console.log('Removing the note!');
  },
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note!',
  handler: () => {
    console.log('Reading a note!');
  },
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List a note',
  handler: () => {
    console.log('List the notes!');
  },
});

// add, remove, read, list

// console.log(process.argv);
console.log(yargs.argv);
