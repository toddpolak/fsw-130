import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addContact } from '../redux'

function ContactForm({ dispatch }) {

    const initInputs = {
        first_name: '',
        last_name: '',
        phone: '',
        email: ''
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target

        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(addContact(inputs))
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
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
            <button>Add Contact</button>
        </form>
    )
}

const mapStateToProps = state => {
    return { contacts: state }
}

export default connect(mapStateToProps)(ContactForm)
