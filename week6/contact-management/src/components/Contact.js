import React, { useState } from 'react'

function Contact(props) {
    const { first_name, last_name, phone, email } = props
    const [editToggle, setEditToggle] = useState(false)

    const initInputs = {
        first_name: props.first_name,
        last_name: props.last_name
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target

        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    return (
        <div>
            { !editToggle ?

                <>

                <div className='contact-list'>
                    <div>{`${first_name} ${last_name}`}</div>
                    <div>{phone}</div>
                    <div>{email}</div>
                </div>

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

                </div>


                <button
                    className='btn'

                        onClick={() => props.handleEdit(inputs, props.index)}>
                    Save
                </button>

                </>
              :

                <>

                   

                </>

             }

        </div>
    )
}

export default Contact
