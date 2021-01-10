import React from 'react'
import store from '../../stores/configureStore'

const modules = require('../../modules/time')

function LapCounter() {
    return (
        <div className='laps'>
            <h3>Laps</h3>
            {store.getState().lapCounter.map((lap, index) => 
                <div key={index} className='lap'>
                    {lap !== 0 ? modules.lapDisplay(lap) : ''}
                </div>
            )}
        </div>
    )
}

export default LapCounter
