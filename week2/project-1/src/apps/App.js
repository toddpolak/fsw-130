import React from 'react'
import '../apps/App.css'
import Entry from '../components/Entry'
import UglyThings from '../components/UglyThings'

function App() {
    return (
        <div className='content'>
            <div className='heading'>
                <h2>Ugly Things</h2>
            </div>
            <Entry />
            <UglyThings />
        </div>
    )
}

export default App
