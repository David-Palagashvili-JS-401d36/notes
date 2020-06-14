'use strict';

// Constructor function for the resultant note object, with an ID and the note text as properties.

class Note {

    constructor(input) {
        this.command = input.action;
        this.note = input.payload;
        this.category = input.category;
    };

    execute() {
        switch (this.action) {
            case 'add':
            case 'a':
              this.add();
              break;
            case 'list':
            case 'l':
              this.list();
              break;
            case 'delete':
            case 'd':
              this.delete();
              break;
            default:
              console.log('Houston! We have a problem!');
              break;
        }
    }

    add() {
        console.log('Adding note: ' + this.payload);
        // initilizing
        const newNote = new Note({ note: this.payload, category: this.catName });
    
        newNote.save()
            .then(results => console.log('saving: ', results))
            .catch(err => console.log('ERROR'));
    }

};
// export the constructor
module.exports = Note;