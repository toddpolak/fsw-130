import React from 'react';
import { connect } from 'react-redux'

function ContactList({ dispatch, contacts }) {

    console.log('contacts: ', contacts)
    console.log('dispatch: ', dispatch)

    return (
        <div>
            {
                //contacts.contacts.map((contact, index) =>
                contacts.map((contact, index) =>
                    contact.name
            )}
        </div>
    )
}

const mapStateToProps = state => {
        return { contacts: state }
}

export default connect(mapStateToProps)(ContactList)

/*
const ContactList = ({ dispatch, contact }) => {
    console.log('contact: ', contact)
    console.log('dispatch: ', dispatch)

    return (
        <div></div>
    )
}

const mapStateToProps = state => {
    return { contact: state }
}

export default connect(mapStateToProps)(ContactList)
*/