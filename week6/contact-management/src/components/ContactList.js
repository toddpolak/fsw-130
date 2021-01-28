import React, { useState } from 'react';
import { connect } from 'react-redux'
import { deleteContact } from '../redux'

function ContactList({ dispatch, contacts }) {

    const initInputs = {
        first_name: '',
        last_name: '',
        phone: '',
        email: ''
    }

    const [editToggle, setEditToggle] = useState(false)

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target

        console.log('value: ', value)

        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function handleEdit(e) {
        e.preventDefault()
        //dispatch(editContact(inputs))
        setInputs(initInputs)
    }

    return (

        <div>

            {
                contacts.map((contact, index) =>

                    !editToggle ?

                        <div key={index} className='contact-list'>
                            <div>{`${contact.first_name} ${contact.last_name}`}</div>
                            <div>{contact.phone}</div>
                            <div>{contact.email}</div>
                            <button onClick={() => { dispatch(deleteContact(index)) }}> Delete</button>

                            <button
                                className='btn'
                                onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                                Edit
                                    </button>

                        </div>

                        :

                        <div key={index}>

                            <form onSubmit={handleEdit}>
                                <input
                                    type='text'
                                    name='first_name'

                                    defaultValue={contact.first_name}

                                    onChange={handleChange}
                                    placeholder='First Name' />
                                <input
                                    type='text'
                                    name='last_name'
                                    value={contact.last_name}
                                    onChange={handleChange}
                                    placeholder='Last Name' />
                                <input
                                    type='text'
                                    name='phone'
                                    value={contact.phone}
                                    onChange={handleChange}
                                    placeholder='Phone' />
                                <input
                                    type='text'
                                    name='email'
                                    value={contact.email}
                                    onChange={handleChange}
                                    placeholder='Email' />

                                <button>Save</button>

                            </form>

                            <button
                                className='btn'
                                onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                                Cancel
                                </button>

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
