import React, {Component} from 'react'
import '../apps/App.css'
import {ContextConsumer} from '../context'
import UglyThings from '../components/UglyThings'

class App extends Component {
    constructor() {
        super()

        this.state = {
            newTitle: ''
        }
    }

    entryChangeHandler = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    clearForm() {
        this.setState({
            newTitle: ''
        })
    }

    render() {
        return (
            <ContextConsumer>
                {context => (
                    <div>
                        <h2>Ugly Things</h2>
                        <div>
                            <input
                                type='text'
                                name='newTitle'
                                placeholder='Title'
                                value={this.state.newTitle}
                                onChange={this.entryChangeHandler}
                            />
                            <button onClick={() => {
                                context.addUglyThing(this.state.newTitle); 
                                this.clearForm()}}>Add</button>
                        </div>
                        <div>
                            <UglyThings />
                        </div>
                    </div>
                )}
            </ContextConsumer>
        )
    }
}

export default App