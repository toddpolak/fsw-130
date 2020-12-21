import React, { Component } from 'react'
import AppProvider from './AppProvider'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Footer from '../components/Footer'
import './App.css'

class App extends Component {
    render() {
        return (
            <AppProvider>
                <div className='container'>
                    <Navbar />
                    <Main />
                    <Footer />
                </div>
            </AppProvider>
        )
    }
}

export default App
