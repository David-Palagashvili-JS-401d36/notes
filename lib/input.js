'use strict';
// Line 23: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// Line 29: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null

// Using minimist to read command line arguments.
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
let action = (Object.keys(args).slice(1));
let payload = (Object.values(args).slice(1));

console.log(args.category);
//Applied ES6 Classes
class Input {
    constructor() {
        this.command = action[0].toString();
        this.payload = payload[0]; //extracts payload for each instance.
        this.category = args.category;
    };

    validate() {
        let validAction = false;
        let stringVal = false;

        let actions = [
            'add', 'a',
            'list', 'l',
            'delete', 'd'
        ];
        if(actions.includes(this.command)) validAction = true;
        
        let badVal = '';
        if(this.payload != badVal) stringVal = true;
        return validAction && stringVal;
    };
};

//Export the constructor function.
module.exports = Input;