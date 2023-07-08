const app = require('express').Router();
const path = require('path');
var fs = require('fs');


app.get("/", (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        res.send(data);
    })
});

module.exports = app;