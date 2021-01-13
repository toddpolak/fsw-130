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
            //console.log('action.payload: ', action.payload)

            //const updatedContacts = state.contacts.filter(contact => 
                //contact.name !== action.payload.name)

            console.log('state.contacts: ', state.contacts)

            let updatedContacts = state.contacts.filter(function(contact) {
                for (let key in state.contacts) {

                    console.log('key: ', key)
                    console.log('action.payload: ', action.payload)
                    console.log('contact: ', contact)
                    //console.log('contact[key]: ', contact[key])
                    console.log('state.contacts[key]: ', state.contacts[key])

                    if (action.payload !== state.contacts[key]) {
                        return false
                    }
                    
                    //if (contact[key] === undefined || contact[key] !== state.contacts[key])
                        
                }
                return true
            })

            console.log('updatedContacts: ', updatedContacts)
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
    //console.log(store.getState())
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

store.dispatch(deleteContact({
    name: 'John Doe',
    phone: '951-440-9897',
    email: 'johndoe@gmail.com'
}))
