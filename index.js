'use strict';

// Require the library files we will be writing.
const Input = require('./lib/input');
const Note = require('./lib/notes');

// Instantiate an instance of the “Input” parser module.
const parsed = new Input();


//TODO: Pass the command to the Notes library, which executes the command.
function fetch(parsed) {
    if (parsed.command === false) {
        console.log('Something went wrong with your action, try again!')
    } else {
        console.log(`Successfully added note: ${parsed.command}`);
    }
};
fetch(parsed);

let userNote = new Note(parsed);
console.log(userNote);