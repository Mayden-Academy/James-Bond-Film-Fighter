const express = require('express')
const path = require('path')

const app = express()
const port = 3001

app.get('/films/random', function(req, res) {

    res.setHeader("Content-Type", "application/json")
    res.send(JSON.stringify([
        {
            "name": "fdf",
            "image": "ss",
            "date": "dd"
        },
        {
            "name": "dfda",
            "image": "sss",
            "date": "ddd"
        }
    ]))
}
)

app.use(express.static(path.join(__dirname + '/../public')))


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/index.html'))
})

app.listen(port, () => console.log('You are running'))