const store = require('./redux')
const tvShows = require('./redux/tvShows')
const movies = require('./redux/movies')

console.log('\n')

console.log(store.getState().movies)

console.log('add movie ...')
store.dispatch(movies.addMovie('Soul'))
console.log(store.getState().movies)

console.log('add movie ...')
store.dispatch(movies.addMovie('The Matrix'))
console.log(store.getState().movies)

console.log('add movie ...')
store.dispatch(movies.addMovie('Onward'))
console.log(store.getState().movies)

console.log('delete movie ...')
store.dispatch(movies.deleteMovie('Soul'))
console.log(store.getState().movies)

store.dispatch(movies.moviesViewAll())
console.log(store.getState().movies)

console.log('\n')

console.log(store.getState().tvShows)

console.log('add tv show ...')
store.dispatch(tvShows.addTvShow('The Bachelor'))
console.log(store.getState().tvShows)

console.log('add tv show ...')
store.dispatch(tvShows.addTvShow('Shark Tank'))
console.log(store.getState().tvShows)

console.log('add tv show ...')
store.dispatch(tvShows.addTvShow('General Hospital'))
console.log(store.getState().tvShows)

console.log('delete tv show ...')
store.dispatch(tvShows.deleteTvShow('The Bachelor'))
console.log(store.getState().tvShows)

store.dispatch(tvShows.tvShowsViewAll())
console.log(store.getState().tvShows)
console.log('\n')
