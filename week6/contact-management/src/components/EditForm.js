import React, { useState } from 'react'

function EditForm(props) {
    const { first_name, last_name, phone, email, setEditToggle, saveContact } = props

    const initInputs = {
        first_name,
        last_name,
        phone,
        email
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target

        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }
    
    return (
        <div className='edit-form'>
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
                onClick={() => {saveContact(inputs)}}>
                Save
            </button>
            <button
                className='btn'
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Cancel
            </button>
        </div>
    )

}

export default EditForm
