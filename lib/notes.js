const fs = require('fs');
const path = require('path');

function createNewNote(newNote, notes) {
    const note = newNote;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes}, null, 2)
    );
    return note;
};

module.exports = {
    createNewNote
};