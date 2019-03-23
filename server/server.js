const express = require('express');
const app = express();

const parser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(parser.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
    .then((client) =>{
        const db = client.db('marvel');
        const marvelCharacters = db.collection("characters");
        const charactersRouter = createRouter(marvelCharacters);
        app.use("/api/characters", charactersRouter);
    })
.catch(console.err);

app.listen(3000, function (){
    console.log(`listening on port ${this.address().port}`);
})
