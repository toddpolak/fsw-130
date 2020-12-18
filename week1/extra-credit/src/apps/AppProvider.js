import React, { Component } from "react"

export const AppContext = React.createContext('app')

class AppProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            theme: "dark"
        }
    }
  
    selectTheme = (event) => {
        this.setState({theme: event.target.value})
    }
    
    render() {
        return (
            <AppContext.Provider value={{
                theme: this.state.theme, 
                selectTheme: this.selectTheme}}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppProvider
