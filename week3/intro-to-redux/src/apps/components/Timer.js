import React from 'react'
import store from '../../stores/configureStore'

const modules = require('../../modules/time')

function Timer() {
    return (
        <div className='timer-display'>
            <h3>React/Redux Timer</h3>
            <div className='timer'>
                <div className='time'>
                    {modules.timerDisplay(store.getState().time)}
                </div>
                <div className='milliseconds'>
                    :{modules.milliseconds(store.getState().time)}
                </div>
            </div>
        </div>
    )
}

export default Timer
