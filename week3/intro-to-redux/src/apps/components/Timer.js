import React from 'react'

function displayTimer(time) {
    let minutes = Math.floor(time / 60000)
    let seconds = Math.floor((time % 60000) / 1000)
    let milliseconds = time % 1000

    if (milliseconds === 0) {milliseconds = '000'}

    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds + ':' + milliseconds
}

function Timer(props) {
    return (
        <div className='timer-display'>
            {displayTimer(props.time)}
        </div>
    )
}

export default Timer
