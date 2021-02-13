import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formSubmitted } from '../redux'
import { useHistory } from 'react-router-dom'
import methods from '../methods'

function Summary() {
    const dispatch = useDispatch()
    const info = useSelector(info => info)
    const history = useHistory()

    function handlePrev() {
        history.push('/workhistory')
    }

    function handleSubmit() {
        dispatch(formSubmitted(true))
    }

    return (
        <div>
            <h2>Employment Application</h2>
            <div className='summary-page'>
                {!info.submitted ?
                    <>
                        <h2>Application Summary</h2>
                        <div>
                            {`${info.first_name} ${info.last_name}`}
                            <div>
                                {info.address}
                                <div>
                                    {
                                        (info.city !== '' && info.state !== '' && info.zip !== '')
                                            ? `${info.city}, ${info.state} ${info.zip}`
                                            : ``
                                    }
                                </div>
                                <div>
                                    <div>{methods.formatPhone(info.phone)}</div>
                                    <div>{info.email}</div>
                                </div>
                            </div>
                            <div>
                                <div className='skillset-summary'>
                                    {
                                        info.skillsetSummary.summary !== ''
                                            ? `Summary: ${info.skillsetSummary.summary}`
                                            : ``
                                    }
                                </div>
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
                                            <div>{methods.formatPhone(item.phone)}</div>
                                            <div>{`From: ${item.from_date}`}</div>
                                            <div>{`To: ${item.to_date}`}</div>
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