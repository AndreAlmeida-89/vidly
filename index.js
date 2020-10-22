const express = require('express')
const app = express()
const movies = require('./data.json')

//GET
app.get('/', (req, res) => {
    res.send(movies)
})

//POST

//PUT

//DELETE


//PORT
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening at port ${port}`))