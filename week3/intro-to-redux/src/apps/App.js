import React, { Component } from 'react'
import store from '../stores/configureStore'
import Timer from './components/Timer'

class App extends Component {

    static timerInterval

    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    }

    startCounter() {
        this.timerInterval = setInterval(() => {
            store.dispatch({type: 'START'})
        }, 10)
    }

    stopCounter() {
        clearInterval(this.timerInterval)
        store.dispatch({type: 'STOP'})
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.startCounter()
                }}>
                    Start
                </button>
                <button onClick={() => {
                    this.stopCounter()
                }}>
                    Stop
                </button>
                <button onClick={() => {
                }}>
                    Reset
                </button>
                <Timer time={store.getState().time} />
            </div>
        )
    }
}

export default App
