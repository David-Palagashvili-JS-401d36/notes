'use strict';

//Using minimist to read command line arguments.
const minimist = require('minimist');

// constructor for user input.
function Input() {
    const args = minimist(process.argv.slice(2));
    this.action = this.getAction(process.argv[2]);
    this.payload = this.getNote(process.argv[3]);
};

//TODO: On instantiation, the app needs to evaluate and validate the input.

// the action to perform
Input.prototype.getAction = function(action) {
    let actions = ['--add', '-a', '--list', '-l', '--delete', '-d'];
    if (actions.includes(action.toLowerCase())) {
        return action.toLowerCase();
    } else {
        return false;
    }
};

// the payload for the action
Input.prototype.getNote = function(note = '') {
    if (note != '') {
        return note.toUpperCase();
    } else {
        return 'Oh no, the mailman must have dropped your note!';
    }
};

//Export the constructor function.
module.exports = Input;