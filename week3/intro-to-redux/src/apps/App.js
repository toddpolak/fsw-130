import React, { Component } from 'react'
import store from '../stores/configureStore'
import Timer from './components/Timer'

class App extends Component {

    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    }

    start() {
        return {
            type: 'START'
        }
    }

    stop() {
        return {
            type: 'STOP'
        }
    }

    reset() {
        return {
            type: 'RESET'
        }
    }

    startCounter() {
        setInterval(() => {
            store.dispatch({type: 'START'})
        }, 100)
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.startCounter()
                    //store.dispatch(this.start())
                }}>
                    Start
                </button>
                <button onClick={() => {
                    store.dispatch(this.stop())

                }}>
                    Stop
                </button>
                <button onClick={() => {
                    store.dispatch(this.reset())
                }}>
                    Reset
                </button>
                <Timer time={store.getState().time} />
            </div>
        )
    }
}

export default App
