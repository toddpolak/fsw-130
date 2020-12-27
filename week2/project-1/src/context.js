import React, {Component} from "react"

const {Provider, Consumer} = React.createContext()

class ContextProvider extends Component {
    constructor() {
        super()

        this.state = {
            uglyThings: []
        }
    }

    addUglyThing = (title) => {
        let entry = {
            title: title
        }

        this.setState({
            uglyThings: [...this.state.uglyThings, entry]
        })
    }

    render() {
        return (
            <Provider value={{
                uglyThings: this.state.uglyThings,
                addUglyThing: this.addUglyThing
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ContextProvider, Consumer as ContextConsumer}
