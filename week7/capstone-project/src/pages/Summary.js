import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import methods from '../methods'

function Summary() {
    const info = useSelector(info => info)
    const [submitted, setSubmitted] = useState(false)
    const history = useHistory()

    function handlePrev() {
        history.push('/skillset')
    }

    function handleSubmit() {
        setSubmitted(true)
    }

    return (
        <div>
            <h2>Employment Application</h2>
            <div className='summary-page'>
                {!submitted ?
                    <>
                        <h2>Summary</h2>
                        <div>
                            {`${info.first_name} ${info.last_name}`}
                            <div>
                                {info.address}
                                <div>
                                    {`${info.city}, ${info.state} ${info.zip}`}
                                </div>
                                <div>
                                    <div>{methods.formatPhone(info.phone)}</div>
                                    <div>{info.email}</div>
                                </div>
                            </div>
                            <div>
                                <ul>
                                    {info.skills.map((skill, index) =>
                                        <li key={index}>{skill.item}</li>
                                    )}
                                </ul>
                            </div>
                            <div className='work_experience'>
                                {
                                    info.workExperience.map((item, index) =>
                                        <div key={index}>
                                            <div>{item.employer_name}</div>
                                            <div>{item.phone}</div>
                                            <div>{item.from_date}</div>
                                            <div>{item.to_date}</div>
                                            <div>{item.summary}</div>
                                        </div>
                                    )}
                            </div>
                        </div>
                        <div className='btn-area'>
                            <button onClick={handlePrev}>
                                Prev
                            </button>
                            <button onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </>
                    :
                    <>
                        <h2>Thank you. Your application has been submitted.</h2>
                    </>
                }

            </div>
        </div>
    )
}

export default Summary