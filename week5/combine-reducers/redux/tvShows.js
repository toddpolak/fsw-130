function addTvShow(tvShow) {
    return {
        type: 'ADD_TV_SHOW',
        payload: tvShow
    }
}

function deleteTvShow(tvShow) {
    return {
        type: 'DELETE_TV_SHOW',
        payload: tvShow
    }
}

function tvShowsViewAll() {
    return {
        type: 'TV_SHOWS_VIEW_ALL'
    }
}

const initialState = {
    tvShows: []
}

function tvShowsReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TV_SHOW':
            return {
                ...state,
                tvShows: [...state.tvShows, action.payload]
            }
        case 'DELETE_TV_SHOW':
            const updatedTvShows = state.tvShows.filter(tvShow => tvShow !== action.payload)
            return {
                ...state,
                tvShows: updatedTvShows
            }
        case 'TV_SHOWS_VIEW_ALL':
            return `All TV Shows: ${state.tvShows}`
        default: 
            return state
    }
}

module.exports = {
    addTvShow: addTvShow,
    deleteTvShow: deleteTvShow,
    tvShowsViewAll: tvShowsViewAll,
    tvShowsReducer: tvShowsReducer
}
