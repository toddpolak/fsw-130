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
            const updatedTvShows = tvShows.filter(tvShow => tvShow !== action.payload)
            return {
                ...state,
                tvShows: updatedTvShows
            }
        default: 
            return tvShows
    }
}

module.exports = {
    addTvShow: addTvShow,
    tvShowsReducer: tvShowsReducer
}
