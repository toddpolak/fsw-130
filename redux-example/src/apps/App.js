import React, { Component } from 'react'
import store from '../stores/configureStore'
import Timer from './components/Timer'

class App extends Component {

    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    }

    increment() {
        return {
            type: 'INCREMENT'
        }
    }

    decrement() {
        return {
            type: 'DECREMENT'
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    store.dispatch(this.increment())
                }}>
                    Increment
                </button>
                <button onClick={() => {
                    store.dispatch(this.decrement())
                }}>
                    Decrement
                </button>
                <Timer count={store.getState().count} />
            </div>
        )
    }
}

export default App
