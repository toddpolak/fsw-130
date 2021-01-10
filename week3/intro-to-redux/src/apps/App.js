import React, { Component} from 'react'
import store from '../stores/configureStore'
import Timer from './components/Timer'
import Buttons from './components/Buttons'
import LapCounter from './components/LapCounter'

class App extends Component {

    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    }

    render() {
        return (
            <div className='content'>
                <Timer />
                <Buttons />
                <LapCounter />
            </div>
        )
    }
}

export default App
