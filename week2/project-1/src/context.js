import React, {Component} from "react"

const {Provider, Consumer} = React.createContext()

class ContextProvider extends Component {
    constructor() {
        super()

        this.state = {
            uglyThings: [],
            id: '',
            editTitle: ''
        }
        //this.editUglyThing = this.editUglyThing.bind(this)
        //this.editHandleChange = this.editHandleChange.bind(this)
    }
    
    addUglyThing = (title) => {
        let entry = {
            title: title
        }

        this.setState({
            uglyThings: [...this.state.uglyThings, entry]
        })
    }

    editUglyThing = (uglyThingId, title) => {
        this.setState({
            id: uglyThingId,
            editTitle: title
        })
    }

    editChangeHandler = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    editSaveClickHandler = (event) => {
        console.log(event.target.id)
    }

    render() {
        return (
            <Provider value={{
                uglyThings: this.state.uglyThings,
                addUglyThing: this.addUglyThing,
                editUglyThing: this.editUglyThing,
                editChangeHandler: this.editChangeHandler,
                editSaveClickHandler: this.editSaveClickHandler,
                id: this.state.id,
                editTitle: this.state.editTitle }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ContextProvider, Consumer as ContextConsumer}
