import React from 'react'
import '../apps/App.css'
import Entry from '../components/Entry'
import UglyThings from '../components/UglyThings'
import Footer from '../components/Footer'

function App() {
    return (
        <div className='content'>
            <div className='heading'>
                <h2>Ugly Things</h2>
            </div>
            <Entry />
            <UglyThings />
            <Footer />
        </div>
    )
}

export default App
