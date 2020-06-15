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
        this.payload = getPayload(payload); //extracts payload each instance.
        let category = Object.values(args)[2];
        this.category = getCategory(category); //extracts category each instance.
    };
    // the action to perform
    getAction(command = '') {
        command = command.toLowerCase();
        let actions = { //available user actions set as KVPs.
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
    //get the payload for the action.
    getPayload(payload) {
        typeof payload != 'string' ? payload = null : payload;
    };
    //get the category from constructor.
    getCategory(category) {
        typeof category != 'string' ? category = null : category;
    };
};

//Export the constructor function.
module.exports = Input;