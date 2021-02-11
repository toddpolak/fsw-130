import React from 'react'
import { useSelector } from 'react-redux'
import AddExperience from '../components/AddExperience'
import { useHistory } from 'react-router-dom'
import methods from '../methods'

function Experience() {
    const info = useSelector(info => info)
    const history = useHistory()

    function handleNext() {
        history.push('/summary')
    }

    function handlePrev() {
        history.push('/skillset')
    }

    return (
        <div className='entry-page'>
            <h2>Work History</h2>
            <div>
                <AddExperience />
            </div>
            <div className='work-experience'>
                {info.workExperience.map((experience, index) =>
                    <div key={index}>
                        <div>{experience.employer_name}</div>
                        <div>{methods.formatPhone(experience.phone)}</div>
                        <div>{`From: ${experience.from_date}`}</div>
                        <div>{`To: ${experience.to_date}`}</div>
                        <div>{experience.summary}</div>
                    </div>
                )}
            </div>
            <div className='btn-area'>
                <button onClick={handlePrev}>
                    Prev
                </button>
                <button onClick={handleNext}>
                    Next
                </button>
            </div>

        </div>
    )
}

export default Experience
