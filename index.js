const express = require('express')
const app = express()
app.use(express.json())
const movies = require('./data.json')


//GET
app.get('/', (req, res) => {
    res.send('<h1>This is the Vidly App</h1>')
})

app.get('/api/movies', (req, res) => {
    res.send(movies)
})

app.get('/api/movies/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id))
    if (!movie) return res.status(404).send('<h1>Id not found</h1>')
    res.send(movie)
})


//POST



//PUT


//DELETE


//PORT
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening at port ${port}`))