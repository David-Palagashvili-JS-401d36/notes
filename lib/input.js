'use strict';

//Using minimist to read command line arguments.
const minimist = require('minimist');

//TODO: Export a constructor function.

function Input() {
    const args = minimist(process.argv.slice(2));
    this.action = this.getAction(process.argv[2]);
    this.payload = process.argv[3];
};

//TODO: On instantiation, the app needs to evaluate and validate the input.
// Is the command (i.e. ‘–add’) a valid command?
// Is there data associated with the command?

Input.prototype.getAction = function(action) {
    let actions = ['--add', '-a', '--list', '-l', '--delete', '-d'];
    if (actions.includes(action.toLowerCase())) {
        return action.toLowerCase();
    } else {
        return false;
    }
};

//TODO: Return an instance containing the action to perform and the payload for the action.
