import { createStore } from 'redux'

const defaultState = {
    time: 0
}

function reducer(state = defaultState, action) {
    switch(action.type) {
        case 'START':
            return {
                ...state,
                time: state.time + 10
            }
        case 'STOP':
            return {
                ...state,
                time: state.time
            }
        case 'RESET':
            return {
                ...state,
                time: state.time = 0
            }
        default:
            return state
    }
}

const store = createStore(reducer)

export default store