import React from 'react'
import { useSelector } from 'react-redux'

function Summary() {
    const info = useSelector(info => info)
    return (
        <div>
            <h2>Employment Application - Summary</h2>
            <div className='summary-page'>

            </div>
        </div>
    )
}

export default Summary