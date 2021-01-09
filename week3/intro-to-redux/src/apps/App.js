import React, { Component } from 'react'
import store from '../stores/configureStore'
import Timer from './components/Timer'
import LapCounter from './components/LapCounter'

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

    lapCounter() {
        store.dispatch({type: 'LAP'})
    }

    render() {
        return (
            <div className='content'>
                <Timer time={store.getState().time} />
                <div className='buttons'>
                    {!store.getState().isRunning ? (
                        <div className='button'>
                            <button onClick={() => {
                                this.startCounter()
                            }}>
                                Start
                            </button>
                        </div>
                    ) : (
                        <div className='button'>
                            <button onClick={() => {
                                this.stopCounter()
                            }}>
                                Stop
                            </button>
                        </div>
                    )}
                    <div className='button'>
                        <button onClick={() => {
                            this.resetCounter()
                        }}>
                            Reset
                        </button>
                    </div>
                    <div className='button'>
                        <button onClick={() => {
                            this.lapCounter()
                        }}>
                            Lap
                        </button>
                    </div>
                </div>

                <LapCounter laps={store.getState().lapCounter} />

            </div>
        )
    }
}

export default App
