import React from 'react'

function App() {
    const redux = require("redux")
    const state = {
        count: 0
    }

    function increment() {
        return {
            type: 'INCREMENT'
        }
    }

    function decrement() {
        return {
            type: 'DECREMENT'
        }
    }

    function reducer(prevState = state, action) {
        switch(action.type) {
            case "INCREMENT":
                return {
                    count: prevState.count + 1
                }
            case "DECREMENT":
                return {
                    count: prevState.count - 1
                }
            default:
                return prevState
        }
    }

    const store = redux.createStore(reducer)

    store.subscribe(() => {
        console.log(store.getState())
    })

    return (
        <div>
            <button onClick={() => {
                store.dispatch(increment())
            }}>
                Increment
            </button>
            <button onClick={() => {
                store.dispatch(decrement())
            }}>
                Decrement
            </button>
        </div>
    )
}

export default App
