import React from 'react'

function displayTimer(time) {
    let totalMinutesPassed = Math.floor(time/60)
    let minutes = totalMinutesPassed % 60
    let seconds = time % 60

    return `${minutes} minutes ${seconds} seconds`
    //return `${minutes} minutes ${seconds} seconds ${milliseconds} milliseconds`
}

function Timer(props) {
    return (
        <div className='timer-display'>
            {displayTimer(props.time)}
        </div>
    )
}

export default Timer
