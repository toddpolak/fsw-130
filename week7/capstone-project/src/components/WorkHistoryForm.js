import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWorkExperience } from '../redux'
import { useHistory } from 'react-router-dom'

function WorkHistoryForm() {
    const dispatch = useDispatch()
    const info = useSelector(info => info)
    const history = useHistory()

    const initInputs = {
        employer_name: '',
        phone: '',
        from_date: '',
        to_date: '',
        summary: ''
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target

        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function addExperience() {

        console.log(inputs)

        dispatch(addWorkExperience(inputs))

        setInputs(initInputs)
    }

    return (
        <div>
            <div>
                <input
                    type='text'
                    name='employer_name'
                    value={inputs.employer_name}
                    onChange={handleChange}
                    placeholder='Employer Name' />
                <input
                    type='text'
                    name='phone'
                    value={inputs.phone}
                    onChange={handleChange}
                    placeholder='Phone' />
            </div>

            <div>
                <button onClick={addExperience}>
                    Add
                </button>
            </div>

            <div className='work_experience'>
                {
                    info.workExperience.map((item, index) =>
                        <div key={index}></div>
                )}
            </div>

        </div>


    )

}

export default WorkHistoryForm
