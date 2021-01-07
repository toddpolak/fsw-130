import React from 'react'

function Timer(props) {
    console.log('props: ', props.count)
    return (
        <div>
            {props.count}
        </div>
    )
}

export default Timer
