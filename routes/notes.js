const router = require('express').Router();
var fs = require('fs');
var uuid = require('../helpers/uuid');

router.get("/", (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

router.post("/", (req, res) => {
    console.log(req.body);

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        var notes = JSON.parse(data);
        var newNote = { title: req.body.title, text: req.body.text, id: uuid()};
        notes.push(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
            if (err) {
                console.error(err);
              };
            res.json('post added')
        });
    });
});

router.delete('/:id', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        var notes = JSON.parse(data);
        var newNotes = notes.filter(note => note.id !==req.params.id)
        fs.writeFile('./db/db.json', JSON.stringify(newNotes), (err) => {
            if (err) {
                console.error(err);
              };
              res.json('post deleted')
        });
    });
});

module.exports = router;