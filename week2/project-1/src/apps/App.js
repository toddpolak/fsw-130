import React, {Component} from 'react'
import '../apps/App.css'
import {ContextConsumer} from '../context'
import UglyThings from '../components/UglyThings'

class App extends Component {
    constructor() {
        super()

        this.state = {
            newTitle: '',
            newImage: ''
        }
    }

    entryChangeHandler = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    clearForm() {
        this.setState({
            newTitle: '',
            newImage: ''
        })
    }

    render() {
        return (
            <ContextConsumer>
                {context => (
                    <div>
                        <h2>Ugly Things</h2>
                        <div>
                            <form>
                                <input
                                    type='text'
                                    name='newTitle'
                                    placeholder='Title'
                                    value={this.state.newTitle}
                                    onChange={this.entryChangeHandler}
                                />
                                <textarea
                                    name='newImage'
                                    placeholder='Image'
                                    value={this.state.newImage}
                                    onChange={this.entryChangeHandler}
                                />
                            </form>
                            <button onClick={() => {
                                context.addUglyThing(
                                    this.state.newTitle,
                                    this.state.newImage); 
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