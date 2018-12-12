const express = require('express')

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

app.listen(port, () => console.log('You are running'))