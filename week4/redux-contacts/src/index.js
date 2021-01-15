import store from './store/configureStore'
import {addContact, deleteContact} from './store/configureStore'

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
