import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBasicInfo } from '../redux'
import { useHistory } from 'react-router-dom'

function BasicInfo() {
    const dispatch = useDispatch()
    const info = useSelector(info => info)
    const history = useHistory()

    const initInputs = {
        first_name: info.first_name || '',
        last_name: info.last_name || '',
        address: info.address || '',
        city: info.city || '',
        state: info.state || '',
        zip: info.zip || '',
        phone: info.phone || '',
        email: info.email || ''
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target

        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function handleSave() {
        dispatch(addBasicInfo(inputs))
        history.push("/skillset")
    }

    return (
        <div className='entry-page'>
            <h2>General Information</h2>
            <h3>Provide your name and contact information to begin:</h3>
            <div>
                <input
                    type='text'
                    name='first_name'
                    value={inputs.first_name}
                    onChange={handleChange}
                    placeholder='First Name'
                    className='input-name' />
                <input
                    type='text'
                    name='last_name'
                    value={inputs.last_name}
                    onChange={handleChange}
                    placeholder='Last Name'
                    className='input-name' />
            </div>
            <div>
                <input
                    type='text'
                    name='address'
                    value={inputs.address}
                    onChange={handleChange}
                    placeholder='Address'
                    className='input-address' />
                <input
                    type='text'
                    name='city'
                    value={inputs.city}
                    onChange={handleChange}
                    placeholder='City'
                    className='input-city' />
                <input
                    type='text'
                    name='state'
                    value={inputs.state}
                    onChange={handleChange}
                    placeholder='State'
                    className='input-state' />
                <input
                    type='text'
                    name='zip'
                    value={inputs.zip}
                    onChange={handleChange}
                    placeholder='Zip'
                    className='input-zip' />
            </div>
            <div>
                <input
                    type='text'
                    name='phone'
                    value={inputs.phone}
                    onChange={handleChange}
                    placeholder='Phone'
                    className='input-phone' />
                <input
                    type='text'
                    name='email'
                    value={inputs.email}
                    onChange={handleChange}
                    placeholder='Email'
                    className='input-email' />
            </div>
            <div className='btn-area'>
                <button onClick={handleSave}>Next</button>
            </div>
        </div>
    )
}

export default BasicInfo
