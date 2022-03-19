const router = require('express').Router();
const {notes} = require('../../db/db.json');

//get all notes
router.get('/notes', (req, res) => {
    let result = notes;
    res.json(result);
});

//set a note
router.post('/notes', (req, res) => {});

//BONUS
//Delete a note by ID
router.delete('/notes/:id', (req, res) =>{
    res.status(501).send("Not implemented");
});

module.exports = router;