'use strict';

//mongo db request
const Request =

// Constructor function for the resultant note object, with an ID and the note text as properties.

class Note {

    constructor(input) {
        this.action = input.action;
        this.payload = input.payload;
        this.category = input.category;
        this.id = Math.floor(Math.random() * 1000) //placeholder ID
    };

    execute() {
        switch (this.action) {
            case 'a':
              this.add();
              break;
            case 'l':
              this.list();
              break;
            case 'd':
              this.delete();
              break;
            default:
              console.log('Houston! We have a problem!');
              break;
        }
    }

    add() {
        if (this.note !== null) {
            const newAdd = 
        };
        let note = {
            id: Math.floor(Math.random() * 1000) 
        }
    }

};
// export the constructor
module.exports = Note;