const fs = require('fs');
const path = require('path');

function createNewNote(newNote, notes) {
    const note = newNote;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
    return note;
};

deleteNote = (delID, notes) => {
    const delIndex = notes.findIndex((elem) => { elem.id === delID});
    if(delIndex){
        const deletedEl = notes.splice(delIndex, 1);
        fs.writeFileSync(
            path.join(__dirname, '../../db/db.json'),
            JSON.stringify(notes, null, 2)
        );
        return deletedEl;
    } else {
        return null;
    }
}

module.exports = {
    createNewNote,
    deleteNote
};