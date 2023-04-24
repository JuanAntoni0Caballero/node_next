import axios from 'axios'

class MoviesService {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://api.themoviedb.org/3/movie/550?api_key=27c8dfaa0f6adec75697fbe176e61510'
        })
    }

}
