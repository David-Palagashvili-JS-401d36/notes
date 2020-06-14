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

    // add(note) {
    //     if (note === null) {
    //         console.log('Please add some text to your note, then try again!')
    //         return null;
    //     };
    //     let note = {
    //         id: Math.floor(Math.random() * 1000) //randomly generated id (learned this trick in 201, thanks @NicholasCarginan)
    //     }
    // }

};
// export the constructor
module.exports = Note;