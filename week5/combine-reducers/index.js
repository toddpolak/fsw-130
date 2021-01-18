const store = require('./redux')
const tvShows = require('./redux/tvShows')
const movies = require('./redux/movies')

store.dispatch(tvShows.addTvShow('Shark Tank'))
store.dispatch(movies.addMovie('Soul'))
