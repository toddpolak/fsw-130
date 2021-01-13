const redux = require('redux')

function addContact(contact) {
    return {
        type: 'ADD_CONTACT',
        payload: contact
    }
}

const initialState = {
    contacts: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addContact({
    name: 'Todd Zappone',
    phone: '909-582-0448',
    email: 'toddpolakdev@gmail.com'
}))
