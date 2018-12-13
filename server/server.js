const express = require('express')
const path = require('path')
const mongoClient  = require('mongodb').MongoClient
const assert = require('assert')
const BondFilms = require('./getBondFilms')

const app = express()
const port = 3001

//connecting to NOSQL Mongo -> connection to the URL
const url = 'mongodb://localhost:27017'
//Database Name
const dbName = 'james_bond'
//instantiating new mongo client
const client = new mongoClient(url)

app.get('/films/random', function(req, res) {

    // res.setHeader("Content-Type", "application/json")
    // res.send(JSON.stringify([
    //     {
    //         "name": "fdf",
    //         "image": "ss",
    //         "date": "dd"
    //     },
    //     {
    //         "name": "dfda",
    //         "image": "sss",
    //         "date": "ddd"
    //     }
    // ]))
    client.connect((err, client) => {
        const db = client.db(dbName);
        test = BondFilms.getAllFilms(db)

        console.log(test)
        res.send('test')
        assert.equal(null, err)

        console.log("Connected successfully to server")

        //functions will go in here
        res.send(JSON.stringify(BondFilms.getAllFilms(db)))

        client.close()



    })



}
)

app.use(express.static(path.join(__dirname + '/../public')))


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/index.html'))
})

app.listen(port, () => console.log('You are running'))

