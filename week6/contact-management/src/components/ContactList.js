import React from 'react';
import { connect } from 'react-redux'
import { deleteContact, editContact } from '../redux'
import Contact from './Contact'

function ContactList({ dispatch, contacts }) {

    function handleDelete(index) {
        dispatch(deleteContact(index))
    }

    function handleEdit(inputs, index) {
        dispatch(editContact(inputs, index))
    }

    return (
        <div className='contacts'>
            {
                contacts.map((contact, index) =>
                    <Contact
                        {...contact}
                        key={index}
                        index={index}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete} />)
            }
        </div>
    )
}

const mapStateToProps = state => {
    return { contacts: state }
}

export default connect(mapStateToProps)(ContactList)
