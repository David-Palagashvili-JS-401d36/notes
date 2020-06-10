'use strict';

// Constructor function for the resultant note object, with an ID and the note text as properties.

function Note(args) {
    this.action = args.action;
    this.note = args.payload;
    this.id = Math.ceil(Math.random()*1000);
}

//TODO: Create a prototype method called execute() that executes the correct operation, given the above object (reference --> {action: "add", payload: "user's note"})
// Use that object to run the correct method; we can predict that "add" won’t be the only action we’re going to have to handle!

Note.prototype.execute = function(args) {
    let actions = ['--add', '-a', '--list', '-l', '--delete', '-d'];
    if (actions.includes(args.action.toLowercase())) {
        return new Note.add(args);
    } else {
        return 'Oh no, something went wrong with your note!';
    }
};

// This prototype method will create an object representing a note.
// Console.log the text of the note to be added when the add command is executed.

Note.prototype.add = function(args) {
    console.log(args.note);
};

// export the constructor
module.exports = Note;