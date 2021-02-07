import React from 'react'
import { useSelector } from 'react-redux'

function Summary() {
    const info = useSelector(info => info)
    return (

        <div>
            {
                console.log('summary: ', info)
            }
        </div>
    )
}

export default Summary