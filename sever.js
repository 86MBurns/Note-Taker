const express = require("express");
const fs = require("fs");
const { dirname } = require("path");
const path = require("path");
const database = require("./db/db");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res){
    res.sendFile(path.join(__dirname, "/public/index.html"));
})

app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "/public/notes.html"));
})

app.route("/api/notes")
    .get(function(req, res){
        res.json(database);
    })

    .post(function(req, res){
        let jsonPath = path.join(__dirname, "/db/db.json");
        let newNote = req.body;

        
        fs.writeFile(jsonPath, JSON.stringify(database),function (err){
            if (err){
                return console.log(err);
            }
            console.log("saved note");
        })
        res.json(newNote);
    })
