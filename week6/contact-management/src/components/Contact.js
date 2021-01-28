import React, { useState } from 'react'

function Contact(props) {
    const { first_name, last_name, phone, email } = props
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div>
            { !editToggle ?

                <div className='contact-list'>
                    <div>{`${first_name} ${last_name}`}</div>
                    <div>{phone}</div>
                    <div>{email}</div>
                </div>
              :

                <>


                </>

             }

        </div>
    )
}

export default Contact
