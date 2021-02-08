import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSkillset, addSkillsetSummary } from '../redux'
import { useHistory } from 'react-router-dom'

function Skillset() {
    const dispatch = useDispatch()
    const info = useSelector(info => info)
    const history = useHistory()

    const initSummaryInput = {
        summary: info.skillsetSummary.summary || ''
    }

    const initItemInput = {
        item: ''
    }

    const [summaryInput, setSummaryInput] = useState(initSummaryInput)
    const [itemInput, setItemInput] = useState(initItemInput)


    function handleItemChange(e) {
        const { name, value } = e.target

        setItemInput(prevInput => ({ ...prevInput, [name]: value }))
    }

    function handleSummaryChange(e) {
        const { name, value } = e.target

        setSummaryInput(prevInput => ({ ...prevInput, [name]: value }))
    }

    function addSkill() {
        dispatch(addSkillset(itemInput))
        setItemInput(initItemInput)
    }

    function handleNext() {
        dispatch(addSkillsetSummary(summaryInput))
        history.push('/workhistory')
    }

    function handlePrev() {
        history.push('/')
    }

    return (
        <div className='entry-page'>
            <h2>Skills</h2>
            <div>
                <textarea
                    type='text'
                    name='summary'
                    value={summaryInput.summary}
                    onChange={handleSummaryChange}
                    placeholder='Skillset Summary' />
            </div>
            <div>
                <input
                    type='text'
                    name='item'
                    value={itemInput.item}
                    onChange={handleItemChange}
                    placeholder='Add Skill' />
                <button onClick={addSkill}>
                    Add Skill
                </button>
            </div>
            <div>
                <ul>
                    {info.skills.map((skill, index) =>
                        <li key={index}>{skill.item}</li>
                    )}
                </ul>
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

export default Skillset
