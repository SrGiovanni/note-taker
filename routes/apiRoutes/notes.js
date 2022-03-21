const router = require('express').Router();
const notes = require('../../db/db');
//const {createNewNote} = require('../../lib/notes');

const fs = require('fs');
const path = require('path');

//get all notes
router.get('/notes', (req, res) => {
    console.log('request for notes')
    let result = notes;
    res.json(notes);
});

//set a note
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = req.body;
    console.log(note)
    notes.push(note);
    console.log(notes)
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
    res.json(note);
});

//BONUS
//Delete a note by ID
router.delete('/notes/:id', (req, res) =>{
    res.status(501).send("Not implemented");
});

module.exports = router;