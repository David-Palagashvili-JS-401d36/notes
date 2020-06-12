'use strict';

//Using minimist to read command line arguments.
const minimist = require('minimist');

// Applied ES6 Classes
class Input {

    constructor() {
        const args = minimist(process.argv.slice(2));
        this.action = this.getAction(process.argv[2]);
        this.payload = this.getNote(process.argv[3]);
    }
    // the action to perform
    getAction(action) {
        let actions = ['--add', '-a', '--list', '-l', '--delete', '-d'];
        if (actions.includes(action.toLowerCase())) {
            return action.toLowerCase();
        } else {
            return false;
        }
    };
    // the payload for the action
    getNote(note = '') {
        if (note != '') {
            return note.toUpperCase();
        } else {
            return 'Oh no, the mailman must have dropped your note!';
        }
    };
};
//Export the constructor function.
module.exports = Input;