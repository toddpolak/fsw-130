import React from 'react'
import '../apps/App.css'
import Entry from '../components/Entry'
import UglyThings from '../components/UglyThings'
import Header from '../components/Header'
import Footer from '../components/Footer'

function App() {
    return (
        <div className='content'>
            <Header />
            <Entry />
            <UglyThings />
            <Footer />
        </div>
    )
}

export default App
