import { createStore } from 'redux'

export function addContact(contact) {
    return {
        type: 'ADD_CONTACT',
        payload: contact
    }
}

export function editContact(contact, index) {
    console.log('contact: ', contact)
    console.log('index: ', index)
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
            console.log('action: ', action)

        case 'DELETE_CONTACT':
            return contacts = contacts.filter((contact, index) => index !== action.payload)
        default:
            return contacts
    }
}

const store = createStore(reducer)

store.subscribe(() => store.getState())

export default store
