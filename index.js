const Joi = require('joi')
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
app.post('/api/movies', (req, res) => {
    const {error} = validateMovie(req.body)
    if (error) return res.send(error.details[0].message)
    const movie = req.body
    movie.id = movies.length + 1
    res.send(movie)
})


//PUT


//DELETE


//VALIDATE
const validateMovie = (movie) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(3)
            .max(30)
            .required(),

        year: Joi.number()
            .integer()
            .min(1900)
            .max(new Date().getFullYear())
            .required(),

        genre: Joi.string()
            .min(3)
            .max(10)
            .required()
    })
    return {error, value} = schema.validate(movie)
}

//PORT
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening at port ${port}`))