import React, { useState } from 'react'

function Contact(props) {
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

    function saveContact() {
        props.handleEdit(inputs, props.index)
        setEditToggle(false)
    }

    return (
        <div>
            { !editToggle ?
                <>
                    <div className='contact-list'>
                        <div>{`${first_name} ${last_name}`}</div>
                        <div>{phone}</div>
                        <div>{email}</div>
                        <button
                            className='btn'
                            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                            Edit
                        </button>
                        <button onClick={() => { props.handleDelete(props.index) }}>
                            Delete
                        </button>
                    </div>
                </>
              :
                <>
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
                            onClick={saveContact}>
                            Save
                        </button>
                        <button
                            className='btn'
                            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                            Cancel
                        </button>
                    </div>
                </>
             }

        </div>
    )
}

export default Contact
