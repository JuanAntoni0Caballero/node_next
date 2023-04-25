const router = require('express').Router()

const ApiService = require('../services/movies.service')
const moviesApi = new ApiService()



router.get('/list', (req, res, next) => {

    moviesApi
        .getFilterMovies()
        .then(({ data }) => res.json(data))
        .catch(err => next(err))
})


// router.get('api/search/:movieTitle', (req, res, next) => {

//     const { movieTitle } = req.params

//     Api.get(`search/movie?api_key=${process.env.TMDB_API_KEY}query=${movieTitle}`)

//         .then(({ Data }) => {
//             res.send(data)
//         })
//         .catch(err => next(err))
// })




module.exports = router