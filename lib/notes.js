'use strict';

//mongo db request
const Request = require('.model/notes-schema.js');

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
            case 'd':
                this.delete();
                break;
            case 'l':
                this.list();
                break;
            default:
              console.log('Houston! We have a problem!');
              break;
        };
    };

    add() {
        // let note = new Notes(this.action, this.payload, this.category, this.catName);
        // console.log(new Notes('add', 'testing'));
        
        // mongoose event initilization
        const newNote = new Request({ note: this.payload, category: this.category });
        newNote.save()
        .then(results => console.log(`Adding note: + ${this.payload}`))
        return;
    };
    delete() {
        console.log('deleting note')
        // runs the delete on the id (this.payload)
        Request.findByIdAndDelete({_id: this.payload})
          .then(results => console.log(`Successfully deleted: ${this.payload}`))
          .catch(error => console.log(error));
    };
    list() {
        let findByCat = {};
        if (this.category) {
            findByCat = {category: this.category};
        } Request.find(findByCat).then(results => {
            console.log(`
            ${result.note}
            category: ${results.category}
            ID: ${result._id}
            `)
        }).catch(error => console.log(error));
    };
};

// export the constructor
module.exports = Note;