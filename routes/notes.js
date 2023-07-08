const router = require('express').Router();
var fs = require('fs');


router.get("/", (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

router.post("/", (req, res) => {
    console.log(req.body);

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        var notes = JSON.parse(data);
        var newNote = req.body;
        notes.push(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
            if (err) {
                console.error(err);
              };
        });
    });
});

module.exports = router;