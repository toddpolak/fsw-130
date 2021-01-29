import React, { useState } from 'react';
import { connect } from 'react-redux'
import { editContact } from '../redux'
//import { deleteContact } from '../redux'
import Contact from '../components/Contact'

function ContactList({ dispatch, contacts }) {

    /*
    const initInputs = {
        first_name: '',
        last_name: '',
        phone: '',
        email: ''
    }
    */

    //const [editToggle, setEditToggle] = useState(false)

    //const [inputs, setInputs] = useState(initInputs)

    /*
    function initEdit(contact) {
        setInputs(contact)
        setEditToggle(true)
    }
    */

    /*
    function handleChange(e) {
        const { name, value } = e.target

        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }
    */

    function handleEdit(inputs, index) {

        console.log('handleEdit: ', index)
        console.log('handleEdit: ', inputs)

        dispatch(editContact(inputs, index))
        //setInputs(initInputs)
        //setEditToggle(false)

    }

    return (
        <div>
            {

                contacts.map((contact, index) =>
                    <Contact
                        {...contact}
                        key={index}
                        index={index}
                        handleEdit={handleEdit} />)

                /*
                
                contacts.map((contact, index) =>
                    !editToggle ?
                        <div key={index} className='contact-list'>
                            <div>{`${contact.first_name} ${contact.last_name}`}</div>
                            <div>{contact.phone}</div>
                            <div>{contact.email}</div>
                            <button onClick={() => { dispatch(deleteContact(index)) }}> Delete</button>
                            <button
                                className='btn'
                                onClick={() => initEdit(contact)}>
                                Edit
                            </button>
                        </div>
                        :
                        <div key={index}>
                            <div className='form'>
                                <input
                                    type='text'
                                    name='first_name'
                                    value={inputs.first_name}
                                    onChange={handleChange}
                                    placeholder='First Name' />
                                <input
                                    type='text'
                                    name='last_name'
                                    value={inputs.last_name}
                                    onChange={handleChange}
                                    placeholder='Last Name' />
                                <input
                                    type='text'
                                    name='phone'
                                    value={inputs.phone}
                                    onChange={handleChange}
                                    placeholder='Phone' />
                                <input
                                    type='text'
                                    name='email'
                                    value={inputs.email}
                                    onChange={handleChange}
                                    placeholder='Email' />
                                <button
                                    className='btn'
                                    onClick={() => handleEdit(index)}>
                                    Save
                                </button>
                                <button
                                    className='btn'
                                    onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                )

            */

            }

        </div>
    )
}

const mapStateToProps = state => {
    return { contacts: state }
}

export default connect(mapStateToProps)(ContactList)
