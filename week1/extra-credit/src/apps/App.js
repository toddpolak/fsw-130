import React, { Component } from 'react'
import { AppProvider } from '../apps/AppProvider'
import Main from "../components/Main"
import "../apps/App.css"

class App extends Component {
    render() {
        return (
            <AppProvider>
                <Main />
            </AppProvider>
        )
    }
}

export default App