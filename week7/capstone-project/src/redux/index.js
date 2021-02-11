import { createStore } from 'redux'

const initialState = {
    first_name: '',
    last_name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
    skillsetSummary: '',
    skills: [], 
    workExperience: [],
    submitted: false
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

export function formSubmitted(submitted) {
    return {
        type: 'FORM_SUBMITTED',
        payload: submitted
    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_BASIC_INFO':
            return {
                ...state,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                address: action.payload.address,
                city: action.payload.city,
                state: action.payload.state,
                zip: action.payload.zip,
                phone: action.payload.phone,
                email: action.payload.email,
                submitted: false
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
        case 'FORM_SUBMITTED':
            state = initialState
            return {
                ...state,
                submitted: true
            }
        default:
            return state
    }
}

const store = createStore(reducer)

export default store
