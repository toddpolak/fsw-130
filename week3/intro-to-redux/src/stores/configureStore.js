import { createStore } from 'redux'

const defaultState = {
    time: 0,
    isRunning: false
}

function reducer(state = defaultState, action) {
    switch(action.type) {
        case 'START':
            return {
                ...state,
                time: state.time + 10,
                isRunning: true
            }
        case 'STOP':
            return {
                ...state,
                time: state.time,
                isRunning: false
            }
        case 'RESET':
            return {
                ...state,
                time: state.time = 0,
                isRunning: false
            }
        //case 'LAP':
            


        default:
            return state
    }
}

const store = createStore(reducer)

export default store
