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
    
    componentWillUnmount() {
        clearInterval(this.timerInterval)
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

    resetCounter() {
        clearInterval(this.timerInterval)
        store.dispatch({type: 'RESET'})
    }

    render() {
        return (
            <div>
                {!store.getState().isRunning ? (
                    <button onClick={() => {
                        this.startCounter()
                    }}>
                        Start
                    </button>
                ) : (
                    <button onClick={() => {
                        this.stopCounter()
                    }}>
                        Stop
                    </button>
                )}
                <button onClick={() => {
                    this.resetCounter()
                }}>
                    Reset
                </button>
                <Timer time={store.getState().time} />
            </div>
        )
    }
}

export default App
