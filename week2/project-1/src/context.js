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
    }
    
    addUglyThing = (title, image) => {
        let entry = {
            title: title,
            image: image
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
        console.log(this.state.editTitle)

        let index = event.target.id
        let title = this.state.editTitle

        let uglyThings = [...this.state.uglyThings]
        uglyThings[index] = {...uglyThings[index], title: title}
        this.setState({uglyThings})

        this.setState({id: ''})
    }

    render() {
        return (
            <Provider value={{
                uglyThings: this.state.uglyThings,
                id: this.state.id,
                editTitle: this.state.editTitle,
                addUglyThing: this.addUglyThing,
                editUglyThing: this.editUglyThing,
                editChangeHandler: this.editChangeHandler,
                editSaveClickHandler: this.editSaveClickHandler}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ContextProvider, Consumer as ContextConsumer}
