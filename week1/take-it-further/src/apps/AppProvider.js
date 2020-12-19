import React, { Component } from 'react'

export const AppContext = React.createContext()

class AppProvider extends Component {
    constructor() {
        super()

        this.state = {
            theme: 'dark',
            layout: 'vertical'
        }
    }
  
    selectTheme = (event) => {
        const selTheme = event.target.value

        selTheme === 'dark' || selTheme ==='blue'
            ? this.setState({layout: 'vertical'})
            : this.setState({layout: 'horizontal'})

        this.setState({theme: selTheme})
    }
    
    render() {
        return (
            <AppContext.Provider value={{
                theme: this.state.theme,
                layout: this.state.layout,
                selectTheme: this.selectTheme}}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppProvider
