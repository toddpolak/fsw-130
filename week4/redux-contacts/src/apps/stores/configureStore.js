import { createStore } from 'redux'

const defaultState = {

}

function reducer(state = defaultState, action) {
    switch(action.type) {
        default:
            return state
    }
}

const store = createStore(reducer)

export default store
