import { createStore } from 'redux'

const defaultState = {
    count: 0
}

function reducer(state = defaultState, action) {
    switch(action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1
            }
        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}

const store = createStore(reducer)

export default store
