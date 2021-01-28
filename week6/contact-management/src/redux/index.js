import { createStore } from 'redux'

export function addContact(contact) {
    return {
        type: 'ADD_CONTACT',
        payload: contact
    }
}

export function deleteContact(index) {
    return {
        type: 'DELETE_CONTACT',
        payload: index
    }
}

function reducer(contacts = [], action) {
    switch (action.type) {
        case 'ADD_CONTACT':
            return contacts = [...contacts, action.payload]
        case 'DELETE_CONTACT':
            return contacts = contacts.filter((contact, index) => index !== action.payload)
        default:
            return contacts
    }
}

const store = createStore(reducer)

store.subscribe(() => store.getState())

export default store
