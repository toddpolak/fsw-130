import redux, { createStore } from 'redux'

const initialState = {
    contacts: [
        { name: 'Todd' }
    ]
}

export function addContact(contact) {
    return {
        type: 'ADD_CONTACT',
        payload: contact
    }
}

export function deleteContact(contact) {
    return {
        type: 'DELETE_CONTACT',
        payload: contact
    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case 'DELETE_CONTACT':
            const updatedContacts = state.contacts.filter(function (contact) {
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

const store = createStore(reducer)

store.subscribe(() => {console.log(store.getState())})

export default store
