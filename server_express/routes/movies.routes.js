const router = require('express').Router()
const axios = require('axios')
const Movie = require('../models/Movie.model')


const Api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})


router.get('api/search/:movieTitle', (req, res, next) => {

    const { movieTitle } = req.params

    Api.get(`search/movie?api_key=${process.env.TMDB_API_KEY}query=${movieTitle}`)

        .then(({ Data }) => {
            res.send(data)
        })
        .catch(err => next(err))
})


router.get('/movies', (req, res, next) => {
    res.json('Estas son todas las pelis')
})

module.exports = router