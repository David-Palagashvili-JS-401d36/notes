'use strict';

// Line 23: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// Line 29: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
// Using minimist to read command line arguments.
const minimist = require('minimist');

//Applied ES6 Classes
class Input {

    constructor() {
        const args = minimist(process.argv.slice(2));
        const action = Object.keys(args[1]);
        this.action = this.getAction(action);
        let payload = Object.values(args[3]);
        if (payload === true){payload = null};
        this.payload = payload;
    };
    // the action to perform
    getAction(command = '') {
        command = action.toLowerCase();
        let actions = ['--add', '-a', '--list', '-l', '--delete', '-d'];
        for (const key in actions) { //only iterates over enumerable, non-Symbol properties. in this case, my keys!
            if (action === key){
                action = actions[key];
                return action;
            }
        }
        return null; //intentional absence of any object value, and is treated as falsy.
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