import React from 'react';
import { connect } from 'react-redux'
import { deleteContact } from '../redux'

function ContactList({ dispatch, contacts }) {
    return (
        <div>
            {
                contacts.map((contact, index) =>
                    <div key={index} className='contact-list'>
                        <div>{`${contact.first_name} ${contact.last_name}`}</div>
                        <div>{contact.phone}</div>
                        <div>{contact.email}</div>
                        <button onClick={() => {dispatch(deleteContact(index))}}> Delete</button>
                    </div>
                )
            }
        </div>
    )
}

const mapStateToProps = state => {
        return { contacts: state }
}

export default connect(mapStateToProps)(ContactList)
