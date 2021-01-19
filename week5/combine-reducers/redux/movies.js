function addMovie(movie) {
    return {
        type: 'ADD_MOVIE',
        payload: movie
    }
}

function deleteMovie(movie) {
    return {
        type: 'DELETE_MOVIE',
        payload: movie
    }
}

function moviesViewAll() {
    return {
        type: 'MOVIES_VIEW_ALL'
    }
}

const initialState = {
    movies: []
}

function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [...state.movies, action.payload]
            }
        case 'DELETE_MOVIE':
            const updatedMovies = state.movies.filter(movie => movie !== action.payload)
            return {
                ...state,
                movies: updatedMovies
            }
        case 'MOVIES_VIEW_ALL':
            return `All Movies: ${state.movies}`
        default:
            return state
    }
}

module.exports = {
    addMovie: addMovie,
    deleteMovie: deleteMovie,
    moviesViewAll: moviesViewAll,
    moviesReducer: moviesReducer
}
