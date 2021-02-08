import { createStore } from 'redux'

const initialState = {
    first_name: '',
    last_name: '',
    address: '',
    skillsetSummary: '',
    skills: [], 
    workExperience: []
}

export function addBasicInfo(info) {
    return {
        type: 'ADD_BASIC_INFO',
        payload: info
    }
}

export function addSkillset(skillset) {
    return {
        type: 'ADD_SKILLSET',
        payload: skillset
    }
}

export function addSkillsetSummary(skillsetSummary) {
    return {
        type: 'ADD_SKILLSET_SUMMARY',
        payload: skillsetSummary
    }
}

export function addWorkExperience(items) {
    return {
        type: 'ADD_WORK_EXPERIENCE',
        payload: items
    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_BASIC_INFO':
            return {
                ...state,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name
            }
        case 'ADD_SKILLSET':
            return {
                ...state,
                skills: [...state.skills, action.payload]
            }
        case 'ADD_SKILLSET_SUMMARY':
            return {
                ...state,
                skillsetSummary: action.payload
            }
        case 'ADD_WORK_EXPERIENCE':
            return {
                ...state,
                workExperience: [...state.workExperience, action.payload]
            }
            
        default:
            return state
    }
}

const store = createStore(reducer)

export default store
