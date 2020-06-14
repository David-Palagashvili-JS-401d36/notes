'use strict';

// Line 23: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// Line 29: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
// Using minimist to read command line arguments.
const minimist = require('minimist');

//Applied ES6 Classes
class Input {

    constructor() {
        const args = minimist(process.argv.slice(2));
        const action = Object.keys(args)[1]; //allows to assign for each instance.
        this.command = this.getAction(action);
        let payload = Object.values(args)[1];
        if (payload === true){payload = null};
        this.payload = payload; //payload for the action.
    };
    // the action to perform
    getAction(command = '') {
        command = command.toLowerCase();
        let actions = { //each action is set as a
            add: '--add',
            list: '--list',
            delete: '--delete',
        };
        for (const key in actions) { //only iterates over enumerable, non-Symbol properties. in this case, my keys!
            if (command === key){
                command = actions[key];
                return command;
            };
        };
        return null; //intentional absence of any object value, and is treated as falsy.
    };
};

//Export the constructor function.
module.exports = Input;