const redux = require('redux')

function addContact(contact) {
    return {
        type: 'ADD_CONTACT',
        payload: contact
    }
}

function deleteContact(contact) {
    return {
        type: 'DELETE_CONTACT',
        payload: contact
    }
}

const initialState = {
    contacts: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case 'DELETE_CONTACT':
            const updatedContacts = state.contacts.filter(function(contact) {
                if (action.payload.name === contact.name && 
                    action.payload.phone === contact.phone &&
                    action.payload.email === contact.email) {
                    return false
                }
                return true
            })
            return {
                ...state,
                contacts: updatedContacts
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

store.dispatch(addContact({
    name: 'John Doe',
    phone: '951-440-9897',
    email: 'johndoe@gmail.com'
}))

store.dispatch(addContact({
    name: 'Jane Doe',
    phone: '858-447-2049',
    email: 'janedoe@gmail.com'
}))

store.dispatch(deleteContact({
    name: 'John Doe',
    phone: '951-440-9897',
    email: 'johndoe@gmail.com'
}))

store.dispatch(deleteContact({
    name: 'Todd Zappone',
    phone: '909-582-0448',
    email: 'toddpolakdev@gmail.com'
}))
