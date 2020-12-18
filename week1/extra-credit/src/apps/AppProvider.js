import React, { Component } from "react"

export const AppContext = React.createContext()

class AppProvider extends Component {
    constructor() {
        super()

        this.state = {
            theme: "dark"
        }
    }
  
    selectTheme = (event) => {
        this.setState({theme: event.target.value})
    }
    
    render() {

        console.log(this.props.children)
        
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
