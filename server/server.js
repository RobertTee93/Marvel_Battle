const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const cors = require('cors');

const CONNECTION_URL = "mongodb+srv://Roberttee1993:Okay1324@cluster0-sbd6z.mongodb.net/marvel?retryWrites=true"
const DATABASE_NAME = "marvel"

var app = Express();

app.use(cors())
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var database, connection;


app.listen(3000, () => {
  MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("characters");
        console.log("Connected to `" + DATABASE_NAME + "`!");
      });
});

app.get("/characters", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});
