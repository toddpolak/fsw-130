import React from 'react'
import '../apps/App.css'
import Entry from '../components/Entry'
import UglyThings from '../components/UglyThings'

function App() {
    return (
        <div>
            <h2>Ugly Things</h2>
            <Entry />
            <UglyThings />
        </div>
    )
}

export default App
