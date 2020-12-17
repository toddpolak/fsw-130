import React, {Component} from "react"

const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends Component {
    state = {
        theme: "dark"
    }

    selectTheme = (event) => {
        this.setState({theme: event.target.value})
    }
    
    render() {
        return (
            <Provider value={{
                theme: this.state.theme, 
                selectTheme: this.selectTheme}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}
