import React, {Component} from 'react'
import {AnimalContextConsumer} from '../animalContext'
import Animal from './Animal'

class Animals extends Component {
    constructor() {
        super()

        this.state = {
            newAnimal: ''
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    clearForm() {
        this.setState({
            newAnimal: ''
        })
    }

    render() {
        return (
            <AnimalContextConsumer>
                {context => (
                    <div>
                        <h2>Context Practice 2</h2>
                        <div className='form'>
                            <input
                                type='text'
                                name='newAnimal'
                                placeholder='Type of Animal'
                                value={this.state.newAnimal}
                                onChange={this.handleChange}
                            />
                            <button onClick={() => {
                                context.addAnimal(this.state.newAnimal); 
                                this.clearForm()}
                                }>Add</button>
                        </div>
                        <div>
                            {context.animals.map((item, index) => 
                                <Animal key={index} animal={item.animal} />
                            )}  
                        </div>
                    </div>
                )}
            </AnimalContextConsumer>
        )
    }
}

export default Animals
