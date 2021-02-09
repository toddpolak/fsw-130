import React, { useState } from 'react'
import EditForm from './EditForm'
import methods from '../methods'

function Contact(props) {
    const { first_name, last_name, phone, email } = props
    const [editToggle, setEditToggle] = useState(false)

    function saveContact(inputs) {
        props.handleEdit(inputs, props.index)
        setEditToggle(false)
    }

    return (
        <div>
            { !editToggle ?
                <>
                    <div className='contact-list'>
                        <div className='contact-name'>{`${first_name} ${last_name}`}</div>
                        <div>{methods.formatPhone(phone)}</div>
                        <div>{email}</div>
                        <button
                            className='btn'
                            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                            Edit
                        </button>
                          <button onClick={() => {props.handleDelete(props.index)}}>
                            Delete
                        </button>
                    </div>
                </>
              :
                <>
                    <EditForm
                        first_name={first_name}
                        last_name={last_name}
                        phone={phone}
                        email={email}
                        setEditToggle={setEditToggle}
                        saveContact={saveContact} />
                </>
             }
        </div>
    )
}

export default Contact
