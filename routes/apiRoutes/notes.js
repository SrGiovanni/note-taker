const router = require('express').Router();
const notes = require('../../db/db');
//const {createNewNote} = require('../../lib/notes');

const fs = require('fs');
const path = require('path');

//get all notes
router.get('/notes', (req, res) => {
    let result = notes;
    res.json(notes);
});

//set a note
router.post('/notes', (req, res) => {
    req.body.id = (parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(16).toString().replace(".", "")).toString());
    //notes.length.toString();
    const note = req.body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
    res.json(note);
});

//BONUS
//Delete a note by ID
router.delete('/notes/:id', (req, res) =>{
    /** */
    const delIndex = notes.findIndex((elem) => { elem.id === req.params.id});
    if(delIndex){
        const deletedEl = notes.splice(delIndex, 1);
        fs.writeFileSync(
            path.join(__dirname, '../../db/db.json'),
            JSON.stringify(notes, null, 2)
        );
        res.json(deletedEl);
    }else {
        res.status(501).send("Poorly implemented");
    }
});

module.exports = router;