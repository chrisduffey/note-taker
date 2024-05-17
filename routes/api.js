const router = require('express').Router();
const fs = require("fs");
const path = require('path');
const {v4: uuidv4} = require('uuid');

router.get('/notes', async (req, res)=>{
    let data = fs.readFileSync('db/db.json', "utf-8");
    res.json(JSON.parse(data));
});


router.post('/notes', (req, res)=>{
    const db = JSON.parse (fs.readFileSync('db/db.json'));
    const newEntry = {
     // body for note
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
    };
    db.push(newEntry);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);
    
});

router.delete('/notes/:id', (req, res)=> {
    let data = fs.readFileSync('db/db.json', "utf-8");
    const dataJSON = JSON.parse(data);
    const newNotes = dataJSON.filter((note) =>{
        return note.id !== req.params.id;
    });
    fs.writeFileSync("db/db.json", JSON.stringify(newNotes))
    res.json("Deleted Note!");
});

module.exports = router;

