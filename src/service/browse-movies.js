import { API_OPTIONS } from '../utility/constant';

class BrowseMovies {
    constructor(apiEndpoint) {
        this.apiEndpoint = apiEndpoint;
    }

    getMovieListByGenre(page = 1) {
        return fetch(`${this.apiEndpoint}?page=${page}`, API_OPTIONS)
    }
}

export default BrowseMovies;