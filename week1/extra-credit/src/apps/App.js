import React, { Component } from 'react'
import AppProvider from '../apps/AppProvider'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Footer from '../components/Footer'
import '../apps/App.css'

class App extends Component {
    render() {
        return (
            <AppProvider>
                <Navbar />
                <Main />
                <Footer />
            </AppProvider>
        )
    }
}

export default App
