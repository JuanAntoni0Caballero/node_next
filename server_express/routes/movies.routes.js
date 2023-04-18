const router = require('express').Router()
const axios = require('axios')

const ApiService = require('../services/movies.service')
const moviesApi = new ApiService()




router.get('/movies', (req, res, next) => {
    res.json('Estas son todas las pelis')
})

module.exports = router