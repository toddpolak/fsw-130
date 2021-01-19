const redux = require("redux")
const { combineReducers, createStore } = redux
const tvShows = require('./tvShows')
const movies = require('./movies')

const rootReducer = combineReducers({
    tvShows: tvShows.tvShowsReducer,
    movies: movies.moviesReducer
})

const store = createStore(rootReducer)

module.exports = store
