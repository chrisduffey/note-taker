const router = require('express').Router();
const fs = require("fs");
const path = require('path');
const uuid = require('../../../UR-VIRT-FSF-PT-02-2024-U-LOLC/11-Express/01-Activities/17-Ins_POST-Fetch/helpers/uuid');

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