const axios = require('axios')



class ApiService {

    constructor() {
        this.api = axios.create({
            baseURL: `https://api.themoviedb.org/3/movie/550?api_key=${process.env.API_KEY}`
        })
    }

    getFilterMovies() {
        // return this.api.get('/')

    }


    getOneMovie() {

    }
}

module.exports = ApiService