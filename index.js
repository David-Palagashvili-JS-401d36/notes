'use strict';

//Line 42: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

// Require the environment configs.
require('dotenv').config();

//Invoke mongoose here
const mongoose = require('mongoose');

//Connect the database to our app
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const mongoDB = mongoose.connection; //default connection of mongoose module
mongoDB.on('start', () => {
    console.log('mongoDB is now connected');
});

//Node Modules
const Input = require('./lib/input');
const Note = require('./lib/notes');

// function fetch(parsed) {
//     if (parsed.command === false) {
//         console.log('Something went wrong with your action, try again!')
//     } else {
//         console.log(`Successfully added note: ${parsed.command}`);
//     }
// };
// fetch(parsed);

// let userNote = new Note(parsed);
// console.log(userNote);

// this is a block of statements to "try" and their responses, in case an exception is thrown.
try {
    const parsed = new Input();
    const userNote = new Note(parsed);
    userNote.execute();
} catch(error) {
    console.log(error);
};