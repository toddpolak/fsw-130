import React, { useState } from 'react'

function EditForm(props) {
    const { first_name, last_name, phone, email } = props
    const [editToggle, setEditToggle] = useState(false)

    
    const initInputs = {
        first_name: props.first_name,
        last_name: props.last_name,
        phone: props.phone,
        email: props.email
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

            <button 
                className='btn'>
                Save
            </button>
        </div>
    )

}

export default EditForm