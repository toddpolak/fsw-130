import React from 'react'
import store from '../../stores/configureStore'

const modules = require('../../modules/common')

function Timer() {
    return (
        <div className='timer-display'>
            {modules.display(store.getState().time)}
        </div>
    )
}

export default Timer
