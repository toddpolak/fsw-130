import React, { Component} from 'react'
import store from './stores/configureStore'

class App extends Component {

    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    }

    render() {
        return (
            <div>
                React/Redux Contacts
            </div>
        )
    }
}

export default App
