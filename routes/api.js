const router = require('express').Router();
const fs = require("fs");
const path = require('path');
const uuid = require('uuid');

router.get('/api/notes', async (req, res)=>{
    res.sendFile(path.join(__dirname, '../db/db.json'));
});


router.post('/api/notes', (req, res)=>{
    const db = JSON.parse (fs.readFileSync('db/db.json'));
    const newEntry = {
     // body for note
    title: req.body.title,
    text: req.body.text,
    id: uuid(),
    };
    db.push(newEntry);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);
    
});

router.delete('/api/notes/:id', (req, res)=> {
    let data = JSON.parse(fs.readFileSync('db/db.json', "utf-8"))
    
})

module.exports = router;

