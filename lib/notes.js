'use strict';

// Constructor function for the resultant note object, with an ID and the note text as properties.

class Note {

    constructor(input) {
        this.action = input.action;
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
    
    list() {
    console.log('listing notes');

    // binary statement
    const value = this.category
        ? 'super special category'
        : 'general';

    Note.find(this.category ? { category: this.catName } : {})
        .then(results => console.log('All our notes', results))
        .catch(err => console.log('couldnt find anything'));
    }
    
    delete() {
    console.log('deleting note')
    // runs the delete on the id (this.payload)
    Note.findByIdAndDelete(this.payload)
        .then(() => console.log('deleted successfully ', this.payload))
        .catch(() => console.log('something went wrong'));
    }
};

// export the constructor
module.exports = Note;