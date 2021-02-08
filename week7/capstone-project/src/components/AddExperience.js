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
                    placeholder='Employer Name'
                    className='input-name' />
                <input
                    type='text'
                    name='phone'
                    value={inputs.phone}
                    onChange={handleChange}
                    placeholder='Phone'
                    className='input-phone' />
            </div>
            <div className='experience-duties'>
                <textarea
                    type='text'
                    name='summary'
                    value={inputs.summary}
                    onChange={handleChange}
                    placeholder='Duties Performed' />
            </div>
            <div>
                <label>From:</label>
                <input
                    type='date'
                    name='from_date'
                    value={inputs.from_date}
                    onChange={handleChange} />
                <label>To:</label>
                <input
                    type='date'
                    name='to_date'
                    value={inputs.to_date}
                    onChange={handleChange} />
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
