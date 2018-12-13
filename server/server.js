const express = require('express')
const path = require('path')
const mongoClient  = require('mongodb').MongoClient
const assert = require('assert')
const BondFilms = require('./getBondFilms')
const bodyParser = require('body-parser')
const scorer = require('./scorer')

const jsonParser = bodyParser.json()
const app = express()
const port = 3001

//connecting to NOSQL Mongo -> connection to the URL
const url = 'mongodb://localhost:27017'
//Database Name
const dbName = 'james_bond'
//instantiating new mongo client
const client = new mongoClient(url, { useNewUrlParser: true })

app.get('/films/random', function(req, res) {

    res.setHeader("Content-Type", "application/json")

    client.connect((err, client) => {
        const db = client.db(dbName)
        const collection = db.collection('films')
        response = BondFilms.getAllFilms(collection)

        response.then(function (data) {
            res.send(data)
        })
    })
}
)

app.post('/films', jsonParser, function (req, res) {
    client.connect((err, client) => {
        const db = client.db(dbName)
        scorer.updateScores(db, req.body)
    })

    res.send("You are working ha")
})



app.use(express.static(path.join(__dirname + '/../public')))


app.get('/',  function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/index.html'))
})

app.listen(port, () => console.log('You are running'))

