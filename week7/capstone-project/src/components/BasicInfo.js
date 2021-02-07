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
        last_name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        email: ''
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target

        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function handleSave() {

        console.log('inputs: ', inputs)

        dispatch(addBasicInfo(inputs))
        //setInputs(initInputs)

        history.push("/skillset")
    }

    return (

            <div>

                <div>
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

                <div>
                    <input
                        type='text'
                        name='address'
                        value={inputs.address}
                        onChange={handleChange}
                        placeholder='Address' />
                </div>

                <div>
                    <input
                        type='text'
                        name='city'
                        value={inputs.city}
                        onChange={handleChange}
                        placeholder='City' />
                    <input
                        type='text'
                        name='state'
                        value={inputs.state}
                        onChange={handleChange}
                        placeholder='State' />
                    <input
                        type='text'
                        name='zip'
                        value={inputs.zip}
                        onChange={handleChange}
                        placeholder='Zip' />

                </div>

                <div>
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
                </div>


                <div>
                    <button onClick={handleSave}>Next</button>
                </div>


            </div>


    )
}

export default BasicInfo
