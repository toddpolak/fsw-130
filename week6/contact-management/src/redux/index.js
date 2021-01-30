import { createStore } from 'redux'

export function addContact(contact) {
    return {
        type: 'ADD_CONTACT',
        payload: contact
    }
}

export function editContact(contact, index) {
    return {
        type: 'EDIT_CONTACT',
        payload: contact,
        index: index
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
        case 'EDIT_CONTACT':
            return contacts = contacts.map((contact, index) => action.index !== index ? contact : action.payload)
        case 'DELETE_CONTACT':
            const updatedContacts = contacts.filter((contact, index) => index !== action.payload)

            return contacts = updatedContacts
        default:
            return contacts
    }
}

const store = createStore(reducer)

export default store
