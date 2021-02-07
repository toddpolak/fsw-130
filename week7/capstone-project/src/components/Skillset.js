import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSkillset, addSkillsetSummary } from '../redux'
import { useHistory } from 'react-router-dom'

function Skillset() {
    const dispatch = useDispatch()
    const info = useSelector(info => info)
    const history = useHistory()

   // console.log('info: ', info)

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

        console.log('itemInput: ', itemInput)

        dispatch(addSkillset(itemInput))
        setItemInput(initItemInput)
    }

    function handleNext() {
        dispatch(addSkillsetSummary(summaryInput))
        history.push("/workhistory")
    }

    return (
        <div>
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
            </div>
            <div>
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

            <div>
                <button onClick={handleNext}>
                    Next
                </button>
            </div>

        </div>
    )
}

export default Skillset
