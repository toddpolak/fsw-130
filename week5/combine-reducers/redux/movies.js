function addMovie(movie) {
    return {
        type: 'ADD_MOVIE',
        payload: movie
    }
}

function moviesReducer(movies = [], action) {
    switch (action.type) {
        case 'ADD_MOVIE':
            return [...movies, action.payload]
        default:
            return movies
    }
}

module.exports = {
    addMovie: addMovie,
    moviesReducer: moviesReducer
}
