const router = require('express').Router();
const {notes} = require('../../db/db');
const {createNewNote} = require('../../lib/notes');

//get all notes
router.get('/notes', (req, res) => {
    console.log('request for notes')
    let result = notes;
    res.json(notes);
});

//set a note
router.post('/notes', (req, res) => {
    const note = createNewNote(req.body, notes);
    res.json(note);
});

//BONUS
//Delete a note by ID
router.delete('/notes/:id', (req, res) =>{
    res.status(501).send("Not implemented");
});

module.exports = router;