import React from 'react'
import store from '../../stores/configureStore'

const modules = require('../../modules/common')

function LapCounter() {
    return (
        <div className='laps'>
            {store.getState().lapCounter.map((lap, index) => 
                <div key={index} className='lap'>
                    {lap !== 0 ? modules.display(lap) : ''}
                </div>
            )}
        </div>
    )
}

export default LapCounter
